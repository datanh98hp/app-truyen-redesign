import BadgeContent from "@/components/Badge";
import { FlagIcon } from "lucide-react";

export default function Follows() {
  return (
    <div className="font-semibold font-quicksand w-full">
      <BadgeContent
        icon={<FlagIcon />}
        title="Đang theo dõi"
        textColor="#ff2853"
        className="py-4 text-xl"
      />
      <div className="border">Danh sách được hiển thị</div>
    </div>
  );
}
