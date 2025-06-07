"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

const SignInGitHub = () => {
  const handleSignIn = async () => {
    await signIn("github");
    // Logic to handle sign in
    console.log("User signed in");
  };

  return (
    <div className="flex justify-center">
      <form action={handleSignIn}>
        <Button variant={"outline"} type="submit">
          Sign in with GitHub
        </Button>
      </form>
    </div>
  );
};

export { SignInGitHub };
