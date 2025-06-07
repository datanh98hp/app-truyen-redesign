"use client";
import { ChapterItem } from "./ChapterItem";

export type Chapter = {
  id?: string;
  src: string;
  title: string;
  sub: string;
  slug?: string;
  tags?: string;
  status?: string;
  viewsCount?: number;
  folowersCount?: number;
  description?: string;
};
export const chapters: Chapter[] = [
  {
    id: "1",
    src: "", // hinh anh cua chapter
    title: "Ông Chú Và 100 Con Rồng Dựng Nên Quốc Gia Mạnh Nhất!",
    sub: "chapter 1", // chapter moi nhat cua truyen
    tags: " 10 giờ trước", // thoi gian cap nhat chapter
    slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat_1", // slug = slug + storyId
  },
  {
    id: "2",
    src: "",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "mon-khai-vi-mot-dem",
  },
  {
    id: "3",
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
    slug: "hades-va-persephone",
  },
  {
    id: "4",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi_2",
  },
  {
    id: "5",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
  {
    id: "6",
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
    slug: "hades-va-persephone",
  },
  {
    id: "7",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi_4",
  },
  {
    id: "8",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
    slug: "dang-ky-kenh-sieu-pham_2",
  },
  {
    id: "9",
    src: "",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "10",
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
  },
  {
    id: "11",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "12",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "13",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
  {
    id: "14",
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
  },
  {
    id: "15",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi_2",
  },
  {
    id: "16",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
  {
    id: "17",
    src: "",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "mon-khai-vi-mot-dem",
  },
  {
    id: "18",
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
  },
  {
    id: "19",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi_6",
  },
  {
    id: "20",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "21",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
    slug: "dang-ky-kenh-sieu-pham",
  },
  {
    id: "22",
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
  },
  {
    id: "23",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "24",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
  {
    id: "25",
    src: "",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "26",
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
  },
  {
    id: "27",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi",
  },
  {
    id: "28",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "29",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
  {
    id: "30",
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
    slug: "hades-va-persephone",
  },
  {
    id: "31",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "32",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
    slug: "dang-ky-kenh-sieu-pham",
  },
  {
    id: "33",
    src: "",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },

  {
    id: "34",
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
    slug: "hades-va-persephone",
  },
  {
    id: "35",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "36",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
    slug: "thien-kim-toan-nang-ba-khi-ngut-troi",
  },
  {
    id: "37",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
  {
    id: "38",
    src: "",
    title: "Hades Và Persephone",
    sub: "chapter 122",
    tags: " 110 giờ trước",
  },
  {
    id: "39",
    src: "",
    title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "40",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
  {
    id: "41",
    src: "",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    tags: " 2 giờ trước",
  },
  {
    id: "42",
    src: "",
    title: "Đăng Ký Kênh Siêu Phàm",
    sub: "chapter 11",
    tags: " 5 giờ trước",
  },
];

export function ListChapters({ data }: { data?: Chapter[] }) {
  // const filterData = useContext(FilterContext)

  // console.log("Filter Data: ", filterData);
  return (
    <div className="h-full flex flex-col items-center">
      <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
        {/* Danh sach truyen có chapter được đăng tải gần đây - page=1 */}
        {data?.map((chapter, index) => (
          <ChapterItem
            key={index}
            src={chapter.src}
            className=""
            title={chapter.title}
            subTitle={chapter.sub}
            slug={`${chapter.slug}-${chapter.id}`}
          />
        ))}
      </div>
      {/* Xem thêm rankings/newest?page=2*/}
    </div>
  );
}
