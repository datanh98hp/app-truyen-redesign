import BadgeContent from "@/components/Badge";
import { chapters, ListChapters } from "@/components/content/ListChapter";
import { SwipperContent } from "@/components/content/swipper";
import { StarIcon } from "lucide-react";
import Link from "next/link";



export default function Home() {

  // get data from api

  // genSlug for each chapter
 
  return (
    <>
      <div className="font-semibold font-quicksand py-4">
        <BadgeContent
          icon={<StarIcon />}
          title="Truyện hay"
          textColor="#ff2853"
        />
      </div>
      <SwipperContent />
      <div className="py-4">
        <BadgeContent
          icon={<StarIcon />}
          title="Truyện mới cập nhật"
          className="font-semibold"
          textColor="#e4e6eb"
        />
      </div>
      <ListChapters data={chapters} />
      <div className="my-2 ">
          {/* <span>Danh sách được hiển thị top lượt đọc trong : {time_type}</span> */}
          <div className="flex flex-col items-center">
            <ListChapters data={chapters} />
            <Link
              href="?page=2"
              className="my-4 p-2 rounded-md bg-amber-600 text-amber-50 dark:bg-gray-800 dark:text-gray-50 hover:opacity-80"
            >
              Xem thêm ...
            </Link>
          </div>
        </div>
    </>
  );
}
