"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
export default function MultiSelect({
  data,
  placeholder,
  inputPlacehoder,
  defaultValues,
  onItemSelectedValue,
}: {
  data: any[];
  placeholder?: string;
  inputPlacehoder?: string;
  defaultValues?: any[];
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
          {value ? data?.find((item) => item.title === value)?.title : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={inputPlacehoder} className="h-9"  />
          <CommandList>
            <CommandEmpty>Không tìm thấy thể loại.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.id}
                  onSelect={(currentValue) => {
                    // console.log(currentValue); //title
                    // console.log("value:", item);
                    // setValue(item.title === value ? "" : currentValue);
                    
                    // setOpen(false);
                    // Call the function to handle selected value
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
