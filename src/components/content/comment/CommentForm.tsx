"use client";

import { addComment } from "@/app/actions/add-comment.action";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { CommentType, UserType,userdata  } from "./ItemComment";
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : <SendIcon className=" rounded-full" />}
    </Button>
  );
}

export function CommentForm({ user }: { user: UserType }) {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const comment = formData.get("comment") as string;
    //console.log(formData);
    if (!comment?.trim()) {
      return;
    }
    const commentNew = {
      content: comment,
      user:userdata,
      time: new Date().toISOString(),
    } as CommentType;

    // add to form
    
    formData.append("data", JSON.stringify(commentNew));
    console.log(commentNew);
    // send the comment to the server

    try {
      await addComment(formData);
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
      <div className="flex-grow bg-white">
        <Textarea
          name="comment"
          placeholder="Nhập bình luận..."
          cols={30}
          rows={4}
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
