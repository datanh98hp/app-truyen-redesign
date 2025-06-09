"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function StoryItem({
  src,
  className,
  title,
  subTitle,
  id,
  slug,
  ...props
}: {
  src?: string;
  className?: string;
  title: string;
  id?: string;
  subTitle: string;
  slug?: string;
}) {
  const router = useRouter();
  const handleClick = () => {
    // Handle click event, e.g., navigate to chapter details page
    if (!id) {
      alert(`Slug can be null...`);
      return;
    } else {
      router.push(`/story/${slug}-${id}`);
    }
  };

  return (
    <div
      className={cn("chapter-item", className)}
      {...props}
      onClick={handleClick}
    >
      <Image
        src={src || "/assets/thumb.png"}
        alt="image"
        width={190}
        height={247}
        sizes="(max-width: 168px) 100vw, (max-width: 247px) 50vw, 33vw"
        className="w-xl border rounded-sm"
      />
      <div className="">
        <p className="my-1 font-semibold text-center font-quicksand truncate">
          {title}
        </p>
        <p className="font-semibold text-sm my-2 font-quicksand text-center">
          {subTitle}
        </p>
      </div>
    </div>
  );
}
