"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MoonIcon, SearchIcon, SunIcon, User2Icon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "@radix-ui/react-menubar";

interface MenuItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Categories",
    href: "/categories",
    subItems: [
      { label: "Action", href: "/categories/action" },
      { label: "Romance", href: "/categories/romance" },
      { label: "Fantasy", href: "/categories/fantasy" },
      { label: "Action", href: "/categories/action" },
      { label: "Romance", href: "/categories/romance" },
      { label: "Fantasy", href: "/categories/fantasy" },
      { label: "Action", href: "/categories/action" },
      { label: "Romance", href: "/categories/romance" },
      { label: "Fantasy", href: "/categories/fantasy" },
      { label: "Action", href: "/categories/action" },
      { label: "Romance", href: "/categories/romance" },
      { label: "Fantasy", href: "/categories/fantasy" },
      { label: "Action", href: "/categories/action" },
      { label: "Romance", href: "/categories/romance" },
      { label: "Fantasy", href: "/categories/fantasy" },
      { label: "Action", href: "/categories/action" },
      { label: "Romance", href: "/categories/romance" },
      { label: "Fantasy", href: "/categories/fantasy" },
    ],
  },
  {
    label: "Xếp hạnghạng",
    href: "/rankings",
    subItems: [
      { label: "Top Tuần", href: "/rankings/weekly" },
      { label: "Top Tháng", href: "/rankings/monthly" },
      { label: "Tất cả", href: "/rankings/all-time" },
    ],
  },
  {
    label: "Con trai",
    href: "/",
  },
  {
    label: "Con gái",
    href: "/",
  },
  {
    label: "Tìm kiếm",
    href: "/",
  },
  {
    label: "Lịch sử",
    href: "/",
  },
  {
    label: "Theo dõi",
    href: "/",
  },
  {
    label: "Thảo luận",
    href: "/",
  },
  {
    label: "Fanpage",
    href: "/",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
  //search input
  const [searchKeyword, setSearchKeyword] = useState("");
  // show suggest result
  const [showSuggest, setShowSuggest] = useState(false);
  //theme
  const { setTheme, theme } = useTheme();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggest(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log("Dropdown toggled for theme:", theme);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchKeyword);
  };
  const tags = searchKeyword.split(" ").map((v, i) => `Result.${v}-index-${i}`);

  return (
    <header className="shadow-md w-full">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="https://st.truyenqqgo.com/template/frontend/images/logo-icon.png"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </Link>
            <Button
              variant={"outline"}
              className="border border-gray-200 h-10 ml-2 rounded-full "
              onClick={toggleTheme}
            >
              {theme === "light" || theme === "system" ? (
                <MoonIcon className="w-6 h-6" />
              ) : (
                <SunIcon className="w-6 h-6" />
              )}
            </Button>
            <div className="ml-2 border-0 h-10 rounded-4xl inline-flex items-center ">
              <Input
                type="Search"
                placeholder="Search ..."
                onFocus={() => setShowSuggest(true)}
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="border-0 focus-visible:ring-0 rounded-4xl h-10 w-xs dark:bg-[#18191a] bg-gray-100"
              />
              {/* suggets result */}
              {showSuggest && searchKeyword.trim() !== "" && (
                <div
                  className="z-10 absolute top-14 dark:bg-[#18191a] bg-gray-100 w-xs rounded-2xl"
                  ref={searchContainerRef}
                >
                  <ScrollArea className="h-72 rounded-md border w-full">
                    <div className="p-4">
                      <h4 className="mb-4 text-sm font-medium leading-none">
                        Goi y
                      </h4>
                      {tags.map((tag) => (
                        <>
                          <div key={tag} className="text-sm">
                            {tag}
                          </div>
                          <Separator className="my-2" />
                        </>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}

              <button
                onClick={handleSearch}
                className="ml-2 border rounded-full "
              >
                <SearchIcon className="w-9 h-9 p-2" />
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Menubar about="Menu" className="border-1 rounded-full">
              <MenubarMenu>
                <MenubarTrigger className="rounded-full data-[state=open]:bg-transparent ">
                  <User2Icon className="w-4 h-6" />
                </MenubarTrigger>
                <MenubarContent className="w-16 h-fit">
                  <Link href="/user">
                    <MenubarItem>
                      Thông tin <MenubarShortcut></MenubarShortcut>
                    </MenubarItem>
                  </Link>
                  <Link href="/follows">
                    <MenubarItem>Danh sách theo dõi</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <Link href="/history">
                    <MenubarItem>Lịch sử xem</MenubarItem>
                  </Link>
                  <MenubarSeparator />
                  <MenubarItem>Đăng xuất</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </nav>
      {/* ------ */}
      <div className=" dark:bg-[#18191a] dark:text-white bg-amber-600 text-white">
        <nav className="max-w-7xl mx-auto px-4  ">
          {/* Top Level Navigation */}
          <div className="flex justify-between h-14">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => toggleDropdown(index)}
                  onMouseLeave={() => toggleDropdown(index)}
                >
                  <button className="px-2 py-2 dark:bg-[#18191a] dark:text-white hover:underline inline-flex items-center gap-1">
                    <Link href={item.href}>{item.label}</Link>
                    {item.subItems && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdowns.includes(index) ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                  {item.subItems && (
                    <div
                      className={`dark:border
      absolute mt-2 w-max dark:bg-[#18191a] dark:text-white bg-gray-100 text-black shadow-lg z-50
      transition-all duration-200 ease-in-out grid grid-cols-4 gap-4
      ${
        openDropdowns.includes(index)
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }
    `}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700  hover:underline transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-100 "
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="lg:hidden flex items-center">
              {/* <Button
                variant={"outline"}
                className="border border-gray-200 rounded-full text-black"
              >
                <User2Icon className="" />
              </Button> */}
              <Menubar className="rounded-full dark:text-white text-black">
                <MenubarMenu>
                  <MenubarTrigger className="data-[state=open]:bg-transparent">
                    <User2Icon className="w-4 h-6" />
                  </MenubarTrigger>
                  <MenubarContent className="w-16 h-fit">
                    <MenubarItem>
                      Thông tintin <MenubarShortcut></MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Danh sách theo dõ</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Lịch sử</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Đăng xuất</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-200 ${
              isMobileMenuOpen ? "max-h-fit" : "max-h-0 overflow-hidden"
            }`}
          >
            {menuItems.map((item, index) => (
              <div key={index} className="py-1">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex items-center justify-between px-4 py-2 text-white  font-medium"
                >
                  {item.label}
                  {item.subItems && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdowns.includes(index) ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                {item.subItems && (
                  <div
                    className={`
                  pl-4  transition-all duration-200 grid grid-cols-4 gap-4 dark:bg-gray-700 dark:text-gray-100 bg-gray-50 text-black
                  ${
                    openDropdowns.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-1 py-2 text-sm text-wrap  dark:hover:bg-gray-700  hover:underline"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
