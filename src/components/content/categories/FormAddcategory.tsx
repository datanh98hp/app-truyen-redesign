"use client";

import { addComment } from "@/app/actions/add-comment.action";
import { addCategory } from "@/app/actions/admin/category.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon, SendIcon } from "lucide-react";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} >
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
      <div className="border flex-col justify-center items-center gap-4">
        <Input
          name="title"
          placeholder="Tiêu đề..."
          required
          className="border-1 dark:border-0 rounded-xs  dark:focus:ring-0 dark:focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        <Input
          name="country"
          placeholder="Quốc gia..."
          required
          className="border-1 dark:border-0 rounded-xs  dark:focus:ring-0 dark:focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <div className="mr-2">
        <SubmitButton />
      </div>
    </form>
  );
}
