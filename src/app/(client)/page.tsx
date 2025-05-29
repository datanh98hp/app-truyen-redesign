import BadgeContent from "@/components/Badge";
import { SwipperContent } from "@/components/content/swipper";
import { StarIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="font-semibold font-quicksand py-4">
        <BadgeContent icon={<StarIcon />} title="Truyện hay" textColor="#ff2853" />
      </div>
      <SwipperContent />
      <div className="py-4">
        <BadgeContent icon={<StarIcon />} title="Truyện mới cập nhật" className="font-semibold" textColor="#e4e6eb" />
      </div>
      <div>
        asdd
      </div>
      
    </>
  );
}
