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
export type CategoryType = {
  value: number | string;
  label: string;
};
export const categories = [
  {
    value: "11",
    label: "Next.js",
  },
  {
    value: "22",
    label: "SvelteKit",
  },
  {
    value: "33",
    label: "Nuxt.js",
  },
  {
    value: "44",
    label: "Remix",
  },
  {
    value: "55",
    label: "Astro",
  },
] as CategoryType[];
export default function DropdownList({
  data,
  placeholder,
  inputPlacehoder,
  onSelectedValue,
}: {
  data: { value: string | number; label: string }[];
  placeholder?: string;
  inputPlacehoder?: string;
  onSelectedValue?: (value: string) => void;
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
                  value={item.value.toString()}
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
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
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
