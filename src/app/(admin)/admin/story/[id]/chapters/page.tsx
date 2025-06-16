import UpdateChapterForm from "@/components/content/stories/chapters/UpdateChapterForm";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getChaptersById } from "@/lib/data";
import { AccordionContent } from "@radix-ui/react-accordion";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const chapters = await getChaptersById(id);
  return (
    <>
      <div className="bg-muted/50 col-span-4 aspect-video rounded-xl dark:border-0 border">
        <div className="flex flex-col gap-3 p-6">
          <p className="font-bold text-2xl">DS chương</p>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            // defaultValue="item-1"
          >
            {chapters.map((item) => {
              return (
                <AccordionItem key={item.id} value={item.id.toString()}>
                  <AccordionTrigger>
                    <p>{item.title}</p>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <UpdateChapterForm item={item} />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      <div className="bg-muted/50 col-span-2 aspect-video rounded-xl dark:border-0 border">
        <div className="flex flex-col gap-3 p-6">
          <p className="font-bold text-2xl">Thống kê</p>
        </div>
      </div>
    </>
  );
}
