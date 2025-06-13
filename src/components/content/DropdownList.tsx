"use client";
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
  onSelectedValue?: (value: string | number) => void;
}) {
  return (
    <Select onValueChange={onSelectedValue}>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          {data.map((item, index) => (
            <SelectItem key={index} value={item.value || item.id}>
              {item.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
