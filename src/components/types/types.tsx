export type StatusType = {
  id?: number;
  value: string;
  title?: string;
};
export type CountryType = {
  id?: number;
  value: string;
  title: string;
};
export type CategoryType = {
  id?: number;
  title: string;
  status?: boolean | string;
  stories?: Story[];
  country?: CountryType;
  description?: string;
};

export type FilterBarProps = {
  status?: StatusType[];
  country?: CountryType[];
  categories?: CategoryType[];
  sortBy?: SortByType[];
};
export type MaxChapterOptsType = {
  id?: number;
  value: number;
  title: string;
};
export type SortByType = {
  id: number;
  value: string;
  title: string;
};
export type ChapterType = {
  id: number;
  thumb: string;
  sub?: string;
  title: string;
  slug: string;
  description?: string;
  content?: string;
  createAt?: string;
};
export type Story = {
  id?: number;
  thumb: string;
  title: string;
  author?: string; //replace by user entity
  sub: string;
  slug?: string;
  categories?: CategoryType[];
  status?: StatusType;
  viewsCount?: number;
  likeCount?: number;
  folowersCount?: number;
  description?: string;
  chapters?: ChapterType[]; // or count chapter of story
  country?: string;
  tag?: string; /// tag : viewsCount > 50 => "hot"
};
