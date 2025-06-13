"use server";

import { revalidatePath } from "next/cache";

export async function updateCategory(formData: FormData) {
  const data = JSON.parse(formData.get("data") as string);
  console.log(formData);
  try {
    // TODO: Add your database logic here
    console.log(
      `==> Excute updateCategory with data : ${JSON.stringify(data)}`
    );
    revalidatePath("/admin/category");
    return { success: true };
  } catch (error) {
    return { error };
  }
}
export async function addCategory(formData: FormData) {
  const data = JSON.parse(formData.get("data") as string);
  try {
    // TODO: Add your database logic here
    console.log(`==> Excute addCategory with data : ${JSON.stringify(data)}`);
    revalidatePath("/admin/category");
    return { success: true };
  } catch (error: unknown) {
    return { error };
  }
}

export async function deleteCategory(id: number) {
  // const data = JSON.parse(formData.get("data") as string);

  try {
    // TODO: Add your database logic here
    console.log(`==> Excute deleteCategory with data id : ${id}`);
    revalidatePath("/admin/category");
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
      `==> Excute deleteMultipleCategory with data : ${JSON.stringify(ids)}`
    );
    revalidatePath("/admin/category");
    return { success: true };
  } catch (error: unknown) {
    return { error };
  }
}
