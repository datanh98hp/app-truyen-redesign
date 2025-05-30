import Image from "next/image";

export function ChapterItem({
  src,
  className,
  title,
  subTitle,
  ...props
}: {
  src: string;
  className?: string;
  title: string;
  subTitle: string;
}) {
  return (
    <div className="h-full chapter-item">
      <Image
        src="/assets/thumb.png"
        alt="image"
        width={190}
        height={247}
        sizes="(max-width: 168px) 100vw, (max-width: 247px) 50vw, 33vw"
        className="w-xl border rounded-sm"
      />
      <div className="">
        <p className="my-2 font-semibold font-quicksand truncate">{title}</p>
        <p className="font-semibold font-quicksand text-center">{subTitle}</p>
      </div>
    </div>
  );
}
