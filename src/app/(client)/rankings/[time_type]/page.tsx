import BadgeContent from "@/components/Badge";
import { chapters, ListChapters } from "@/components/content/ListChapter";
import { Button } from "@/components/ui/button";
import { CalendarSearch } from "lucide-react";
import Link from "next/link";

export default async function Top({
  params,
}: {
  params: Promise<{ time_type: string }>;
}) {
  const { time_type } = await params;



  const titleString = () => {
    switch (time_type) {
      case "day":
        return "Top ngày";
      case "weekly":
        return "Top tuần";
      case "monthly":
        return "Top tháng";
      case "all-time":
        return "Toàn thời gian";
      case "latest":
        return "Mới nhất";
      case "favorites":
        return "Được yêu thích";
      default:
        return "Ngẫu nhiên";
    }
  };

  return (
    <div className="font-semibold font-quicksand">
      <BadgeContent
        icon={<CalendarSearch />}
        title={titleString()}
        textColor="#ff2853"
        className="py-4 text-xl"
      />
      <div className="w-full">
        <div className="filter-bar border-1 rounded-sm bg-gray-200 dark:bg-gray-700">
          <div className="flex flex-row gap-4 p-2">
            <p className="font-semibold p-2">Trạng thái</p>
            <div className="flex flex-row gap-2">
              <Button variant={"outline"} className="border p-2 rounded-2xl">
                Trang thai 1
              </Button>
              <Button variant={"outline"} className="border p-2 rounded-2xl">
                Trang thai 2
              </Button>
            </div>
          </div>
          <div className="flex flex-row gap-4 p-2">
            <p className="font-semibold p-2">Quốc gia</p>
            <div className="flex flex-row gap-2">
              <Button variant={"outline"} className="border p-2 rounded-2xl">
                Trung Quốc
              </Button>
              <Button variant={"outline"} className="border p-2 rounded-2xl">
                Hàn Quốc
              </Button>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}
