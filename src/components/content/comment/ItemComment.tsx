"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircleMore, ThumbsUp, TimerResetIcon } from "lucide-react";
import { useState } from "react";
import { CommentForm } from "./CommentForm";

export type UserType = {
  id: number;
  name: string;
  image: string;
  level: number;
};
export type CommentType = {
  id: number;
  content: string;
  like?: number;
  cmt?: number;
  user: UserType;
  time?: string;
};
export const userdata = {
  id: 1,
  name: "Nguyen Van A",
  image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  level: 1,
};
export function ItemComment({ comment }: { comment: CommentType }) {
  const [isShowSubComment, setShowSubComment] = useState(false);

  const handleToggleSubComment = () => {
    setShowSubComment((prev) => !prev);
  };
  // Format the timestamp

  console.log();
  return (
    <div className="m-2 p-2 border h-full rounded-md">
      <div className="flex flex-row gap-3 rounded-md">
        <Avatar className="">
          <AvatarImage
            src="https://github.com/shadcn.png"
            height={60}
            width={60}
            className=""
          />
          <AvatarFallback>{comment.user.name}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold">
            <span className="border border-orange-500 p-1 rounded-md">
              {comment.user.name}
            </span>
          </p>
          <div className="border-t-2">{comment.content}</div>
        </div>
      </div>
      <div className=" flex flex-row gap-2 mx-11 my-3 font-light">
        <div className="flex flex-row">
          <ThumbsUp /> <span className="mx-2 ">{comment.like} Like</span>
        </div>
        <div className="flex flex-row" onClick={handleToggleSubComment}>
          <MessageCircleMore />{" "}
          <span className="mx-2">{comment.cmt} Bnh luận</span>
        </div>
        <div className="flex flex-row">
          <TimerResetIcon /> <span className="mx-2">{comment.time}</span>
        </div>
      </div>
      {isShowSubComment && (
        <div className="mx-11 my-3 font-light">
          <CommentForm user={comment.user} />
        </div>
      )}
    </div>
  );
}
