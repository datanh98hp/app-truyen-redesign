import { KeyRound, UserCircle2Icon } from "lucide-react";
import Link from "next/link";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-semibold font-quicksand py-12">
      <div className="grid grid-cols-4 border p-2 ">
        <div className="col-1 dark:bg-gray-200 text-black">
          <ul>
            <li className="p-4 hover:underline">
              <Link href="/user" className="flex flex-row gap-2">
                <span>
                  <UserCircle2Icon />
                </span>
                <p>Thông tin</p>
              </Link>
            </li>
            <li className="p-4 hover:underline">
              <Link
                href="/user/change-password"
                className="flex flex-row gap-2"
              >
                <span>
                  <KeyRound />
                </span>
                <p>Đổi mật khẩu</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-3 flex flex-col items-center my-4">
          {children}
        </div>
      </div>
    </div>
  );
}
