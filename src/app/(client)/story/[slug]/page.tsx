export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // chua id cua truyen
  ///   lay danh sach cac chapter cua truyen theo id truyện
  console.log("slug:", slug);
  return (
    <div className="font-semibold font-quicksand w-full">
      <h1 className="text-2xl text-center my-4">Chưa có nội dung</h1>
      <p className="text-center text-gray-500">Nội dung sẽ được cập nhật sớm nhất</p>
    </div>
  );
}