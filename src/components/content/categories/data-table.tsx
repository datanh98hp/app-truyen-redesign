"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  Row,
  useReactTable,
} from "@tanstack/react-table";

import { addCategory } from "@/app/actions/admin/category.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LucideSearch, PlusCircle, Trash2Icon } from "lucide-react";
import React, { useRef } from "react";
import { useFormStatus } from "react-dom";
import { DataTablePagination } from "./data-table-pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
function SubmitAddButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Thêm"}
    </Button>
  );
}
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      columnFilters,
      rowSelection,
    },
  });
  ////
  const formRef_add = useRef<HTMLFormElement>(null);
  ///
  const handleSelectToMultiDelete = async () => {
    /// get list of selected
    const rows = table.getFilteredSelectedRowModel().rows;
    const ids = [] as TData[];
    rows.map((row: Row<TData>) => {
      ids.push(row.original);
    });
    console.log("multi delete :", ids);
    // if (ids.length === 0) {
    //   console.log("no selected");
    //   return;
    // }
    // try {
    //   let formData = new FormData();
    //   formData.append("ids", JSON.stringify(ids));
    //   await multipleDeleteCategory(formData);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const handleAddCategory = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const country = formData.get("country") as string;

    // //console.log(formData);
    if (!title?.trim() || !country?.trim()) {
      return;
    }
    const newData = {
      title: title,
      country: country,
    };

    // add to form

    formData.append("data", JSON.stringify(newData));
    console.log(newData);
    // send the comment to the server
    try {
      await addCategory(formData);
      formRef_add.current?.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between gap-2 py-4">
        <div className="flex gap-2 items-center mx-2">
          <p className="">
            <LucideSearch />
          </p>
          <Input
            placeholder="Filter by title..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="max-w-md"
          />
        </div>
        <div className=" flex gap-2 items-center justify-center  mx-7">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <PlusCircle className=" h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] dark:bg-black">
              <DialogHeader>
                <DialogTitle>Thêm mới</DialogTitle>
                <DialogDescription>Tạo mới dữ liệu</DialogDescription>
              </DialogHeader>
              <form action={handleAddCategory} ref={formRef_add}>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="title">Tiêu đề</Label>
                    <Input id="title" name="title" placeholder="Tiêu đề" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="country">Quốc gia</Label>
                    <Input
                      id="country"
                      name="country"
                      placeholder="Quốc gia nguồn gốc thể loại"
                    />
                  </div>
                  <div className="text-right">
                    <DialogClose asChild className="mx-4">
                      <Button variant="outline">Thoát</Button>
                    </DialogClose>
                    <SubmitAddButton />
                  </div>
                </div>
              </form>
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
          {/* <Button variant={"outline"} onClick={handleSelectToMultiDelete}>
            <Trash2 className=" h-4 w-4" />
          </Button> */}
          {/* <AddCategoryForm /> */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Trash2Icon />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-900">
              <DialogHeader>
                <DialogTitle>Xóa danh mục</DialogTitle>
                <DialogDescription>
                  Xác nhận xóa vĩnh viễn đối tượng đã chọn và không thể khôi
                  phục.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4"></div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" onClick={handleSelectToMultiDelete}>
                  Xác nhận
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>{/* <AddCategoryForm /> */}</div>
      <Table className="">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Không tìm thấy.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="my-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
