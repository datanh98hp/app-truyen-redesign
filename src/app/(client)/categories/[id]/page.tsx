import BadgeContent from "@/components/Badge";

import FilterBar from "@/components/content/FilterBar";

import { ListStory } from "@/components/content/ListStories";
import {
  CategoryType,
  CountryType,
  SortByType,
  Story,
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
import {
  getCategories,
  getCountries,
  getSortByList,
  getStories,
} from "@/lib/data";
import { FlagIcon } from "lucide-react";

async function Category({ params }: { params: Promise<{ id: string }> }) {
  const categories = await getCategories();
  const stories = await getStories();
  const { id } = await params;

  const countries = await getCountries();
  const sortbyList = await getSortByList();
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
          categories={categories}
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
