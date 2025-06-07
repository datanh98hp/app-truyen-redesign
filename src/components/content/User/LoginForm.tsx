"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const route = useRouter();
  const handleSubmit = async (formData: FormData) => {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
      callbackUrl: "/",
    });
    route.push("/");
  };

  return (
    <form className="space-y-4" action={handleSubmit}>
      <Input
        name="email"
        placeholder="Email"
        type="email"
        required
        autoComplete="email"
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        required
        autoComplete="current-password"
      />
      <Button className="w-full" type="submit">
        Sign In
      </Button>
    </form>
  );
}
