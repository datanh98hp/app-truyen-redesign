"use client";
import { updateStory } from "@/app/actions/admin/story.action";
import { CategoryType, StatusType, Story } from "@/components/types/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import { set } from "react-hook-form";

export default function UpdateStoryForm({
  story,
  status_list,
  categories,
}: {
  story: Story;
  status_list: StatusType[];
  categories?: CategoryType[];
}) {
  const [status, setStatus] = useState<StatusType>({
    value: story.status?.value || "",
  });
  const [thumb, setthumb] = useState("");
  const [country, setcountry] = useState("");
  async function handleSubmit(formData: FormData) {
    //set state

    const data = {
      id: story.id,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      author: formData.get("author") as string,
      thumb: formData.get("thumb") as string,
      status: {
        value: formData.get("status") as string,
      },
    } as Story;
    //console.log(formData.get("status"));
    formData.set("data", JSON.stringify(data));
    const result = await updateStory(formData);

    if (result.success) {
      console.log("Story updated successfully");
    } else {
      console.error("Failed to update story:", result.error);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="grid gap-4">
        <div className="flex gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Tiêu đề</Label>
            <Input
              id="title"
              name="title"
              defaultValue={story.title}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sub">Sub</Label>
            <Input id="sub" name="sub" defaultValue={story.sub} required />
          </div>
        </div>
        <div className="grid gap-2 ">
          <Label htmlFor="description">Mô tả</Label>
          <Textarea
            id="description"
            name="description"
            defaultValue={story.description}
            rows={4}
          />
          <Label htmlFor="description">Slug</Label>
          <Input id="slug" name="slug" defaultValue={story.slug} />
          <Label htmlFor="tag">Tag</Label>
          <Input id="tag" name="tag" defaultValue={story.tag} />
        </div>

        <div className="flex gap-4">
          <div className="grid gap-2">
            <Label htmlFor="author">Tác giả</Label>
            <Input id="author" name="author" defaultValue={story.author} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="status">Trạng thái</Label>

            <Select
              name="status"
              defaultValue={story.status?.value}
              onValueChange={(text) => setStatus({ value: text })}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Fruits</SelectLabel> */}
                  {status_list?.map((status, index) => (
                    <SelectItem key={index} value={status.value}>
                      {status.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="country">Quốc gia</Label>
            <Input
              id="country"
              name="country"
              value={country}
              onChange={(e) => setcountry(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="thumb">Ảnh bìa (URL)</Label>
          <div className="div flex gap-2">
            <Image
              src={story.thumb || "/assets/thumb.png"}
              alt="thumb"
              width={200}
              height={250}
              className="object-cover"
            />
            <Input
              id="thumb"
              type="file"
              name="thumb"
              accept="image/*"
              value={thumb}
              onChange={(e) => setthumb(e.target.value)}
            />
            <input
              type=""
              className=""
              name="thumb"
              value={thumb}
              onChange={(e) => setthumb(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit" className="">
          Cập nhật
        </Button>
      </div>
    </form>
  );
}
