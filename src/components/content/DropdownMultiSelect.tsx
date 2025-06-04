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
export type CategoryType = {
  value: number | string;
  label: string;
};
export const categoriesList = [
  {
    value: 1,
    label: "Action",
  },
  {
    value: 2,
    label: "Horror",
  },
  {
    value: 3,
    label: "Drama",
  },
  {
    value: 4,
    label: "School Life",
  },
  {
    value: 5,
    label: "Ngôn Tình",
  },
  {
    value: 6,
    label: "Mystery",
  },
  {
    value: 7,
    label: "Romance",
  },
  {
    value: 8,
    label: "Comedy",
  },
  {
    value: 9,
    label: "Fantasy",
  },
  {
    value: 10,
    label: "Adventure",
  },
  {
    value: 11,
    label: "Sci-Fi",
  },
  {
    value: 12,
    label: "Supernatural",
  },
  {
    value: 13,
    label: "Slice of Life",
  },
  {
    value: 14,
    label: "Sports",
  },
  {
    value: 15,
    label: "Music",
  },
  {
    value: 16,
    label: "Historical",
  },
  {
    value: 17,
    label: "Mecha",
  },
  {
    value: 18,
    label: "Adventure",
  },
  {
    value: 19,
    label: "Psychological",
  },
  {
    value: 20,
    label: "Thriller",
  },
] as CategoryType[];
export default function DropdownMultiSelect({
  data,
  placeholder,
  inputPlacehoder,
  onItemSelectedValue,
}: {
  data: { value: string | number; label: string }[];
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
          {value
            ? data?.find((item) => item.value === value)?.label
            : placeholder}
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
                  key={item.value}
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
                      console.log(`checked ${typeof item.value} ${item.value}`, checked);
                      onItemSelectedValue &&
                        onItemSelectedValue(Number(item.value));
                    }}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
