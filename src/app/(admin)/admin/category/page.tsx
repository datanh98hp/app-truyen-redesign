import { columns } from "@/components/content/categories/columns";
import { DataTable } from "@/components/content/categories/data-table";
import { AddCategoryForm } from "@/components/content/categories/FormAddcategory";

import { CategoryType } from "@/components/types/types";
//
import { Sigma } from "lucide-react";
// const categories = [
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Action",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     stories: [],
//     status: "active",
//   },
//   {
//     id: Math.ceil(Math.random() * 100),
//     title: "Romantic",
//     country: {
//       value: "china",
//       label: "Trung Quốc",
//     },
//     stories: [],
//     status: "active",
//   },
// ] as CategoryType[];
async function getData(): Promise<CategoryType[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      title: "Romantic",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 2,
      title: "Romantic",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 3,
      title: "Romantic",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 4,
      title: "Romantic",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 5,
      title: "Romantic",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 6,
      title: "Romantic dat anh",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "pending",
    },
    // ...
  ] as CategoryType[];
}
export default async function AdminCategory() {
  const data = await getData();
  //   console.log(data);
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-6 grid-cols-2">
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl text-center">Danh mục</p>
            <p className="flex items-center justify-center text-5xl">
              <Sigma size={50} className="font-bold" />
              <span>1000</span>
            </p>
            <div className="flex gap-4 justify-around mt-4">
              <div className="flex flex-col items-center">
                <p>Đang cập nhật</p>
                <p className="font-bold text-3xl">100</p>
              </div>
              <div className="flex flex-col items-center">
                <p>Hoàn thành</p>
                <p className="font-bold text-3xl">100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border" />
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border" />
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border" />
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <div className="grid auto-rows-min gap-2 lg:grid-cols-2 grid-cols-1 ">
          {/* ----- */}
          <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border">
            <div className="flex flex-col gap-3 p-6">
              <p className="font-bold text-2xl">
                Danh mục gần đây ( datatable có phân trang)...
              </p>
              <DataTable columns={columns} data={data} />
              {/* <div className="pagination">phan trang</div> */}
            </div>
          </div>
          {/* ----- */}
          {/* ----- */}
          <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border">
            <div className="flex flex-col gap-3 p-6">
              <p className="font-bold text-2xl">From thêm danh mục...</p>
            </div>
            <AddCategoryForm />
          </div>
          {/* ----- */}
          {/* <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 ">
            <div className="flex flex-col gap-3 p-6 border">
              <p className="font-bold text-2xl">
                Biểu đồ top thể loại - lượt đọc
              </p>
              <ChartBarContent />
            </div>
          </div> */}
          {/* ----- */}
        </div>
      </div>
    </>
  );
}
