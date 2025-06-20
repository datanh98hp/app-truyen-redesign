import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";

export default async function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  // console.log(`session layout : `, session);
  return (
    <div className="">
      <Header />
      <main className="max-w-7xl mx-auto px-2">{children}</main>
      <Footer />
    </div>
  );
}
