import { Badge } from "./ui/badge";
const tags = ["Mystery", "Fantasy", "Romance", "Drama", "Comedy", "Action", "Adventure","Horror","Thriller","Drama", "Comedy", "Action","Drama", "Comedy", "Action",];
export default function Footer() {
  return (
    <footer className="border my-10 w-full h-fit row-start-3 md:flex flex-row gap-[24px] items-center justify-center">
      <div className="border h-42 w-full font-quicksand">
        <h1 className="font-bold mx-auto">Fanpage</h1>
        <p className="mx-auto">Design by Danie Dev - 2025 <span>&#169; No Copyright</span></p>
      </div>
      <div className=" h-42 w-full font-quicksand">
        <div className="font-semibold ">List popular tag</div>
        <div className="flex flex-row gap-2 flex-wrap">
          {
            tags.map((tag, index) => (
              <Badge key={index} variant="outline">{tag}</Badge>
            ))
          }
        </div>
      </div>
    </footer>
  );
}
