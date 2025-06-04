import BadgeContent from "@/components/Badge";
import { categories } from "@/components/content/DropdownList";
import FilterBar, {
  CountryType,
  SortByType,
  StatusType,
} from "@/components/content/FilterBar";
import { chapters, ListChapters } from "@/components/content/ListChapter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { CalendarSearch } from "lucide-react";

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

  const countries = [
    {
      value: "vietnam",
      label: "Việt Nam",
    },
    {
      value: "china",
      label: "Trung Quốc",
    },
    {
      value: "korea",
      label: "Hàn Quốc",
    },
  ] as CountryType[];
  const sortbyList = [
    {
      value: "latest",
      label: "Mới nhất",
    },
    {
      value: "views",
      label: "Lượt xem",
    },
    {
      value: "favorites",
      label: "Yêu thích",
    },
  ] as SortByType[];
  const status = [
    {
      value: "ongoing",
      label: "Đang tiến hành",
    },
    {
      value: "completed",
      label: "Hoàn thành",
    },
  ] as StatusType[];
  return (
    <div className="font-semibold font-quicksand">
      <BadgeContent
        icon={<CalendarSearch />}
        title={titleString()}
        textColor="#ff2853"
        className="py-4 text-xl"
      />
      <div className="w-full">
        {/* <div className="filter-bar border-1 rounded-sm bg-gray-200 dark:bg-gray-700">
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
        </div> */}
        <FilterBar
          categories={categories}
          status={status}
          country={countries}
          sortBy={sortbyList}
        />
        <div className="my-2 ">
          {/* <span>Danh sách được hiển thị top lượt đọc trong : {time_type}</span> */}
          <div className="flex flex-col items-center">
            <ListChapters data={chapters} />
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
