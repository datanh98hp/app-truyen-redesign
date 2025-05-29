import React from "react";

async function Category({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>Category - {id}</div>;
}

export default Category;
