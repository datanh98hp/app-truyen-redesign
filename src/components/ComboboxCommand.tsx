"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
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
import {
  CategoryType,
  CountryType,
  MaxChapterOptsType,
  SortByType,
} from "./types/types";

export function ComboboxCommand({
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
  const [input, setid] = React.useState("");

  const handleChanged = (item: any) => {
    console.log("item", item);
    onSelectedValue && onSelectedValue(item.id);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[240px] justify-between"
        >
          {input
            ? data.find((item) => item.title === input)?.title
            : "Chọn ..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandList>
            <CommandEmpty>{"Không tìm thấy dữ liệu"}</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  className="hover:bg-gray-100"
                  key={item.id}
                  id={item.id}
                  onSelect={(currentValue) => {
                    console.log("currentid", currentValue);
                    console.log("framework ", item);
                    console.log("input (prev value) :", input);

                    setid(currentValue === input ? "" : currentValue);
                    setOpen(false);
                    handleChanged(item);
                  }}
                >
                  {item.title}
                  <Check
                    className={cn(
                      "ml-auto",
                      input === item.title ? "opacity-100" : "opacity-0"
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
