import BadgeContent from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { CalendarSearch } from "lucide-react";

export default async function Top({
  params,
}: {
  params: Promise<{ time_type: string }>;
}) {
  const { time_type } = await params;
  return (
    <div className="font-semibold font-quicksand">
      <BadgeContent
        icon={<CalendarSearch />}
        title="Top ngày"
        textColor="#ff2853"
        className="py-4 text-xl"
      />
      <div className="w-full">
        <div className="filter-bar border-1 rounded-sm bg-gray-200 dark:bg-gray-700">
          <div className="flex flex-row gap-4 p-2">
            <p className="font-semibold p-2">Trạng thái</p>
            <div className="flex flex-row gap-2">
              <Button variant={"outline"} className="border p-2 rounded-2xl">
                Trang thai 11
              </Button>
              <Button variant={"outline"} className="border p-2 rounded-2xl">
                Trang thai 22
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
        <div className="my-2">
          Danh sách được hiển thị top lượt đọc trong : {time_type}
        </div>
      </div>
    </div>
  );
}
