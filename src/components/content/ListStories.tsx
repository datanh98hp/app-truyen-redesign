"use client";
import { Story } from "../types/types";
import { StoryItem } from "./StoryItem";

export const stories: Story[] = [
  {
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
        title: "Ông Chú Và 100 Con Rồng Dựng Nên Quốc Gia Mạnh Nhất!",
        slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat_1",
        content: "Content of chapter is markdown / html / pdf",
        createAt: "2025-06-01",
      },
      {
        id: 22,
        thumb: "",
        title: "Thiên Kim Toàn Năng Bá Khí Ngút Trời",
        sub: "chapter 1",
        slug: "thien-kim-toan-nang-ba-khi-ngut-troi",
        content: "Content of chapter is markdown / html / pdf",
        createAt: "2025-06-01",
      },
    ],
  },
  {
    id: 2,
    thumb: "",
    author: "admin",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    categories: [],
    status: {
      value: "ongoing",
      label: "Đang Ra",
    },
    viewsCount: 0,
    folowersCount: 0,
    description: "",
    slug: "mon-khai-vi-mot-dem",
    chapters: [],
  },
  {
    id: 3,
    thumb: "",
    author: "admin",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    categories: [],
    status: {
      value: "ongoing",
      label: "Đang Ra",
    },
    viewsCount: 0,
    folowersCount: 0,
    description: "",
    slug: "mon-khai-vi-mot-dem",
    chapters: [],
  },
  {
    id: 4,
    thumb: "",
    author: "admin",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    categories: [],
    status: {
      value: "ongoing",
      label: "Đang Ra",
    },
    viewsCount: 0,
    folowersCount: 0,
    description: "",
    slug: "mon-khai-vi-mot-dem",
    chapters: [],
  },
  {
    id: 5,
    thumb: "",
    author: "admin",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    categories: [],
    status: {
      value: "ongoing",
      label: "Đang Ra",
    },
    viewsCount: 0,
    folowersCount: 0,
    description: "",
    slug: "mon-khai-vi-mot-dem",
    chapters: [],
  },
  {
    id: 6,
    thumb: "",
    author: "admin",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    categories: [],
    status: {
      value: "ongoing",
      label: "Đang Ra",
    },
    viewsCount: 0,
    folowersCount: 0,
    description: "",
    slug: "mon-khai-vi-mot-dem",
    chapters: [],
  },
    {
    id: 6,
    thumb: "",
    author: "admin",
    title: "Món Khai Vị Một Đêm",
    sub: "chapter 1",
    categories: [],
    status: {
      value: "ongoing",
      label: "Đang Ra",
    },
    viewsCount: 0,
    folowersCount: 0,
    description: "",
    slug: "mon-khai-vi-mot-dem",
    chapters: [],
  },
];

export function ListStory({ data }: { data?: Story[] }) {
  // const filterData = useContext(FilterContext)

  // console.log("Filter Data: ", filterData);
  return (
    <div className="h-full flex flex-col items-center">
      <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
        {/* Danh sach truyen có chapter được đăng tải gần đây - page=1 */}
        {data?.map((story, index) => (
          <StoryItem
            key={index}
            src={story.thumb}
            className=""
            title={story.title}
            subTitle={story.sub}
            id={`${story.id}`}
          />
        ))}
      </div>
      {/* Xem thêm rankings/newest?page=2*/}
    </div>
  );
}
