"use client";
import { useState } from "react";
import {
  CategoryType,
  CountryType,
  MaxChapterOptsType,
  SortByType,
} from "../types/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export type DataTypeCmd<T> = T;

// export const categories = [
//   {
//     value: "11",
//     label: "Next.js",
//   },
//   {
//     value: "22",
//     label: "SvelteKit",
//   },
//   {
//     value: "33",
//     label: "Nuxt.js",
//   },
//   {
//     value: "44",
//     label: "Remix",
//   },
//   {
//     value: "55",
//     label: "Astro",
//   },
// ] as CategoryType[];
export default function DropdownList({
  data,
  placeholder,
  inputPlacehoder,
  defaultValue,
  onSelectedValue,
}: {
  data:
    | CategoryType[]
    | SortByType[]
    | CountryType[]
    | MaxChapterOptsType[]
    | any[];
  placeholder?: string;
  inputPlacehoder?: string;
  defaultValue?: any;
  onSelectedValue?: (value: string | number) => void;
}) {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue !== undefined ? String(defaultValue) : ""
  );
  const handleValueChange = (value: string) => {
    setSelectedValue(value); // Update the selected value
    if (onSelectedValue) {
      // Try to convert back to number if original defaultValue was a number
      if (
        typeof defaultValue === "number" &&
        !isNaN(Number(value)) &&
        String(Number(value)) === value
      ) {
        onSelectedValue(Number(value));
      } else {
        onSelectedValue(value);
      }
    }
  };

  return (
    <Select onValueChange={handleValueChange} value={selectedValue}>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          <SelectLabel>{defaultValue||"Trang thai"}</SelectLabel>
          {data.map((item, index) => (
            <SelectItem
              key={index}
              className="cursor-pointer"
              value={String(item.value ?? item.id)}
            >
              {item.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
