export type StatusType = {
  value: string;
  label: string;
};
export type CountryType = {
  value: string;
  label: string;
};
export type CategoryType = {
  value: number | string;
  label: string;
};
export type SortByType = { value: string; label: string };
export type FilterBarProps = {
  status?: StatusType[];
  country?: CountryType[];
  categories?: CategoryType[];
  sortBy?: SortByType[];
};
export type ChapterType = {
  id: number;
  thumb: string;
  sub?: string;
  title: string;
  slug: string;
  description?: string;
  content?: string;
  createAt: string;
}
export type Story = {
  id?: number;
  thumb: string;
  title: string;
  author: string;
  sub: string;
  slug?: string;
  categories?: CategoryType[];
  status?: StatusType;
  viewsCount?: number;
  likeCount?: number;
  folowersCount?: number;
  description?: string;
  chapters?: ChapterType[];
  tag?: string[] /// tag : viewsCount > 50 => "hot"
};
