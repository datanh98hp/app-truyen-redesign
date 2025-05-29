import React from "react";

// async function fetchCategoryData(id: string) {
//   //   const res = await fetch('https://...')
//   //   if (!res.ok) return undefined
//   //   return res.json()
// }

async function Category({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const { id } = await params;
  return <div>Category - {id}</div>;
}

export default Category;
