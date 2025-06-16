import { columns } from "@/components/content/categories/columns";
import { DataTable } from "@/components/content/categories/data-table";

import { getCategories } from "@/lib/data";
//
import { ArrowUpRight, CheckCircle, LoaderIcon } from "lucide-react";
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

export default async function AdminCategory() {
  const data = await getCategories();
  //   console.log(data);
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-4 grid-cols-2">
        {/* <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border">
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
        </div> */}
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl">Users</p>
            <p className="flex text-5xl">
              <span>1000</span>
              <ArrowUpRight size={50} className="text-green-500" />
            </p>
          </div>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border ">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl">Truyện</p>
            <div className="flex flex-row gap-6">
              <p className=" text-5xl">1000</p>
              <div className="flex flex-col items-center justify-center">
                <p className="flex items-center gap-3">
                  <span className="font-bold text-3xl text-emerald-400">
                    {" "}
                    <CheckCircle size={20} className="" />{" "}
                  </span>
                  <span className="font-bold">62</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-bold text-3xl text-yellow-500">
                    {" "}
                    <LoaderIcon size={20} className="" />{" "}
                  </span>
                  <span className="font-bold">12</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border ">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl">Danh mục</p>
            <p className="text-5xl">100</p>
          </div>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border ">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl">Lượt phản hồi</p>
            <p className="flex flex-row text-5xl">
              <span>100</span>
              <ArrowUpRight size={50} className="text-green-500" />
            </p>
          </div>
        </div>
       
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
              <p className="font-bold text-2xl">
                Chart (Danh mục - SL truyện - lượt đọc)...
              </p>
            </div>
            {/* <AddCategoryForm /> */}
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
