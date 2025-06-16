"use client";

import { CategoryType } from "@/components/types/types";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ActionGroupButton } from "./ActionGroupButton";
// import { useState } from "react";

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
    cell: ({ row }) => row.original?.country?.title,
  },
  {
    accessorKey: "createdAt",
    header: "Ngày tạo",
    // cell: ({row}) => new Date(row.getValue("createdAt")).toLocaleString('en-US'),
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center ">...</div>,
    cell: ({ row }) => <ActionGroupButton row={row} />,
  },
];
