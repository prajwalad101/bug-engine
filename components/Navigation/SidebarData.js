import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";

const SidebarAdminData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdOutlineDashboardCustomize size={24} />,
  },
  {
    title: "People",
    path: "/people",
    icon: <IoPeopleSharp size={24} />,
  },
  {
    title: "Activity",
    path: "/activity",
    icon: <FiActivity size={24} />,
  },
];

const SidebarUserData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdOutlineDashboardCustomize size={24} />,
  },
  // {
  //   title: "People",
  //   path: "/people",
  //   icon: <IoPeopleSharp size={24} />,
  // },
  {
    title: "Activity",
    path: "/activity",
    icon: <FiActivity size={24} />,
  },
];

export const getSidebarData = (isAdmin) => {
  if (isAdmin) {
    return SidebarAdminData;
  } else {
    return SidebarUserData;
  }
};
