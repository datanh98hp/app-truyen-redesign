import BadgeContent from "@/components/Badge";
import { Chapter, ListChapters } from "@/components/content/ListChapter";
import { SwipperContent } from "@/components/content/swipper";
import { StarIcon } from "lucide-react";


const chapters: Chapter[] = [
  {
    src: "", // hinh anh cua chapter
    title: "Ông Chú Và 100 Con Rồng Dựng Nên Quốc Gia Mạnh Nhất!",
    sub: "chapter 1", // chapter moi nhat cua truyen
    tags: " 10 giờ trước", // thoi gian cap nhat chapter
    slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat_1", // slug = slug + storyId
  },
  {
    src: "",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "mon-khai-vi-mot-dem",
  },
  {
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
    slug: "hades-va-persephone",
  },
  {
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi_2",
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
    slug: "hades-va-persephone",
  },
  {
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi_4",
  },
  {
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
    slug: "dang-ky-kenh-sieu-pham_2",
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
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi_2",
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
    slug: "mon-khai-vi-mot-dem",
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
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi_6",
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
    slug: "dang-ky-kenh-sieu-pham",
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
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi",
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
    slug: "hades-va-persephone",
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
    slug: "dang-ky-kenh-sieu-pham",
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
    slug: "hades-va-persephone",
  },
  {
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi",
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
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
];

export default function Home() {

  // get data from api

  // genSlug for each chapter
 
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
