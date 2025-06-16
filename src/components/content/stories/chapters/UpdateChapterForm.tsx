"use client";
import { ChapterType } from "@/components/types/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export default function UpdateChapterForm({ item }: { item: ChapterType }) {
  const [imagePreview, setImagePreview] = useState(item.thumb);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  async function handleSubmit(formData: FormData) {
    //set state

    const data = {
      id: item.id,
      title: formData.get("title") as string,
      sub: formData.get("sub") as string,
      slug: formData.get("slug") as string,
      thumb: formData.get("thumb") as string,
      content: formData.get("content") as string,
      description: formData.get("description") as string,
    } as ChapterType;
    //console.log(formData.get("status"));
    // formData.set("data", JSON.stringify(data));
    // const result = await updateStory(formData);

    // if (result.success) {
    //   console.log("Story updated successfully");
    // } else {
    //   console.error("Failed to update story:", result.error);
    // }
  }

  return (
    <form className="my-4 border p-4 rounded-md" action={handleSubmit}>
      <div className="flex gap-4">
        <Label htmlFor="thumb">
          <Image src={imagePreview} alt={item.title} width={100} height={100} />
        </Label>
        <div className="flex gap-4">
          <Input
            type="file"
            id="thumb"
            name="thumb"
            accept="image/*"
            onChange={handleImageChange}
            className=""
          />
        </div>
      </div>
      <div className="block mt-2">
        <div>
          <Label htmlFor="title">Tiêu đề</Label>
          <Input
            type="text"
            id="title"
            name="title"
            defaultValue={item.title}
            className="my-2"
          />
        </div>
        <div>
          <Label htmlFor="sub">Sub</Label>
          <Input
            type="text"
            id="sub"
            name="sub"
            defaultValue={item.sub}
            className="my-2"
          />
        </div>
        <div>
          <Label htmlFor="content">Nội dung</Label>
          {/* multi upload image them add list url image and save to db */}
          <Input
            type="file"
            id="content"
            name="content"
            accept="image/*"
            multiple
            className="my-2"
          />
          <Textarea
            id="content"
            name="content"
            defaultValue={item.content}
            rows={20}
            className="my-2"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="">
            Cập nhật
          </Button>
        </div>
      </div>
    </form>
  );
}
