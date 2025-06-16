import {
  ArrowUpRight,
  CheckCircle,
  Heart,
  LoaderIcon,
  RssIcon,
} from "lucide-react";

export default function AdminStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-4 grid-cols-2">
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl">Đăng tải hôm nay</p>
            <p className="flex text-5xl">
              <span>1000</span>
              <ArrowUpRight size={50} className="text-green-500" />
            </p>
          </div>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border ">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl">Tổng</p>
            <div className="flex flex-row gap-6">
              <p className=" text-5xl">1000</p>
              <div className="flex flex-col items-center justify-center">
                <p className="flex items-center gap-3">
                  <span className="font-bold text-3xl text-emerald-400">
                    <CheckCircle size={20} className="" />{" "}
                  </span>
                  <span className="font-bold">62</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-bold text-3xl text-yellow-500">
                    <LoaderIcon size={20} className="" />{" "}
                  </span>
                  <span className="font-bold">12</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border ">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl">Lượt tương tác</p>
            <div className="flex flex-row gap-6">
              <p className=" text-5xl">1000</p>
              <div className="flex flex-col items-center justify-center">
                <p className="flex items-center gap-3">
                  <span className="font-bold text-3xl text-emerald-400">
                    <RssIcon size={20} className="" />{" "}
                  </span>
                  <span className="font-bold">200</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-bold text-3xl text-yellow-500">
                    <Heart size={20} className="text-red-600" />
                  </span>
                  <span className="font-bold">100</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border ">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl">Lượt phản hồi</p>
            <p className="flex flex-row text-5xl">
              <span>100</span>
              <ArrowUpRight size={50} className="text-green-500" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-xl md:min-h-min">
        <div className="grid auto-rows-min gap-2 lg:grid-cols-6 grid-cols-1 ">
        {/* <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 ">
            <div className="flex flex-col gap-3 p-6 border">
              <p className="font-bold text-2xl">
                Biểu đồ top thể loại - lượt đọc
              </p>
              <ChartBarContent />
            </div>
          </div> */}

        {children}
        {/* ----- */}
        {/* <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 ">
                      <div className="flex flex-col gap-3 p-6 border">
                        <p className="font-bold text-2xl">
                          Biểu đồ top thể loại - lượt đọc
                        </p>
                        <ChartBarContent />
                      </div>
                    </div> */}
        {/* ----- */}
        </div>
      </div>
    </>
  );
}
