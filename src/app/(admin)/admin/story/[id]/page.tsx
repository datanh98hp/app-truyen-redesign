import UpdateStoryForm from "@/components/content/stories/UpdateStoryForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { getCategories, getData, getDataById, getStatusList } from "@/lib/data";
import Link from "next/link";

export async function generateMetadata() {
  const stories = await getData();
  return stories.map((story) => ({
    id: story.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const status_list = await getStatusList();
  const categories = await getCategories();
  const story = await getDataById(id);
  //console.log(story);

  return (
    <>
      {/* ----- */}{" "}
      <div className="bg-muted/50 col-span-4 rounded-xl dark:border-0">
        <div className="flex flex-col gap-6 p-6">
          <div className="flex items-center justify-between">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/story">Truyen</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{story.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="">
              <Link href={`/admin/story/${story.id}/chapters`} className="border p-2 rounded-md cursor-pointer">
                Xem {story.chapters?.length} chương
              </Link>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <UpdateStoryForm
                story={story}
                status_list={status_list || []}
                categories={categories || []}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      {/* ----- */}{" "}
      <div className="bg-muted/50 col-span-2 aspect-video rounded-xl dark:border-0 border">
        <div className="flex flex-col gap-3 p-6">
          <p className="font-bold text-2xl">Thống kê</p>{" "}
          <div className="space-y-2">
            <p>Lượt đọc: {story.viewsCount || 0}</p>
            <p>Lượt thích: {story.likeCount || 0}</p>
            <p>Lượt theo dõi: {story.folowersCount || 0}</p>
          </div>
        </div>
      </div>
    </>
  );
}
