import { motion } from "framer-motion"; // Import Framer Motion
import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const { isMobile } = useSidebar();
  const location = useLocation();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu>
        {projects.map((item) => {
          const isActive = location.pathname === item.url;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={item.url} className={`flex items-center gap-2 p-2 rounded-md transition-all duration-300 ${isActive ? "bg-gray-200 text-black" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}>
                    <item.icon />
                    <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                      {item.name}
                    </motion.span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </motion.div>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
