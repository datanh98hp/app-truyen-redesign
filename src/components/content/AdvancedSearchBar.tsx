"use client";
import { cn } from "@/lib/utils";
import { RotateCcwIcon } from "lucide-react";
import { useContext } from "react";
import { FilterContext } from "../context/filter.context";
import { Button } from "../ui/button";
import DropdownList from "./DropdownList";
import DropdownMultiSelect from "./DropdownMultiSelect";
import { CategoryType, CountryType, StatusType } from "../types/types";

export type MaxChapterOptsType = {
  value: number;
  label: string;
};
export type SortByType = { value: string; label: string };
type FilterAdvancedBarProps = {
  status: StatusType[];
  country: CountryType[];
  categories: CategoryType[];
  sortBy: SortByType[];
  maxChapterOptsion: MaxChapterOptsType[];
};

export default function AdvancedSearchBar({
  categories,
  status,
  country,
  sortBy,
  maxChapterOptsion,
}: FilterAdvancedBarProps) {
  const filterData = useContext(FilterContext);
  console.log("Filter Data:", filterData);
  const { filter, updateFilter } = filterData;
  const handleStatusFilter = (status: string) => {
    updateFilter({
      ...filterData.filter,
      includes: {
        categories: filterData.filter.includes?.categories ?? [],
        status,
        country: filterData.filter.includes?.country ?? "",
        sortBy: filterData.filter.includes?.sortBy ?? "",
      },
    });

    console.log("Status Filter advanced Set:", filter.includes?.status);
  };
  const handleCountryFilter = (country: string) => {
    updateFilter({
      ...filterData.filter,
      includes: {
        categories: filterData.filter.includes?.categories ?? [],
        status: filterData.filter.includes?.status ?? "",
        country,
        sortBy: filterData.filter.includes?.sortBy ?? "",
      },
    });
    console.log("Status Filter advanced Set:", filter.includes?.country);
  };
  const resetFilter = () => {
    filterData.resetFilter();
    console.log("Filter Reset");
  };
  const handleSortByChange = (sortBy: string) => {
    // Update the filter with the selected sortBy value
    updateFilter({
      ...filterData.filter,
      includes: {
        categories: filterData.filter.includes?.categories ?? [],
        status: filterData.filter.includes?.status ?? "",
        country: filterData.filter.includes?.sortBy ?? "",
        sortBy,
      },
    });
    console.log("Status Filter advanced Set:", filter.includes?.sortBy);
  };

  const handleItemChecked = (value: number) => {
    // Ensure includes and categories are defined and value is a number
    const includes = filterData.filter.includes ?? {
      categories: [],
      status: filterData.filter.status ?? "",
      country: filterData.filter.country ?? "",
    };
    const numValue = typeof value === "number" ? value : Number(value);
    if (isNaN(numValue)) return; // Optionally skip if not a valid number

    updateFilter({
      ...filterData.filter,
      includes: {
        ...includes,
        categories: [...(includes.categories ?? []), numValue],
        status: includes.status ?? filterData.filter.status ?? "",
        country: includes.country ?? filterData.filter.country ?? "",
        sortBy: filterData.filter.includes?.sortBy ?? "",
      },
    });
    console.log("Status Filter advanced is checked category:", filter);
  };
  const handleSelectedMaxChapter = (value: number) => {
    // const maxChapter = parseInt(value, 10);
    updateFilter({ ...filterData.filter, max_chapter: value });
    console.log("Status Filter advanced :", filter);
  };
  return (
    <div className="filter-bar relative border-1 rounded-sm bg-gray-200 dark:bg-gray-700">
      <div className="flex flex-row gap-4 p-2">
        <p className="font-semibold p-2">Thể loại</p>
        <div className="flex flex-row gap-2">
          <DropdownMultiSelect
            data={categories}
            placeholder="Chọn thể loại ..."
            inputPlacehoder="Chọn loại ..."
            onItemSelectedValue={(value: number) => handleItemChecked(value)}
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 p-2">
        <p className="font-semibold p-2">Trạng thái</p>
        <div className="flex flex-row gap-2">
          {status.map((item) => (
            <Button
              key={item.value}
              variant={"outline"}
              onClick={() => handleStatusFilter(item.value)}
              className={cn(
                "border p-2 rounded-2xl",
                `${
                  filterData.filter.includes?.status === item.value
                    ? "bg-gray-400 dark:bg-amber-100 dark:text-black"
                    : ""
                }`
              )}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-4 p-2">
        <p className="font-semibold p-2">Quốc gia</p>
        <div className="flex flex-row gap-2">
          {country.map((item) => (
            <Button
              key={item.value}
              variant={"outline"}
              onClick={() => handleCountryFilter(item.value)}
              className={cn(
                "border p-2 rounded-2xl",
                `${
                  filterData.filter.includes?.country === item.value
                    ? "bg-gray-400 dark:bg-amber-100 dark:text-black"
                    : ""
                }`
              )}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-4 p-2">
        <p className="font-semibold p-2">Thể loại</p>
        <div className="flex flex-row gap-2">
          <DropdownList
            data={maxChapterOptsion}
            placeholder="Số chương tối đa"
            inputPlacehoder="Số chương ..."
            onSelectedValue={(value: string | number) =>
              handleSelectedMaxChapter(+value.toString())
            }
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 p-2">
        <p className="font-semibold p-2">Sắp xếp</p>
        <div className="flex flex-row gap-2">
          <DropdownList
            data={sortBy}
            placeholder="Chọn sắp xếp"
            inputPlacehoder="Sắp xếp theo ..."
            onSelectedValue={(value: string | number) => {
              handleSortByChange(value.toString());
            }}
          />
        </div>
      </div>
      <div className="absolute right-2 top-2">
        <Button
          variant={"outline"}
          className="border p-2 rounded-2xl"
          onClick={resetFilter}
        >
          <RotateCcwIcon className="w-4 h-4" />
          <span className="ml-1">Reset</span>
        </Button>
      </div>
    </div>
  );
}
