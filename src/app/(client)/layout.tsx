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
      <main className="max-w-7xl mx-auto px-2">
        {children}</main>
      <Footer />
    </div>
  );
}
