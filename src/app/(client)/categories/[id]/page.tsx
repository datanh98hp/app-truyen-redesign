import React from "react";

async function Category({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const { id } = await params;
  return <div>Category - {id}</div>;
}

export default Category;
