import { Home, Users, Ticket, Settings, Menu } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  type: "customer" | "employee";
}

export function DashboardSidebar({ type }: DashboardSidebarProps) {
  const menuItems = type === "customer" 
    ? [
        { title: "Dashboard", icon: Home, url: "/customer" },
        { title: "My Tickets", icon: Ticket, url: "/customer/tickets" },
        { title: "Settings", icon: Settings, url: "/customer/settings" },
      ]
    : [
        { title: "Dashboard", icon: Home, url: "/employee" },
        { title: "Customers", icon: Users, url: "/employee/customers" },
        { title: "Tickets", icon: Ticket, url: "/employee/tickets" },
        { title: "Settings", icon: Settings, url: "/employee/settings" },
      ];

  return (
    <>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <div className="p-4">
              <h2 className="text-lg font-semibold">
                {type === "customer" ? "Customer Portal" : "Employee Portal"}
              </h2>
            </div>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-3 px-3 py-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <SidebarTrigger>
          <Menu className="h-6 w-6" />
        </SidebarTrigger>
      </div>
    </>
  );
}