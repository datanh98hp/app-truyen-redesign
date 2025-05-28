import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] justify-items-center min-h-screen pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Content
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
