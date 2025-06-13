"use client";
import { Story } from "../types/types";
import { StoryItem } from "./StoryItem";

// export const stories: Story[] = [
//   {
//     id: 1,
//     thumb: "", // hinh anh cua chapter
//     author: "admin",
//     title: "Ông Chú Và 100 Con Rồng Dựng Nên Quốc Gia Mạnh Nhất!",
//     sub: "100 chapter", // chapter moi nhat cua truyen / tong so chuong
//     categories: [], // thoi gian cap nhat chapter
//     status: {
//       value: "complete",
//       label: "Hoaàn Thành",
//     },
//     viewsCount: 0,
//     folowersCount: 0,
//     description: "",
//     slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat",
//     chapters: [
//       {
//         id: 1,
//         thumb: "",
//         sub: "chapter 1",
//         title: "Chapter 1",
//         slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat",
//         content: "Content of chapter is markdown / html / pdf",
//         createAt: "2025-06-01",
//       },
//       {
//         id: 22,
//         thumb: "",
//         title: "Chapter 2",
//         sub: "chapter 2",
//         slug: "thien-kim-toan-nang-ba-khi-ngut-troi",
//         content: "Content of chapter is markdown / html / pdf",
//         createAt: "2025-06-01",
//       },
//     ],
//   },
//   {
//     id: 2,
//     thumb: "",
//     author: "admin",
//     title: "Món Khai Vị Một Đêm",
//     sub: "chapter 1",
//     categories: [],
//     status: {
//       value: "ongoing",
//       label: "Đang Ra",
//     },
//     viewsCount: 0,
//     folowersCount: 0,
//     description: "",
//     slug: "mon-khai-vi-mot-dem",
//     chapters: [],
//   },
//   {
//     id: 3,
//     thumb: "",
//     author: "admin",
//     title: "Món Khai Vị Một Đêm",
//     sub: "chapter 1",
//     categories: [],
//     status: {
//       value: "ongoing",
//       label: "Đang Ra",
//     },
//     viewsCount: 0,
//     folowersCount: 0,
//     description: "",
//     slug: "mon-khai-vi-mot-dem",
//     chapters: [],
//   },
//   {
//     id: 4,
//     thumb: "",
//     author: "admin",
//     title: "Món Khai Vị Một Đêm",
//     sub: "chapter 1",
//     categories: [],
//     status: {
//       value: "ongoing",
//       label: "Đang Ra",
//     },
//     viewsCount: 0,
//     folowersCount: 0,
//     description: "",
//     slug: "mon-khai-vi-mot-dem",
//     chapters: [],
//   },
//   {
//     id: 5,
//     thumb: "",
//     author: "admin",
//     title: "Món Khai Vị Một Đêm",
//     sub: "chapter 1",
//     categories: [],
//     status: {
//       value: "ongoing",
//       label: "Đang Ra",
//     },
//     viewsCount: 0,
//     folowersCount: 0,
//     description: "",
//     slug: "mon-khai-vi-mot-dem",
//     chapters: [],
//   },
//   {
//     id: 6,
//     thumb: "",
//     author: "admin",
//     title: "Món Khai Vị Một Đêm",
//     sub: "chapter 1",
//     categories: [],
//     status: {
//       value: "ongoing",
//       label: "Đang Ra",
//     },
//     viewsCount: 0,
//     folowersCount: 0,
//     description: "",
//     slug: "mon-khai-vi-mot-dem",
//     chapters: [],
//   },
//     {
//     id: 6,
//     thumb: "",
//     author: "admin",
//     title: "Món Khai Vị Một Đêm",
//     sub: "chapter 1",
//     categories: [],
//     status: {
//       value: "ongoing",
//       label: "Đang Ra",
//     },
//     viewsCount: 0,
//     folowersCount: 0,
//     description: "",
//     slug: "mon-khai-vi-mot-dem",
//     chapters: [],
//   },
// ];

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
            slug={story.slug}
          />
        ))}
      </div>
      {/* Xem thêm rankings/newest?page=2*/}
    </div>
  );
}
