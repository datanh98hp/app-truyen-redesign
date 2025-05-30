import BadgeContent from "@/components/Badge";
import { Chapter, ListChapters } from "@/components/content/ListChapter";
import { SwipperContent } from "@/components/content/swipper";
import { StarIcon } from "lucide-react";

const chapters: Chapter[] = [
  {
    src: "",
    title: "Ông Chú Và 100 Con Rồng Dựng Nên Quốc Gia Mạnh Nhất!",
    sub: "chapter 1",
    tags: " 10 giờ trước",
  },
  {
    src: "",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
  },
  {
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
  {
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
  },
  {
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
  {
    src: "",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
  },
  {
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
];

export default function Home() {
  return (
    <>
      <div className="font-semibold font-quicksand py-4">
        <BadgeContent
          icon={<StarIcon />}
          title="Truyện hay"
          textColor="#ff2853"
        />
      </div>
      <SwipperContent />
      <div className="py-4">
        <BadgeContent
          icon={<StarIcon />}
          title="Truyện mới cập nhật"
          className="font-semibold"
          textColor="#e4e6eb"
        />
      </div>
      <ListChapters data={chapters} />
    </>
  );
}
