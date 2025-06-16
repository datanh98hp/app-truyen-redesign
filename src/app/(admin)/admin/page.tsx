import { ChartBarContent } from "@/components/content/ChartBarContent";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, CheckCircle, LoaderIcon } from "lucide-react";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
export default function Page() {
  return (
    <>
      <div className="grid auto-rows-min gap-2 lg:grid-cols-4 grid-cols-2">
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl">Users</p>
            <p className="flex text-5xl">
              <span>1000</span>
              <ArrowUpRight size={50} className="text-green-500" />
            </p>
          </div>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 border ">
          <div className="flex flex-col gap-3 p-6 ">
            <p className="font-bold text-2xl">Truyện</p>
            <div className="flex flex-row gap-6">
              <p className=" text-5xl">1000</p>
              <div className="flex flex-col items-center justify-center">
                <p className="flex items-center gap-3">
                  <span className="font-bold text-3xl text-emerald-400">
                    {" "}
                    <CheckCircle size={20} className="" />{" "}
                  </span>
                  <span className="font-bold">62</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-bold text-3xl text-yellow-500">
                    {" "}
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
            <p className="font-bold text-2xl">Danh mục</p>
            <p className="text-5xl">100</p>
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
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <div className="grid auto-rows-min gap-2 lg:grid-cols-2 grid-cols-1">
          {/* ----- */}
          <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 ">
            <div className="flex flex-col gap-3 p-6 border">
              <p className="font-bold text-2xl">TOP 10 truyện đọc nhiều nhất</p>

              <Table className="">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">
                        {invoice.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
          {/* ----- */}
          <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 ">
            <div className="flex flex-col gap-3 p-6 border">
              <p className="font-bold text-2xl">TOP 10 truyện yêu thích nhất</p>
              <Table className="">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">
                        {invoice.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
          {/* ----- */}
          <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 ">
            <div className="flex flex-col gap-3 p-6 border">
              <p className="font-bold text-2xl">
                TOP 10 thể loại được yêu thích
              </p>
              <Table className="">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">
                        {invoice.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
          {/* ----- */}
          <div className="bg-muted/50 aspect-video rounded-xl dark:border-0 ">
            <div className="flex flex-col gap-3 p-6 border">
              <p className="font-bold text-2xl">
                Biểu đồ top thể loại - lượt đọc
              </p>
              <ChartBarContent />
            </div>
          </div>
          {/* ----- */}
        </div>
      </div>
    </>
  );
}
