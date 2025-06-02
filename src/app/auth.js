import NextAuth from "next-auth";
import "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // debug: !!process.env.AUTH_DEBUG,
  // theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  // adapter: UnstorageAdapter(storage),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  // basePath: "/auth",
  session: { strategy: "jwt" },
  callbacks: {
    // authorized({ request, auth }) {
      // const { pathname } = request.nextUrl
      // if (pathname === "/middleware-example") return !!auth
      // return true
    },
    // jwt({ token, trigger, session, account }) {

    //   return token
    // },
    // async session({ session, token }) {
    //   // if (token?.accessToken) session.accessToken = token.accessToken

    //   // return session
    // },
  // },
  // experimental: { enableWebAuthn: true },
});
