import { File, Inbox, Send, Receipt, KeySquare, LucideIcon, PanelsTopLeft } from "lucide-react";

export interface NavSubItem {
  title: string;
  path: string;
}

export interface NavMainItem {
  title: string;
  path: string;
  icon?: LucideIcon;
  isActive?: boolean;
  subItems?: NavSubItem[];
}

export interface NavGroup {
  id: number;
  label: string;
  items: NavMainItem[];
}

const basePath = "/dashboard";

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Overview",
    items: [
      {
        title: "Dashboard",
        path: basePath,
        icon: PanelsTopLeft,
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    label: "Apps & Pages",
    items: [
      {
        title: "Terminal",
        path: `${basePath}/terminal`,
        icon: Inbox,
      },
      {
        title: "Invoice",
        path: "#",
        icon: Receipt,
        subItems: [
          { title: "List", path: `${basePath}/invoice/list-preview` },
          { title: "View", path: `${basePath}/invoice/view` },
          { title: "Add", path: `${basePath}/invoice/add` },
          { title: "Edit", path: `${basePath}/invoice/edit` },
        ],
      },
      {
        title: "Suppliers",
        path: "#",
        icon: Receipt,
        subItems: [
          { title: "List", path: `${basePath}/supplier/list-preview` },
          { title: "View", path: `${basePath}/supplier/view` },
          { title: "Add", path: `${basePath}/supplier/add` },
          { title: "Edit", path: `${basePath}/supplier/edit` },
        ],
      },


      {
        title: "Employees",
        path: "#",
        icon: KeySquare,
        subItems: [
          { title: "List", path: `${basePath}/employee/list-preview` },
          { title: "View", path: `${basePath}/employee/view` },
          { title: "Add", path: `${basePath}/employee/add` },
          { title: "Edit", path: `${basePath}/employee/edit` },
        ],
      },
      {
        title: "Products",
        path: `${basePath}/products`,
        icon: File,
      },
      {
        title: "Sent",
        path: `${basePath}/sent`,
        icon: Send,
      },
    ],
  },
  {
    id: 3,
    label: "Billing",
    items: [
      {
        title: "Billing",
        path: `${basePath}/billing`,
        icon: Receipt,
      },
    ],
  },
];
