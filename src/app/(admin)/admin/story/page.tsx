import { TableContent } from "@/components/content/common/TableContent";
import { columns } from "@/components/content/stories/columns";
import { getData } from "@/lib/data";

export default async function AdminStory() {
  const data = await getData();
  return (
    <>
      {/* ----- */}
      <div className="bg-muted/50 col-span-4 rounded-xl dark:border-0 ">
        <div className="flex flex-col gap-6 p-6">
          <p className="font-bold text-2xl">
            Truyện đăng tải gần đây ( datatable có phân trang)...
          </p>
          <TableContent columns={columns} data={data} />
          <div className="pagination">phan trang</div>
        </div>
      </div>
      {/* ----- */}
      <div className="bg-muted/50 col-span-2 aspect-video rounded-xl dark:border-0 border">
        <div className="flex flex-col gap-3 p-6">
          <p className="font-bold text-2xl">
            Chart (Danh mục - SL truyện - lượt đọc)...
          </p>
        </div>
        {/* <AddCategoryForm /> */}
      </div>
    </>
  );
}
