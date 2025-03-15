import * as React from "react"
import {
  AudioWaveform,
  BadgePlus,
  Command,
  FileText,
  GalleryVerticalEnd,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { UserNav } from "./user-nav"

const userName = localStorage.getItem("userName") || "";
const userEmail = localStorage.getItem("userEmail") || "";

const data = {
  user: {
    name: userName,
    email: userEmail,
    avatar: "https://github.com/shadcn.png",
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
      title: "Your Posts",
      url: "",
      icon: FileText,
      isActive: true,
      items: [
        {
          title: "Text Posts",
          url: "/user-dashboard",
        },
        {
          title: "Image Posts",
          url: "/user-dashboard/get-image-posts",
        },
        {
          title: "Blog Posts",
          url: "#",
        },
      ],
    },
    {
      title: "Add New Post",
      url: "#",
      icon: BadgePlus,
      items: [
        {
          title: "Add Text Post",
          url: "/user-dashboard/add-text-posts",
        },
        {
          title: "Add Image Post",
          url: "/user-dashboard/add-image-posts",
        },
        {
          title: "Add Blog Post",
          url: "#",
        },
      ],
    },
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
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    // {
    //   name: "Login Requests",
    //   url: "/",
    //   icon: Plus,
    // },
    // {
    //   name: "Sales & Marketing",
    //   url: "#",
    //   icon: PieChart,
    // },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: Map,
    // },
  ],
}

export function AppSidebarUser({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <h1 className="text-xl font-bold mt-5">Welcome, {userName}</h1>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <UserNav user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
