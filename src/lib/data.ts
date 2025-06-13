import {
  CategoryType,
  CountryType,
  MaxChapterOptsType,
  SortByType,
  StatusType,
  Story,
} from "@/components/types/types";
export async function getStories(): Promise<Story[]> {
  return await [
    {
      id: 1,
      thumb: "", // hinh anh cua chapter
      author: "admin",
      title: "Ông Chú Và 100 Con Rồng Dựng Nên Quốc Gia Mạnh Nhất!",
      sub: "100 chapter", // chapter moi nhat cua truyen / tong so chuong
      categories: [], // thoi gian cap nhat chapter
      status: {
        value: "complete",
        title: "Hoaàn Thành",
      },
      viewsCount: 0,
      folowersCount: 0,
      description: "",
      slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat",
      chapters: [
        {
          id: 1,
          thumb: "",
          sub: "chapter 1",
          title: "Chapter 1",
          slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat",
          content: "Content of chapter is markdown / html / pdf",
          createAt: "2025-06-01",
        },
        {
          id: 22,
          thumb: "",
          title: "Chapter 2",
          sub: "chapter 2",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
      },
      viewsCount: 0,
      folowersCount: 0,
      description: "",
      slug: "mon-khai-vi-mot-dem",
      chapters: [],
    },
  ];
}
export async function getLatestDatagetLatestData(): Promise<Story[]> {
  return await [
    {
      id: 1,
      thumb: "", // hinh anh cua chapter
      author: "admin",
      title: "Ông Chú Và 100 Con Rồng Dựng Nên Quốc Gia Mạnh Nhất!",
      sub: "100 chapter", // chapter moi nhat cua truyen / tong so chuong
      categories: [], // thoi gian cap nhat chapter
      status: {
        value: "complete",
        title: "Hoaàn Thành",
      },
      viewsCount: 0,
      folowersCount: 0,
      description: "",
      slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat",
      chapters: [
        {
          id: 1,
          thumb: "",
          sub: "chapter 1",
          title: "Chapter 1",
          slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat",
          content: "Content of chapter is markdown / html / pdf",
          createAt: "2025-06-01",
        },
        {
          id: 22,
          thumb: "",
          title: "Chapter 2",
          sub: "chapter 2",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
      },
      viewsCount: 0,
      folowersCount: 0,
      description: "",
      slug: "mon-khai-vi-mot-dem",
      chapters: [],
    },
  ];
}
export async function getData(): Promise<Story[]> {
  return await [
    {
      id: 1,
      thumb: "", // hinh anh cua chapter
      author: "admin",
      title: "Ông Chú Và 100 Con Rồng Dựng Nên Quốc Gia Mạnh Nhất!",
      sub: "100 chapter", // chapter moi nhat cua truyen / tong so chuong
      categories: [], // thoi gian cap nhat chapter
      status: {
        value: "complete",
        title: "Hoaàn Thành",
      },
      viewsCount: 0,
      folowersCount: 0,
      description: "",
      slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat",
      chapters: [
        {
          id: 1,
          thumb: "",
          sub: "chapter 1",
          title: "Chapter 1",
          slug: "ong-chu-va-100-con-rong-dung-nen-quoc-gia-manh-nhat",
          content: "Content of chapter is markdown / html / pdf",
          createAt: "2025-06-01",
        },
        {
          id: 22,
          thumb: "",
          title: "Chapter 2",
          sub: "chapter 2",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
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
        title: "Đang Ra",
      },
      viewsCount: 0,
      folowersCount: 0,
      description: "",
      slug: "mon-khai-vi-mot-dem",
      chapters: [],
    },
  ];
}

export async function getCategories(): Promise<CategoryType[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      title: "Romantic 1",
      country: {
        value: "china",
        title: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 2,
      title: "Romantic 2",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 3,
      title: "Romantic 3",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 4,
      title: "Romantic 4",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 5,
      title: "Romantic 5",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "active",
    },
    {
      id: 6,
      title: "Romantic dat anh",
      country: {
        value: "china",
        label: "Trung Quốc",
      },
      stories: [],
      status: "pending",
    },
    // ...
  ] as CategoryType[];
}

// get list country

export async function getCountries(): Promise<CountryType[]> {
  return (await [
    {
      id: 1,
      value: "vietnam",
      title: "Việt Nam",
    },
    {
      id: 2,
      value: "china",
      title: "Trung Quốc",
    },
    {
      id: 3,
      value: "korea",
      title: "Hàn Quốc",
    },
  ]) as CountryType[];
}

// get sortby list data
export async function getSortByList(): Promise<SortByType[]> {
  return (await [
    {
      id: 1,
      value: "desc-createdAt",
      itle: "Ngày đăng giảm dần",
    },
    {
      id: 2,
      value: "esc-createdAt",
      title: "Ngày đăng tăng dần",
    },
    {
      id: 3,
      value: "desc-updatedAt",
      title: "Ngày cập nhật giảm dần",
    },
    {
      id: 4,
      value: "esc-updatedAt",
      title: "Ngày cập nhật tăng dần",
    },
    {
      id: 5,
      value: "desc-view",
      title: "Lượt xem giảm dần",
    },
    {
      id: 6,
      value: "esc-view",
      title: "Lượt xem tăng dần",
    },
  ]) as SortByType[];
}

export async function getMaxChapterOption(): Promise<MaxChapterOptsType[]> {
  return await [
    { value: 0, title: "Nhiều hơn 1" },
    { value: 50, title: "Nhiều hơn 50" },
    { value: 100, title: "Nhiều hơn 100" },
    { value: 200, title: "Nhiều hơn 200" },
    { value: 300, title: "Nhiều hơn 300" },
    { value: 400, title: "Nhiều hơn 400" },
    { value: 500, title: "Nhiều hơn 500" },
  ];
}

// get status list

export async function getStatusList(): Promise<StatusType[]> {
  return await [
    {
      value: "ongoing",
      title: "Đang tiến hành",
    },
    {
      value: "completed",
      title: "Hoàn thành",
    },
  ];
}
