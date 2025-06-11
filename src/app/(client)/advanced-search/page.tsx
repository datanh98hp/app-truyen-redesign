import BadgeContent from "@/components/Badge";
import AdvancedSearchBar, {
  MaxChapterOptsType,
} from "@/components/content/AdvancedSearchBar";


import { ListStory, stories } from "@/components/content/ListStories";
import { CategoryType, CountryType, SortByType, StatusType } from "@/components/types/types";
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
async function getData(): Promise<CategoryType[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      title: "Romantic",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 2,
      title: "Romantic",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 3,
      title: "Romantic",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 4,
      title: "Romantic",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 5,
      title: "Romantic",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 6,
      title: "Romantic dat anh",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "pending",
    },
    // ...
  ] as CategoryType[];
}
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
      value: "desc-createdAt",
      label: "Ngày đăng giảm dần",
    },
    {
      value: "esc-createdAt",
      label: "Ngày đăng tăng dần",
    },
    {
      value: "desc-updatedAt",
      label: "Ngày cập nhật giảm dần",
    },
    {
      value: "esc-updatedAt",
      label: "Ngày cập nhật tăng dần",
    },
    {
      value: "desc-view",
      label: "Lượt xem giảm dần",
    },
    {
      value: "esc-view",
      label: "Lượt xem tăng dần",
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

  const max_chapter_options = [
    { value: 0, label: "Nhiều hơn 1" },
    { value: 50, label: "Nhiều hơn 50" },
    { value: 100, label: "Nhiều hơn 100" },
    { value: 200, label: "Nhiều hơn 200" },
    { value: 300, label: "Nhiều hơn 300" },
    { value: 400, label: "Nhiều hơn 400" },
    { value: 500, label: "Nhiều hơn 500" },
  ] as MaxChapterOptsType[];
  const categoriesList = await getData();
  return (
    <div className="font-semibold font-quicksand">
      <BadgeContent
        icon={<CalendarSearch />}
        title={titleString()}
        textColor="#ff2853"
        className="py-4 text-xl"
      />
      <div className="w-full">
        <AdvancedSearchBar
          categories={categoriesList}
          status={status}
          country={countries}
          sortBy={sortbyList}
          maxChapterOptsion={max_chapter_options}
        />
        <div className="my-2 ">
          {/* <span>Danh sách được hiển thị top lượt đọc trong : {time_type}</span> */}
          <div className="flex flex-col items-center">
            <ListStory data={stories} />
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
