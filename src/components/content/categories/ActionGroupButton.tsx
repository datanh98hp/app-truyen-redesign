"use client";

import {
  updateCategory,
  deleteCategory,
} from "@/app/actions/admin/category.action";
import { CategoryType } from "@/components/types/types";
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
import { Row } from "@tanstack/react-table";
import { EditIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";

export function ActionGroupButton({ row }: { row: Row<CategoryType> }) {
  const [title, settitle] = useState("");
  const [country, setcountry] = useState("");
  const id = Number(row.original.id);
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
  async function handledeleteCategory() {
    console.log(id);
    try {
      await deleteCategory(id);
    } catch (error) {
      console.log(`Erorr:${error}`);
    }
  }
  return (
    <>
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
                <DialogTitle>Sửa danh mục - {row.original.id}</DialogTitle>
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
                    value={row.original.title || title}
                    onChange={(event) => settitle(event.target.value)}
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="country">Quốc gia</Label>
                  <Input
                    id="country"
                    name="country"
                    value={row.original.country?.title || country}
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
                <Button type="submit" onClick={() => handleSubmitUpdateCate()}>
                  Submit
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
        {/* Dialog form delete */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Trash2Icon />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-gray-900">
            <DialogHeader>
              <DialogTitle>Delete category - {row.original.id}</DialogTitle>
              <DialogDescription>
                Xác nhận xóa vĩnh viễn không thể khôi phục.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4"></div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                {/* <Button variant="outline">Cancel</Button> */}
                <Button type="submit" onClick={handledeleteCategory}>
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
