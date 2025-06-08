"use server";

import { CommentType } from "@/components/content/comment/ItemComment";

export async function addComment(formData: FormData) {
  const comment = JSON.parse(formData.get("data") as string) as CommentType;
  try {
    // TODO: Add your database logic here
    // Example: await db.comments.create({ content: comment });
    console.log(`==>New comment: ${JSON.stringify(comment)}`);
    return { success: true };
  } catch (error) {
    throw new Error("Failed to create comment");
  }
}
