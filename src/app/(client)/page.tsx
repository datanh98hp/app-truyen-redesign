import BadgeContent from "@/components/Badge";
import { ListStory } from "@/components/content/ListStories";
import { SwipperContent } from "@/components/content/swipper";
import { getData, getLatestDatagetLatestData } from "@/lib/data";
import { StarIcon } from "lucide-react";
import Link from "next/link";


export default async function Home() {
  // get data from api
  const stories_latest = await getLatestDatagetLatestData();
  const data = await getData();
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
      <SwipperContent data={stories_latest} />
      <div className="py-4">
        <BadgeContent
          icon={<StarIcon />}
          title="Truyện mới cập nhật"
          className="font-semibold"
          textColor="#e4e6eb"
        />
      </div>
      <div className="my-2 ">
        {/* <span>Danh sách được hiển thị top lượt đọc trong : {time_type}</span> */}
        <div className="flex flex-col items-center">
          <ListStory data={data} />
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
