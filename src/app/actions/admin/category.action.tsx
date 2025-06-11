"use server";

export async function updateCategory(formData: FormData) {
  const data = JSON.parse(formData.get("data") as string);
  console.log(formData);
  try {
    // TODO: Add your database logic here
    console.log(
      `==> Excute updateCategory with data : ${JSON.stringify(data)}`
    );
    return { success: true };
  } catch (error) {
    throw new Error("Failed to update category");
  }
}
export async function addCategory(formData: FormData) {
  const data = JSON.parse(formData.get("data") as string);
  try {
    // TODO: Add your database logic here
    console.log(
      `==> Excute addCategory with data : ${JSON.stringify(data)}`
    );
    return { success: true };
  } catch (error) {
    throw new Error("Failed to create category");
  }
}


export async function deleteCategory(formData: FormData) {
  const data = JSON.parse(formData.get("data") as string);
  try {
    // TODO: Add your database logic here
    console.log(
      `==> Excute deleteCategory with data : ${JSON.stringify(data)}`
    );
    return { success: true };
  } catch (error) {
    throw new Error("Failed to delete category");
  }
}