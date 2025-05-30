import { ChangePasswordForm } from "@/components/content/User/ChangePasswordForm";
import Image from "next/image";

export default function UserChangePassword() {
  return (
    <>
      <div className="">
        <Image
          src="/assets/thumb.png"
          alt="image"
          width={50}
          height={50}
          className="rounded-full h-24 w-24 my-4"
        />
      </div>

      <ChangePasswordForm />
    </>
  );
}
