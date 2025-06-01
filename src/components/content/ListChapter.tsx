import { Button } from "@/components/ui/button";
import { ChapterItem } from "./ChapterItem";

export type Chapter = {
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

export function ListChapters({ data }: { data?: Chapter[] }) {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
        {data?.map((chapter, index) => (
          <ChapterItem
            key={index}
            src={chapter.src}
            className=""
            title={chapter.title}
            subTitle={chapter.sub}
            slug={chapter.slug}
            id={index + 1} // id chapter
          />
        ))}
      </div>
      <Button
        variant={"outline"}
        className="my-4 bg-amber-600 text-amber-50 dark:bg-gray-800 dark:text-gray-50 hover:opacity-80"
      >
        Xem thêm ...
      </Button>
    </div>
  );
}
