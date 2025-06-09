import BadgeContent from "@/components/Badge";
import { CommentForm } from "@/components/content/comment/CommentForm";
import {
  CommentType,
  ItemComment,
  userdata,
} from "@/components/content/comment/ItemComment";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookUser,
  EyeIcon,
  HeartIcon,
  InfoIcon,
  MessageSquareTextIcon,
  RssIcon,
  ThumbsUpIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const commentsData = [
  {
    id: 1,
    content: "Comment 1",
    like: 10,
    user: {
      id: 1,
      name: "Nguyen Van A",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      level: 1,
    },
    time: "2025-05-20T00:00:00.000Z",
  },
  {
    id: 2,
    content: "Comment 2",
    like: 10,
    user: {
      id: 1,
      name: "Nguyen Van A",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      level: 1,
    },
    time: "2025-05-01T00:00:00.000Z",
  },
  {
    id: 3,
    content: "Comment 3",
    like: 10,
    user: {
      id: 1,
      name: "Nguyen Van A",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      level: 1,
    },
    time: "2025-05-01T00:00:00.000Z",
  },
  {
    id: 4,
    content: "Comment 4",
    like: 10,
    user: {
      id: 1,
      name: "Nguyen Van A",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      level: 1,
    },
    time: "2025-05-01T00:00:00.000Z",
  },
] as CommentType[];
const data_details = {
  id: 1,
  thumb: "", // hinh anh cua chapter
  author: "admin",
  title: "Ông Chú Và 100 Con Rồng Dựng Nên Quốc Gia Mạnh Nhất!",
  sub: "100 chapter", // chapter moi nhat cua truyen / tong so chuong
  categories: [], // thoi gian cap nhat chapter
  status: {
    value: "complete",
    label: "Hoaàn Thành",
  },
  viewsCount: 0,
  folowersCount: 0,
  description: "",
  slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat_1", // slug = slug + storyId
  chapters: [
    {
      id: 1,
      thumb: "",
      sub: "chapter 1",
      title: "Chapter 1",
      slug: "chapter_1",
      content: "Content of chapter is markdown / html / pdf",
      createAt: "2025-06-01",
    },
    {
      id: 2,
      thumb: "",
      title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
      sub: "chapter 2",
      slug: "chapter_2",
      content: "Content of chapter is markdown / html / pdf",
      createAt: "2025-06-01",
    },
  ],
};
// const listChapters = [
//   {
//     id: "1",
//     thumb: "",
//     title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
//     sub: "chapter 1",
//     slug: "thien-kim-toan-nang-ba-khi-ngut-troi",
//     content: "Content of chapter is markdown / html / pdf",
//   },
// ];

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // chua id cua truyen
  ///   lay danh sach cac chapter cua truyen theo id truyện
  console.log("slug:", slug);
  const id_story = slug.split("-").reverse()[0];
  console.log("id:", id_story);
  // console.log("slug:", slugContent);
  /// get detail story
  const detailStory = null as any;
  return (
    <div className="font-semibold font-quicksand w-full mt-10 rounded-sm border dark:bg-gray-900 bg-gray-200">
      {!detailStory == null && (
        <div>
          <h1 className="text-2xl text-center my-4">{"Chưa có nội dung"}</h1>
          <p className="text-center text-gray-500">
            Nội dung sẽ được cập nhật sớm nhất - {slug}
          </p>
        </div>
      )}
      {/* <div>
        <h1 className="text-2xl text-center my-4">Chưa có nội dung</h1>
        <p className="text-center text-gray-500">
          Nội dung sẽ được cập nhật sớm nhất - {id} - {slugContent}
        </p>
      </div> */}

      <div className="  m-2">
        <div className=" lg:col-span-2 lg:grid lg:grid-cols-6 flex flex-col items-center justify-center">
          <Image
            src="/assets/thumb.png"
            alt="image"
            width={380}
            height={550}
            className="h-full"
          />

          <div className="col-span-5 mx-4 ">
            <div className="text-xl my-2 lg:max-w-1/2">
              {"Ông Chú Và 100 Con Rồng Dựng Nên Quốc Gia Mạnh Nhất!"}
            </div>
            <div className=" flex flex-col gap-1">
              <div className="flex flex-row justify-between lg:w-1/3 w-2/3">
                <p className="inline-flex">
                  <UserIcon className="h-6 mr-2" /> Tác giả :
                </p>
                <p>Đang cập nhật</p>
              </div>
              <div className="flex flex-row justify-between lg:w-1/3 w-2/3">
                <p className="inline-flex">
                  <RssIcon className="h-6 mr-2" /> Tình trạng :
                </p>
                <p>Hoàn thành</p>
              </div>
              <div className="flex flex-row justify-between lg:w-1/3 w-2/3">
                <p className="inline-flex">
                  <ThumbsUpIcon className="h-6 mr-2" /> Lượt thích :
                </p>
                <p>383</p>
              </div>
              <div className="flex flex-row justify-between lg:w-1/3 w-2/3">
                <p className="inline-flex">
                  <HeartIcon className="h-6 mr-2" /> Lượt theo dõi :
                </p>
                <p>1,685</p>
              </div>
              <div className="flex flex-row justify-between lg:w-1/3 w-2/3">
                <p className="inline-flex">
                  <EyeIcon className="h-6 mr-2" /> <span>Lượt xem :</span>
                </p>
                <p>871,703</p>
              </div>
            </div>
            <div className="tags my-2 flex flex-row flex-wrap gap-1">
              <Link
                href="#"
                className="p-1 rounded-md border hover:bg-amber-500"
              >
                Actions
              </Link>
              <Link
                href="#"
                className="p-1 rounded-md border hover:bg-amber-500"
              >
                Another action
              </Link>
              <Link
                href="#"
                className="p-1 rounded-md border hover:bg-amber-500"
              >
                Another action
              </Link>
              <Link
                href="#"
                className="p-1 rounded-md border hover:bg-amber-500"
              >
                Another action
              </Link>
              <Link
                href="#"
                className="p-1 rounded-md border hover:bg-amber-500"
              >
                Another action
              </Link>
            </div>
            <div className="my-3 flex flex-row gap-2">
              <Button className="p-2 rounded-xs border bg-emerald-400">
                <BookUser className="h-6 mr-2" />
                <span>Đọc từ đầu</span>
              </Button>
              <Button className="p-2 rounded-xs border bg-orange-600">
                <HeartIcon className="h-6 mr-2" /> <span>Theo dõi</span>
              </Button>
              <Button className="flex  p-2 rounded-xs border bg-orange-400">
                <ThumbsUpIcon className="h-6 mr-2" /> <span>Thích</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="description my-4">
          <BadgeContent
            icon={<InfoIcon />}
            title="Giới thiệu"
            className=""
            textColor="#ff2853"
          />
          <div className="my-2 pb-4 border-b-1 border-gray-700">
            Cô ấy, là thiên kim tiểu thư của tập đoàn Tô thị. Là người thừa kế
            duy nhất của một tập đoàn hùng hậu có quyền lực phủ khắp ở hơn 20
            quốc gia trên thế giới. Từ nhỏ đã được tiếp thu nền giáo dục quý tộc
            xuất sắc nhất, hoàn mỹ về mọi phương diện. Nghe nói rằng đến cả mấy
            vị vương tử ở Arab cũng phải quỳ rạp trước cô ấy. Xinh đẹp, khí chất
            và giàu có, ngay đến máy bay riêng và bờ biển tư nhân mà cô ấy cũng
            có, cô ấy sở hữu tất cả những gì mà mọi cô gái khác khao khát. Cô ấy
            chỉ mới tròn 15 tuổi, không lâu sau đó đã ngồi lên ngai vàng quyền
            lực và giàu có bậc nhất, trở thành mộng tưởng của tất cả mọi nam
            nhân! Nhưng…
          </div>
        </div>
        <div className="mt-10 mb-20">
          <BadgeContent
            icon={<InfoIcon />}
            title="Danh sách chương"
            className="my-4"
            textColor="#ff2853"
          />
          <ScrollArea className="h-[400px] w-full rounded-md border">
            <div className="w-full my-2">
              {data_details.chapters.map((chapter, index) => (
                <Link
                  href={`/story/${slug}/${chapter.slug}-${chapter.id}`}
                  key={index}
                  className="border-b-1 pb-2 border-gray-700 mx-4 flex flex-row items-center justify-between"
                >
                  <p> {chapter.sub}</p>
                  <p>{chapter.createAt}</p>
                </Link>
              ))}
            </div>
          </ScrollArea>
          <BadgeContent
            icon={<MessageSquareTextIcon />}
            title="Bình luận"
            className="my-4"
            textColor="#ff2853"
          />
          <CommentForm user={userdata} />

          {commentsData.map((item, index) => (
            <ItemComment key={index} comment={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
