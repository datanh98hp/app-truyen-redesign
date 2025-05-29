import { SwipperContent } from "@/components/content/swipper";
import { StarIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="font-semibold font-quicksand py-4">
        <p className="flex flex-row gap-2 text-[#ff2853]">
          <span>
            <StarIcon />
          </span>
          Truyện hay
        </p>
      </div>
      <SwipperContent />
      <div className="border py-4">
        <p>Content - home page</p>
      </div>
      
    </>
  );
}
