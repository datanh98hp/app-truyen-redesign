"use client";
import { Story } from "@/components/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { ActionGroupStoryBtn } from "./ActionGroupStoryBtn";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<Story>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "thumb",
    header: "Ảnh",
    cell: ({ row }) => (
      <div className="">
        {
          <Image
            src={row.original?.thumb || "/assets/thumb.png"}
            width={45}
            height={65}
            className="h-20 w-20"
            alt=""
          />
        }
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Tieu de",
    cell: ({ row }) => (
      <p className="truncate w-[150px]">{row.original?.title}</p>
    ),
  },
  {
    accessorKey: "categories",
    header: "Danh mục",

    //cell: ({ row }) => JSON.stringify(row.original?.categories),
  },
  {
    accessorKey: "status.title",
    header: "Trạng thái",
    cell: ({ row }) => (
      <Badge
        variant={
          row.original?.status?.value === "completed" ? "secondary" : "outline"
        }
        className={cn(
          "text-white",
          row.original?.status?.value === "completed"
            ? " bg-green-600"
            : " bg-blue-500"
        )}
      >
        <BadgeCheckIcon />
        {row.original?.status?.title}
      </Badge>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Ngày tạo",
    cell: ({ row }) => new Date().toLocaleString("en-US"),
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center ">...</div>,
    cell: ({ row }) => <ActionGroupStoryBtn row={row} />,
  },
];
