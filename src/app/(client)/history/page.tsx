import BadgeContent from "@/components/Badge";
import { HeartPlus } from "lucide-react";

export default function History() {
   return <div className="font-semibold font-quicksand">
    <BadgeContent icon={<HeartPlus />} title="Lịch sử đọc" textColor="#ff2853" className="py-4 text-xl"  />
    <div className="border">
      Danh sách được hiển thị
    </div>
  </div>
}
