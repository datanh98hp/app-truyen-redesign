"use client";
import { updateCategory } from "@/app/actions/admin/category.action";
// type CategoryTypeTb = {
//   id: string | number
//   amount: number
//   status: "active" | "hiddend"
//   title: string
//   country: string
//   createdAt: string
// }

import { CategoryType } from "@/components/types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { DialogDescription } from "@radix-ui/react-dialog";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, Trash2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// export const categories: CategoryType[] = [
//   {
//     id: 1,
//     title: "Action",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     stories: [],
//     status: "active",
//   },
//   {
//     id: 2,
//     title: "Romantic",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     stories: [],
//     status: "active",
//   },
//   // ...
// ];

export const columns: ColumnDef<CategoryType>[] = [
  {
    accessorKey: "id",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   accessorKey: "status",
  //   header: "Trang thai",
  // },
  {
    accessorKey: "title",
    header: "Tieu de",
  },
  {
    accessorKey: "country.value",
    header: "Quốc gia",
    cell: ({ row }) => row.original?.country?.label,
  },
  {
    accessorKey: "createdAt",
    header: "Ngày tạo",
    // cell: ({row}) => new Date(row.getValue("createdAt")).toLocaleString('en-US'),
  },
  {
    accessorKey: "action",
    header: ({ table }) => <div className="text-center ">...</div>,
    cell: ({ row }) => {
      let id = row.original.id;

      const [title, settitle] = useState("");
      const [country, setcountry] = useState("");
      async function handleSubmitUpdateCate() {
        const current_data = row.original;
        // console.log(
        //   `==> Excute updateCategory with data (formData) : ${JSON.stringify({
        //     current_data,
        //   })}`
        // );

        const newData = {
          ...current_data,
        } as CategoryType;

        //add to form
        const formData = new FormData();
        formData.append("data", JSON.stringify(newData));
        // console.log(formData.get("data"));
        /// //send the comment to the server
        try {
          await updateCategory(formData);
        } catch (error) {
          console.log(error);
        }
      }
      return (
        <div className="flex gap-2 justify-center">
          {/* Dialog form edit & verify delete*/}
          <Dialog>
            <form action={handleSubmitUpdateCate}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <EditIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-gray-900">
                <DialogHeader>
                  <DialogTitle>Sửa danh mục - {id}</DialogTitle>
                  <DialogDescription>
                    <i>Xác nhận thay đổi thông tin và không thể khôi phục.</i>
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="title">Tiêu đề</Label>
                    <Input
                      id="title"
                      name="title"
                      value={row.original.title}
                      onChange={(event) => settitle(event.target.value)}
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="country">Quốc gia</Label>
                    <Input
                      id="country"
                      name="country"
                      value={row.original.country?.label}
                      onChange={(event) => setcountry(event.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      onClick={() => console.log("Cancel")}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    onClick={() => handleSubmitUpdateCate()}
                  >
                    Submit
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Trash2Icon />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Delete category - {id}</DialogTitle>
                <DialogDescription>
                  Xác nhận xóa vĩnh viễn không thể khôi phục.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4"></div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
