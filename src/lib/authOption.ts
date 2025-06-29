import { NextAuthOptions } from "next-auth";
import GitHubProvider, { GithubEmail } from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // console.log("credentials check  from credentials: ", credentials);
        if (
          credentials?.email.trim() === "" ||
          credentials?.password.trim() === ""
        ) {
          throw new Error("Email and password are required");
        }
        //console.log("email check  : ", email);
        //console.log("process.env.API_URL", process.env.API_URL);
        const res = await fetch(`${process.env.API_URL}/login`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        // const user = {
        //   ...credentials,
        //   name: "user",
        //   id: "1",
        // };
        // console.log("credentials check  user: ", user);
        if (res.ok && user) {
          return user;
        }
        // If no user found, return null
        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      id: "github",
      name: "GitHub",

      authorization: {
        url: "https://github.com/login/oauth/authorize",
        params: { scope: "read:user user:email" },
      },
      token: "https://github.com/login/oauth/access_token",
      userinfo: {
        async request({ client, tokens }) {
          {
            const profile = await client.userinfo(tokens.access_token!);
            const res = await fetch("https://api.github.com/user/emails", {
              headers: { Authorization: `token ${tokens.access_token}` },
            });
            if (res.ok) {
              const emails: GithubEmail[] = await res.json();
              profile.email = (
                emails.find((e) => e.primary) ?? emails[0]
              ).email;
            }
            //console.log("profile : ", profile);
            return profile;
          }
        },
      },
      profile(profile) {
        //console.log("profile : ", profile);
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
  ],
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return {
          ...token,
          ...session.user,
        };
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};
