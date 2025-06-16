"use server";

import { revalidatePath } from "next/cache";

export async function updateStory(formData: FormData) {
  const data = JSON.parse(formData.get("data") as string);
  const id = data.id;
  console.log("data", formData);
  try {
    // TODO: Update your database logic here
    // console.log(`==> Excute updateStory with data : ${JSON.stringify(data)}`);
    revalidatePath(`/admin/story/${id}`);
    //  revalidatePath(`/admin/story/${id}`);
    return { success: true };
  } catch (error) {
    return { error };
  }
}
export async function addStory(formData: FormData) {
  const data = JSON.parse(formData.get("data") as string);
  try {
    // TODO: Add your database logic here
    console.log(`==> Excute addStory with data : ${JSON.stringify(data)}`);
    revalidatePath("/admin/story");
    return { success: true };
  } catch (error: unknown) {
    return { error };
  }
}

export async function deleteStory(id: number) {
  // const data = JSON.parse(formData.get("data") as string);

  try {
    // TODO: Add your database logic here
    console.log(`==> Excute deleteStory with data id : ${id}`);
    revalidatePath("/admin/story");
    return { success: true };
  } catch (error: unknown) {
    return { error };
  }
}
export async function multipleDeleteCategory(formData: FormData) {
  const ids = JSON.parse(formData.get("ids") as string);
  try {
    // TODO: Add your database logic here
    console.log(
      `==> Excute deleteMultipleStory with data : ${JSON.stringify(ids)}`
    );
    revalidatePath("/admin/story");
    return { success: true };
  } catch (error: unknown) {
    return { error };
  }
}
