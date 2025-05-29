import { cn } from "@/lib/utils";

export default function BadgeContent({
  icon,
  title,
  textColor,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  textColor: string;
  className?: string;
}) {
  return (
    <p className={cn(`flex flex-row gap-2 text-[${textColor}]`, className)}>
      <span>{icon}</span>
      {title}
    </p>
  );
}
