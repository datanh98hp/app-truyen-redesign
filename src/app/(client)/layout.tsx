import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col gap-[32px] my-2 items-center border">
        {children}
      </main>
      <Footer />
    </div>
  );
}
