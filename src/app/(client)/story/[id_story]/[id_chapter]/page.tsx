export default async function StoryChapterPage({
  params,
}: {
  params: Promise<{ slug: string; id_chapter: string }>;
}) {
  // slug = (slug của truyện, id_chapter )
  const { id_chapter } = await params; // chua id cua truyen va chapter
  const id = id_chapter.split("-").reverse()[0];
  console.log("id_chapter:", id);
  return (
    <div className="font-semibold font-quicksand w-full">
      <h1 className="text-2xl text-center my-4">Chưa có nội dung</h1>
      <p className="text-center text-gray-500">
        Nội dung sẽ được cập nhật sớm nhất - {id_chapter}
      </p>
    </div>
  );
}
