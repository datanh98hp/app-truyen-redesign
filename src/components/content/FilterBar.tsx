"use client";
import { cn } from "@/lib/utils";
import { RotateCcwIcon } from "lucide-react";
import { useContext } from "react";
import { FilterContext } from "../context/filter.context";
import { Button } from "../ui/button";
import DropdownList from "./DropdownList";
import { FilterBarProps } from "../types/types";
import { ComboboxCommand } from "../ComboboxCommand";

export default function FilterBar({
  categories,
  status,
  country,
  sortBy,
}: FilterBarProps) {
  const filterData = useContext(FilterContext);
  console.log("Filter Data:", filterData);
  const { filter, updateFilter } = filterData;
  const handleStatusFilter = (status: string) => {
    filterData.updateFilter({ ...filter, status });

    console.log("Status Filter Set:", filter.status);
  };
  const handleCountryFilter = (country: string) => {
    filterData.updateFilter({ ...filter, country });

    console.log("Status Filter Set:", filter.country);
  };
  const resetFilter = () => {
    filterData.resetFilter();
    console.log("Filter Reset");
  };
  const handleSortByChange = (value: string) => {
    // Update the filter with the selected sortBy value
    updateFilter({ ...filterData.filter, sortBy: value });
  };
  const handleCateChange = (value: string) => {
    updateFilter({ ...filterData.filter, category: value });
  };
  return (
    <div className="filter-bar relative border-1 rounded-sm bg-gray-200 dark:bg-gray-700">
      {categories !== undefined && categories.length > 0 && (
        <div className="flex flex-row gap-4 p-2">
          <p className="font-semibold p-2">Thể loại</p>
          <div className="flex flex-row gap-2">
            <ComboboxCommand
              data={categories}
              placeholder="Chọn thể loại"
              inputPlacehoder="Tim kiếm thể loại"
              onSelectedValue={(value: any) => handleCateChange(value)}
            />
          </div>
        </div>
      )}
      {status !== undefined && status.length > 0 && (
        <div className="flex flex-row gap-4 p-2">
          <p className="font-semibold p-2">Trạng thái</p>
          <div className="flex flex-row gap-2">
            {status?.map((item) => (
              <Button
                key={item.value}
                variant={"outline"}
                onClick={() => handleStatusFilter(item.value)}
                className={cn(
                  "border p-2 rounded-2xl",
                  `${
                    filterData.filter.status === item.value
                      ? "bg-gray-400 dark:bg-amber-100 dark:text-black"
                      : ""
                  }`
                )}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      )}
      {country !== undefined && country.length > 0 && (
        <div className="flex flex-row gap-4 p-2">
          <p className="font-semibold p-2">Quốc gia</p>
          <div className="flex flex-row gap-2">
            {country?.map((item) => (
              <Button
                key={item.value}
                variant={"outline"}
                onClick={() => handleCountryFilter(item.value)}
                className={cn(
                  "border p-2 rounded-2xl",
                  `${
                    filterData.filter.country === item.value
                      ? "bg-gray-400 dark:bg-amber-100 dark:text-black"
                      : ""
                  }`
                )}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      )}
      {sortBy !== undefined && sortBy.length > 0 && (
        <div className="flex flex-row gap-4 p-2  border">
          <p className="font-semibold p-2">Sắp xếp</p>
          <div className="flex flex-row gap-2 ">
            <DropdownList
              data={sortBy || []}
              placeholder="Chọn sắp xếp"
              inputPlacehoder="Sắp xếp theo ..."
              onSelectedValue={(value: string | number) => {
                handleSortByChange(value.toString());
              }}
            />
          </div>
        </div>
      )}
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
