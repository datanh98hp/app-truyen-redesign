"use client";
import { updateStory } from "@/app/actions/admin/story.action";
import { Story } from "@/components/types/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Row } from "@tanstack/react-table";
import { EditIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
export function ActionGroupStoryBtn({ row }: { row: Row<Story> }) {
  // const [title, settitle] = useState("");
  // const [thumb, setThumb] = useState("");
  // const [sub, setSub] = useState("");
  // const [country, setcountry] = useState("");
  // const [slug, setSlug] = useState("");
  // const [category, setCategory] = useState<CategoryType[]>([]);
  // const [author, setAuthor] = useState("");
  // const [description, setDescription] = useState("");
  // const [status, setStatus] = useState<StatusType>({ value: "", title: "" });
  // const [tags, setTags] = useState("");

  const router = useRouter();
  const id = Number(row.original.id);
  // initial data if edit
  // const data_old = row.original;
  // console.log(data_old);
  // useEffect(() => {
  //   if (data_old) {
  // settitle(data_old.title);
  // setThumb(data_old.thumb);
  // setSub(data_old.sub);
  // setcountry(data_old.country || "");
  // setSlug(data_old.slug || "");
  // setCategory(data_old.categories || []);
  // setAuthor(data_old.author || "author");
  // setDescription(data_old.description || "");
  // setStatus(
  //   data_old.status || { value: "onging", title: "Đang tiến hành" }
  // );
  // setTags(data_old.tag || "");
  //   }
  // });

  async function handledeleteCategory() {
    console.log(id);
    // try {
    //   await deleteCategory(id);
    // } catch (error) {
    //   console.log(`Erorr:${error}`);
    // }
  }
  //   console.log(category, description, slug, sub, status, tag, title, country);
  const handleItemChecked = (value: number | string) => {
    console.log(value);
  };
  const handleClickEdit = () => {
    router.push(`/admin/story/${row.original.id}`);
  };
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        {/* btn form edit & verify delete*/}
        <div className="text-center p-1 rounded-md">
          <Button type="button" variant="outline" onClick={handleClickEdit}>
            <EditIcon />
          </Button>
        </div>
        {/* Dialog form delete */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Trash2Icon />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-gray-900">
            <DialogHeader>
              <DialogTitle>Delete category - {id}</DialogTitle>
              <DialogDescription>
                Xác nhận xóa vĩnh viễn không thể khôi phục.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4"></div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                {/* <Button variant="outline">Cancel</Button> */}
                <Button type="submit" onClick={handledeleteCategory}>
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
