import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HomeIcon, LucideArrowUpFromDot, SlashIcon } from "lucide-react";
import Link from "next/link";

export default async function StoryChapterPage({
  params,
}: {
  params: Promise<{ slug: string; id_chapter: string }>;
}) {
  // slug = (slug của truyện, id_chapter )

  const { slug, id_chapter } = await params; // chua id cua truyen va chapter
  const id = id_chapter.split("-").reverse()[0];
  console.log("id_chapter:", id);
  console.log("slug story:", slug);
  const getCurrentChapter = () => {
    var t = id_chapter.split("-")[0];
    return Number(t.split("_")[1]);
  };
  console.log("current chapter:", getCurrentChapter());
  const chapterString = () => {
    return "Chương " + id_chapter.split("-").reverse()[0];
  };
  const data_details = null as any;
  return (
    <div className="relative min-h-screen">
      <div className="font-semibold font-quicksand w-full  rounded-sm border dark:bg-gray-900 bg-gray-200">
        <span id="top"></span>
        {!data_details == null && (
          <div className="font-semibold font-quicksand w-full">
            <h1 className="text-2xl text-center my-4">Chưa có nội dung</h1>
            <p className="text-center text-gray-500">
              Nội dung sẽ được cập nhật sớm nhất -{slug}_{id_chapter}
            </p>
          </div>
        )}

        <div className="m-4">
          <Breadcrumb aria-label="Breadcrumb" className="hidden lg:block">
            <BreadcrumbList className="text-lg">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <HomeIcon />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/store/${slug}`}>{slug}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/store/${slug}/${id_chapter}`}>
                  {chapterString()}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl">{slug}</p>
            <p className="text-xl font-light underline p-4">
              {chapterString()}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm">
            <Link
              href={`/story/${slug}/chapter_${getCurrentChapter() - 1}-${id}`}
              className="border p-2 rounded-md bg-orange-400 text dark:text-white dark:bg-gray-600 text-white"
            >
              Chương trước
            </Link>
            <div> Chương {getCurrentChapter()} / Tổng số chương: </div>
            <Link
              href={`/story/${slug}/chapter_${getCurrentChapter() + 1}-${id}`}
              className="border p-2 rounded-md bg-orange-400 text dark:text-white dark:bg-gray-600 text-white"
            >
              Chương sau
            </Link>
          </div>
          <div className="my-2 font-quicksand">
            <ScrollArea className="h-[800px] w-fit rounded-md border-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum nulla id nisi aliquet, ac sodales lacus iaculis. Aliquam et
              ligula a lectus consequat porttitor. Pellentesque convallis
              fermentum nisi, in vestibulum odio aliquet id. Cras facilisis,
              nunc id varius posuere, ligula ipsum semper neque, id blandit
              ligula sapien vitae sem. Nullam gravida porta convallis. Integer
              varius luctus turpis nec malesuada. Mauris eu accumsan enim.
              Aliquam erat volutpat. Nam vel tortor vitae neque faucibus finibus
              ac at enim. Praesent eu magna ac nunc auctor sodales. Morbi
              finibus ex vel metus dapibus, ac molestie urna consectetur. Donec
              ut sapien aliquam eros vulputate eleifend quis eget libero. Ut
              dictum condimentum purus vel scelerisque. Proin non euismod nibh.
              Duis vitae sapien dui. Sed mattis odio ac velit consectetur
              congue. Etiam vitae tellus ut nisi gravida auctor. Sed lobortis
              tortor ante, vel mollis augue varius vel. Suspendisse tempor arcu
              quis tincidunt aliquet. Sed rutrum, orci sed molestie viverra,
              nisi felis feugiat mauris, sed imperdiet dui augue a lorem.
              Aliquam non libero at ligula consectetur dictum. Nunc sodales
              libero odio, a pellentesque ligula dictum porta. Aenean eu lectus
              nunc. Proin dignissim dui ut ornare porttitor. In sit amet gravida
              velit. Integer ut eros in tellus aliquam lobortis. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent elementum augue viverra, elementum
              ante nec, interdum sapien. Pellentesque sit amet leo tincidunt
              ligula vulputate semper non in odio. Integer sodales nisl
              elementum odio bibendum, ac ornare enim volutpat. Aliquam in
              interdum libero. Curabitur in massa sem. Etiam maximus mi nec
              metus dictum varius eget non eros. Donec dui ipsum, placerat in
              tortor eu, consequat volutpat nunc. Ut iaculis commodo felis
              vulputate varius. Aliquam pellentesque sapien in cursus elementum.
              Nunc pulvinar purus vel nibh tincidunt pretium. Nullam viverra,
              elit quis euismod varius, leo nunc tempus turpis, molestie maximus
              enim erat vitae sapien. Quisque in bibendum nisi. Ut finibus
              dignissim arcu sed efficitur. Aenean molestie dapibus sagittis.
              Morbi suscipit nec massa vitae faucibus. Pellentesque congue
              consequat ligula, nec lobortis orci porta ut. In porta est sed
              pretium efficitur. Donec eu volutpat elit. Duis rhoncus magna
              dignissim iaculis mollis. Nunc dui nibh, mollis eget pharetra ut,
              pretium eget ante. Vestibulum posuere mattis erat non maximus.
              Donec varius est ut turpis pulvinar eleifend. Duis vel leo
              euismod, rutrum felis ut, condimentum eros. In vel tempus nunc.
              Nullam eu lectus nulla. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Nunc ipsum justo,
              fermentum at laoreet feugiat, suscipit vitae urna. Aenean magna
              felis, interdum quis leo vitae, porttitor aliquet neque. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
              nulla id nisi aliquet, ac sodales lacus iaculis. Aliquam et ligula
              a lectus consequat porttitor. Pellentesque convallis fermentum
              nisi, in vestibulum odio aliquet id. Cras facilisis, nunc id
              varius posuere, ligula ipsum semper neque, id blandit ligula
              sapien vitae sem. Nullam gravida porta convallis. Integer varius
              luctus turpis nec malesuada. Mauris eu accumsan enim. Aliquam erat
              volutpat. Nam vel tortor vitae neque faucibus finibus ac at enim.
              Praesent eu magna ac nunc auctor sodales. Morbi finibus ex vel
              metus dapibus, ac molestie urna consectetur. Donec ut sapien
              aliquam eros vulputate eleifend quis eget libero. Ut dictum
              condimentum purus vel scelerisque. Proin non euismod nibh. Duis
              vitae sapien dui. Sed mattis odio ac velit consectetur congue.
              Etiam vitae tellus ut nisi gravida auctor. Sed lobortis tortor
              ante, vel mollis augue varius vel. Suspendisse tempor arcu quis
              tincidunt aliquet. Sed rutrum, orci sed molestie viverra, nisi
              felis feugiat mauris, sed imperdiet dui augue a lorem. Aliquam non
              libero at ligula consectetur dictum. Nunc sodales libero odio, a
              pellentesque ligula dictum porta. Aenean eu lectus nunc. Proin
              dignissim dui ut ornare porttitor. In sit amet gravida velit.
              Integer ut eros in tellus aliquam lobortis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Praesent elementum augue viverra, elementum ante nec,
              interdum sapien. Pellentesque sit amet leo tincidunt ligula
              vulputate semper non in odio. Integer sodales nisl elementum odio
              bibendum, ac ornare enim volutpat. Aliquam in interdum libero.
              Curabitur in massa sem. Etiam maximus mi nec metus dictum varius
              eget non eros. Donec dui ipsum, placerat in tortor eu, consequat
              volutpat nunc. Ut iaculis commodo felis vulputate varius. Aliquam
              pellentesque sapien in cursus elementum. Nunc pulvinar purus vel
              nibh tincidunt pretium. Nullam viverra, elit quis euismod varius,
              leo nunc tempus turpis, molestie maximus enim erat vitae sapien.
              Quisque in bibendum nisi. Ut finibus dignissim arcu sed efficitur.
              Aenean molestie dapibus sagittis. Morbi suscipit nec massa vitae
              faucibus. Pellentesque congue consequat ligula, nec lobortis orci
              porta ut. In porta est sed pretium efficitur. Donec eu volutpat
              elit. Duis rhoncus magna dignissim iaculis mollis. Nunc dui nibh,
              mollis eget pharetra ut, pretium eget ante. Vestibulum posuere
              mattis erat non maximus. Donec varius est ut turpis pulvinar
              eleifend. Duis vel leo euismod, rutrum felis ut, condimentum eros.
              In vel tempus nunc. Nullam eu lectus nulla. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Nunc ipsum justo, fermentum at laoreet feugiat, suscipit vitae
              urna. Aenean magna felis, interdum quis leo vitae, porttitor
              aliquet neque. Pellentesque convallis fermentum nisi, in
              vestibulum odio aliquet id. Cras facilisis, nunc id varius
              posuere, ligula ipsum semper neque, id blandit ligula sapien vitae
              sem. Nullam gravida porta convallis. Integer varius luctus turpis
              nec malesuada. Mauris eu accumsan enim. Aliquam erat volutpat. Nam
              vel tortor vitae neque faucibus finibus ac at enim. Praesent eu
              magna ac nunc auctor sodales. Morbi finibus ex vel metus dapibus,
              ac molestie urna consectetur. Donec ut sapien aliquam eros
              vulputate eleifend quis eget libero. Ut dictum condimentum purus
              vel scelerisque. Proin non euismod nibh. Duis vitae sapien dui.
              Sed mattis odio ac velit consectetur congue. Etiam vitae tellus ut
              nisi gravida auctor. Sed lobortis tortor ante, vel mollis augue
              varius vel. Suspendisse tempor arcu quis tincidunt aliquet. Sed
              rutrum, orci sed molestie viverra, nisi felis feugiat mauris, sed
              imperdiet dui augue a lorem. Aliquam non libero at ligula
              consectetur dictum. Nunc sodales libero odio, a pellentesque
              ligula dictum porta. Aenean eu lectus nunc. Proin dignissim dui ut
              ornare porttitor. In sit amet gravida velit. Integer ut eros in
              tellus aliquam lobortis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Praesent
              elementum augue viverra, elementum ante nec, interdum sapien.
              Pellentesque sit amet leo tincidunt ligula vulputate semper non in
              odio. Integer sodales nisl elementum odio bibendum, ac ornare enim
              volutpat. Aliquam in interdum libero. Curabitur in massa sem.
              Etiam maximus mi nec metus dictum varius eget non eros. Donec dui
              ipsum, placerat in tortor eu, consequat volutpat nunc. Ut iaculis
              commodo felis vulputate varius. Aliquam pellentesque sapien in
              cursus elementum. Nunc pulvinar purus vel nibh tincidunt pretium.
              Nullam viverra, elit quis euismod varius, leo nunc tempus turpis,
              molestie maximus enim erat vitae sapien. Quisque in bibendum nisi.
              Ut finibus dignissim arcu sed efficitur. Aenean molestie dapibus
              sagittis. Morbi suscipit nec massa vitae faucibus. Pellentesque
              congue consequat ligula, nec lobortis orci porta ut. In porta est
              sed pretium efficitur. Donec eu volutpat elit. Duis rhoncus magna
              dignissim iaculis mollis. Nunc dui nibh, mollis eget pharetra ut,
              pretium eget ante. Vestibulum posuere mattis erat non maximus.
              Donec varius est ut turpis pulvinar eleifend. Duis vel leo
              euismod, rutrum felis ut, condimentum eros. In vel tempus nunc.
              Nullam eu lectus nulla. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Nunc ipsum justo,
              fermentum at laoreet feugiat, suscipit vitae urna. Aenean magna
              felis, interdum quis leo vitae, porttitor aliquet neque.
              Pellentesque convallis fermentum nisi, in vestibulum odio aliquet
              id. Cras facilisis, nunc id varius posuere, ligula ipsum semper
              neque, id blandit ligula sapien vitae sem. Nullam gravida porta
              convallis. Integer varius luctus turpis nec malesuada. Mauris eu
              accumsan enim. Aliquam erat volutpat. Nam vel tortor vitae neque
              faucibus finibus ac at enim. Praesent eu magna ac nunc auctor
              sodales. Morbi finibus ex vel metus dapibus, ac molestie urna
              consectetur. Donec ut sapien aliquam eros vulputate eleifend quis
              eget libero. Ut dictum condimentum purus vel scelerisque. Proin
              non euismod nibh. Duis vitae sapien dui. Sed mattis odio ac velit
              consectetur congue. Etiam vitae tellus ut nisi gravida auctor. Sed
              lobortis tortor ante, vel mollis augue varius vel. Suspendisse
              tempor arcu quis tincidunt aliquet. Sed rutrum, orci sed molestie
              viverra, nisi felis feugiat mauris, sed imperdiet dui augue a
              lorem. Aliquam non libero at ligula consectetur dictum. Nunc
              sodales libero odio, a pellentesque ligula dictum porta. Aenean eu
              lectus nunc. Proin dignissim dui ut ornare porttitor. In sit amet
              gravida velit. Integer ut eros in tellus aliquam lobortis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent elementum augue viverra, elementum
              ante nec, interdum sapien. Pellentesque sit amet leo tincidunt
              ligula vulputate semper non in odio. Integer sodales nisl
              elementum odio bibendum, ac ornare enim volutpat. Aliquam in
              interdum libero. Curabitur in massa sem. Etiam maximus mi nec
              metus dictum varius eget non eros. Donec dui ipsum, placerat in
              tortor eu, consequat volutpat nunc. Ut iaculis commodo felis
              vulputate varius. Aliquam pellentesque sapien in cursus elementum.
              Nunc pulvinar purus vel nibh tincidunt pretium. Nullam viverra,
              elit quis euismod varius, leo nunc tempus turpis, molestie maximus
              enim erat vitae sapien. Quisque in bibendum nisi. Ut finibus
              dignissim arcu sed efficitur. Aenean molestie dapibus sagittis.
              Morbi suscipit nec massa vitae faucibus. Pellentesque congue
              consequat ligula, nec lobortis orci porta ut. In porta est sed
              pretium efficitur. Donec eu volutpat elit. Duis rhoncus magna
              dignissim iaculis mollis. Nunc dui nibh, mollis eget pharetra ut,
              pretium eget ante. Vestibulum posuere mattis erat non maximus.
              Donec varius est ut turpis pulvinar eleifend. Duis vel leo
              euismod, rutrum felis ut, condimentum eros. In vel tempus nunc.
              Nullam eu lectus nulla. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Nunc ipsum justo,
              fermentum at laoreet feugiat, suscipit vitae urna. Aenean magna
              felis, interdum quis leo vitae, porttitor aliquet neque.
              Pellentesque convallis fermentum nisi, in vestibulum odio aliquet
              id. Cras facilisis, nunc id varius posuere, ligula ipsum semper
              neque, id blandit ligula sapien vitae sem. Nullam gravida porta
              convallis. Integer varius luctus turpis nec malesuada. Mauris eu
              accumsan enim. Aliquam erat volutpat. Nam vel tortor vitae neque
              faucibus finibus ac at enim. Praesent eu magna ac nunc auctor
              sodales. Morbi finibus ex vel metus dapibus, ac molestie urna
              consectetur. Donec ut sapien aliquam eros vulputate eleifend quis
              eget libero. Ut dictum condimentum purus vel scelerisque. Proin
              non euismod nibh. Duis vitae sapien dui. Sed mattis odio ac velit
              consectetur congue. Etiam vitae tellus ut nisi gravida auctor. Sed
              lobortis tortor ante, vel mollis augue varius vel. Suspendisse
              tempor arcu quis tincidunt aliquet. Sed rutrum, orci sed molestie
              viverra, nisi felis feugiat mauris, sed imperdiet dui augue a
              lorem. Aliquam non libero at ligula consectetur dictum. Nunc
              sodales libero odio, a pellentesque ligula dictum porta. Aenean eu
              lectus nunc. Proin dignissim dui ut ornare porttitor. In sit amet
              gravida velit. Integer ut eros in tellus aliquam lobortis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent elementum augue viverra, elementum
              ante nec, interdum sapien. Pellentesque sit amet leo tincidunt
              ligula vulputate semper non in odio. Integer sodales nisl
              elementum odio bibendum, ac ornare enim volutpat. Aliquam in
              interdum libero. Curabitur in massa sem. Etiam maximus mi nec
              metus dictum varius eget non eros. Donec dui ipsum, placerat in
              tortor eu, consequat volutpat nunc. Ut iaculis commodo felis
              vulputate varius. Aliquam pellentesque sapien in cursus elementum.
              Nunc pulvinar purus vel nibh tincidunt pretium. Nullam viverra,
              elit quis euismod varius, leo nunc tempus turpis, molestie maximus
              enim erat vitae sapien. Quisque in bibendum nisi. Ut finibus
              dignissim arcu sed efficitur. Aenean molestie dapibus sagittis.
              Morbi suscipit nec massa vitae faucibus. Pellentesque congue
              consequat ligula, nec lobortis orci porta ut. In porta est sed
              pretium efficitur. Donec eu volutpat elit. Duis rhoncus magna
              dignissim iaculis mollis. Nunc dui nibh, mollis eget pharetra ut,
              pretium eget ante. Vestibulum posuere mattis erat non maximus.
              Donec varius est ut turpis pulvinar eleifend. Duis vel leo
              euismod, rutrum felis ut, condimentum eros. In vel tempus nunc.
              Nullam eu lectus nulla. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Nunc ipsum justo,
              fermentum at laoreet feugiat, suscipit vitae urna. Aenean magna
              felis, interdum quis leo vitae, porttitor aliquet neque.
              Pellentesque convallis fermentum nisi, in vestibulum odio
            </ScrollArea>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg transition-all duration-300 cursor-pointer">
        <a href="#top" aria-label="Scroll to top">
          <LucideArrowUpFromDot className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
