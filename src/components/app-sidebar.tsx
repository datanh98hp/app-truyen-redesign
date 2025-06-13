"use client";

import {
  AudioWaveform,
  Briefcase,
  Command,
  Frame,
  GalleryVerticalEnd,
  MoonIcon,
  PieChart,
  Settings2,
  SunIcon
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

// This is sample data.
const data = {
  user: {
    name: "Admin user",
    email: "admin@email.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Quản lí nội dung",
      url: "#",
      icon: Briefcase,
      isActive: true,
      items: [
        {
          title: "Thể loại",
          url: "/admin/category",
        },
        {
          title: "Ấn phẩm truyện",
          url: "/admin/story",
        },
        {
          title: "Người dùng",
          url: "/admin/users",
        },
        // {
        //   title: "Cài đặt thông tin",
        //   url: "/admin/setting",
        // },
      ],
    },
    // {
    //   title: "Models",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Genesis",
    //       url: "#",
    //     },
    //     {
    //       title: "Explorer",
    //       url: "#",
    //     },
    //     {
    //       title: "Quantum",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        // {
        //   title: "Cài đặt tìm kiếm",
        //   url: "/admin/setting/search",
        // },
        {
          title: "Cài đặt hiển thị",
          url: "/admin/setting/display",
        },
        {
          title: "Cài đặt thông tin",
          url: "/admin/setting/info",
        },
        // {
        //   title: "Limits",
        //   url: "#",
        // },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: Map,
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log("Dropdown toggled for theme:", theme);
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <div className="flex">
          {/* <h2 className="text-3xl font-bold mx-auto">CMS Truyen IQQ</h2> */}
          <Button
            variant={"outline"}
            className="border border-gray-200 h-8 w-8 rounded-full "
            onClick={toggleTheme}
          >
            {theme === "light" || theme === "system" ? (
              <MoonIcon className="w-3 h-3" />
            ) : (
              <SunIcon className="w-3 h-3" />
            )}
          </Button>
          
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
