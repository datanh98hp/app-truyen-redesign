import BadgeContent from "@/components/Badge";
import AdvancedSearchBar from "@/components/content/AdvancedSearchBar";

import { ListStory } from "@/components/content/ListStories";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getCategories, getCountries, getMaxChapterOption, getSortByList, getStatusList, getStories } from "@/lib/data";
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

  const stories = await getStories();
  const categories = await getCategories();
  const countries = await getCountries();
  const sortbyList = await getSortByList();
  const max_chapter_options = await getMaxChapterOption();
  const status_list = await getStatusList();
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
          categories={categories}
          status={status_list}
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
