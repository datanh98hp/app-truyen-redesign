"use client";

import { addCategory } from "@/app/actions/admin/category.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "@/components/ui/label";
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : <PlusIcon className=" rounded-full" />}
    </Button>
  );
}

export function AddCategoryForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
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
      formRef.current?.reset();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="flex flex-row gap-4 mx-2"
    >
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
      </div>
      <div className="mr-2">
        <SubmitButton />
      </div>
    </form>
  );
}
