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
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";
import { CategoryType, CountryType } from "../types/types";
import { MaxChapterOptsType, SortByType } from "./AdvancedSearchBar";

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
            ? data?.find((item: any) => item.id === value)?.title
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
              {data.map((item: any) => (
                <CommandItem
                  key={item.id}
                  value={item.title.toString()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    // Call the function to handle selected value
                    onSelectedValue &&
                      onSelectedValue(
                        value === currentValue ? "" : currentValue
                      );
                  }}
                >
                  {item.title}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
