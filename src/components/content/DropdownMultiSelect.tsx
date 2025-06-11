"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { CategoryType } from "../types/types";

// export const categoriesList = [
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Action",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     status: "active",
//   },
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Adventure",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     status: "active",
//   },
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Comedy",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     status: "active",
//   },
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Drama",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     status: "active",
//   },
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Fantasy",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     status: "active",
//   },
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Horror",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     status: "active",
//   },
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Romance",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     status: "active",
//   },
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Thriller",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     status: "active",
//   },
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Western",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     status: "active",
//   },
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Romantic",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     status: "active",
//   },
// ] as CategoryType[];

export default function DropdownMultiSelect({
  data,
  placeholder,
  inputPlacehoder,
  onItemSelectedValue,
}: {
  data: any[];
  placeholder?: string;
  inputPlacehoder?: string;
  onItemSelectedValue?: (value: number) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? data?.find((item) => item.id === value)?.title : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={inputPlacehoder} className="h-9" />
          <CommandList>
            <CommandEmpty>Không tìm thấy thể loại.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.id}
                  //   value={item.value.toString()}
                  onSelect={(currentValue) => {
                    // setValue(currentValue === value ? "" : currentValue);
                    // setOpen(false);
                    // // Call the function to handle selected value
                    // onSelectedValue &&
                    //   onSelectedValue(
                    //     value === currentValue ? "" : currentValue
                    //   );
                  }}
                >
                  <Checkbox
                    onCheckedChange={(checked) => {
                      console.log(
                        `checked ${typeof item.id} ${item.title}`,
                        checked
                      );
                      onItemSelectedValue &&
                        onItemSelectedValue(Number(item.id));
                    }}
                  />
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
