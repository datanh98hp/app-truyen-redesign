"use client";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { FilterContext } from "../context/filter.context";
import { cn } from "@/lib/utils";
import { RotateCcwIcon } from "lucide-react";

export default function FilterBar() {
  const filterData = useContext(FilterContext);
  console.log("Filter Data:", filterData);
  const handleStatusFilter = (status: string) => {
    filterData.updateFilter({ ...filterData.filter, status });
    console.log("Status Filter Set:", filterData.filter.status);
  };
  const handleCountryFilter = (country: string) => {
    filterData.updateFilter({ ...filterData.filter, country });
    console.log("Status Filter Set:", filterData.filter.country);
  };
  const resetFilter = () => {
    filterData.resetFilter();
    console.log("Filter Reset");
  };
  return (
    <div className="filter-bar relative border-1 rounded-sm bg-gray-200 dark:bg-gray-700">
      <div className="flex flex-row gap-4 p-2">
        <p className="font-semibold p-2">Trạng thái</p>
        <div className="flex flex-row gap-2">
          <Button
            variant={"outline"}
            onClick={() => handleStatusFilter("ongoing")}
            className={cn(
              "border p-2 rounded-2xl",
              `${filterData.filter.status === "ongoing" ? "bg-gray-400" : ""}`
            )}
          >
            Đang tiến hành
          </Button>
          <Button
            variant={"outline"}
            onClick={() => handleStatusFilter("completed")}
            className={cn(
              "border p-2 rounded-2xl",
              `${filterData.filter.status === "completed" ? "bg-gray-400" : ""}`
            )}
          >
            Hoàn thành
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-4 p-2">
        <p className="font-semibold p-2">Quốc gia</p>
        <div className="flex flex-row gap-2">
          <Button
            variant={"outline"}
            onClick={() => handleCountryFilter("china")}
            className={cn(
              "border p-2 rounded-2xl",
              `${filterData.filter.country === "china" ? "bg-gray-400" : ""}`
            )}
          >
            Trung Quốc
          </Button>
          <Button
            variant={"outline"}
            onClick={() => handleCountryFilter("korea")}
            className={cn(
              "border p-2 rounded-2xl",
              `${filterData.filter.country === "korea" ? "bg-gray-400" : ""}`
            )}
          >
            Hàn Quốc
          </Button>
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
