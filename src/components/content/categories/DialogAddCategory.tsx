"use client";
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
import { PlusCircle, PlusIcon } from "lucide-react";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : <PlusIcon className=" rounded-full" />}
    </Button>
  );
}

export function DialogAddCategory() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    // const title = formData.get("title") as string;
    // const country = formData.get("country") as string;

    console.log(formData);
    // if (!title?.trim() || !country?.trim()) {
    //   return;
    // }
    // const newData = {
    //   title: title,
    //   country: country,
    // };

    // // add to form

    // formData.append("data", JSON.stringify(newData));
    // console.log(newData);
    // send the comment to the server

    // try {
    //   await addCategory(formData);
    //   formRef.current?.reset();
    // } catch (error) {
    //   console.log(error);
    // }
  }
  return (
    <div className=" flex gap-2 items-center justify-center">
      <Dialog>
        <form ref={formRef} action={handleSubmit}>
          <DialogTrigger asChild>
            <Button variant="outline">
              <PlusCircle className=" h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] dark:bg-black">
            <DialogHeader>
              <DialogTitle>Thêm mới *</DialogTitle>
              <DialogDescription>Tạo mới dữ liệu</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Tiêu đề</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Tiêu đề..."
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="country">Quốc gia</Label>
                <Input
                  id="country"
                  name="country"
                  placeholder="Quốc gia nguồn gốc thể loại"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <SubmitButton />
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
   
    </div>
  );
}
