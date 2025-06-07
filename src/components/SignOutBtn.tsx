"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const SignOutButton = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
    console.log("User signed out");
  };

  return (
    <div className="flex justify-center">
      <Button variant={"destructive"} onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
};

export { SignOutButton };

