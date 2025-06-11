import BadgeContent from "@/components/Badge";

import FilterBar from "@/components/content/FilterBar";

import { stories, ListStory } from "@/components/content/ListStories";
import {
  CategoryType,
  CountryType,
  SortByType,
  StatusType,
} from "@/components/types/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FlagIcon } from "lucide-react";
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
async function Category({ params }: { params: Promise<{ id: string }> }) {
  const data = await getData();
  const { id } = await params;
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
        icon={<FlagIcon />}
        title={`Danh sách truyện theo theo loại : ${id}`}
        textColor="#ff2853"
        className="py-4 text-xl"
      />
      <div className="w-full">
        <FilterBar
          categories={data}
          // status={status}
          country={countries}
          sortBy={sortbyList}
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
export default Category;
