import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdOutlineDashboardCustomize size={24} />,
  },
  {
    title: "Teams",
    path: "/teams",
    icon: <IoPeopleSharp size={24} />,
  },
  {
    title: "Activity",
    path: "/activity",
    icon: <FiActivity size={24} />,
  },
];
