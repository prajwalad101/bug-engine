import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Personal Info",
    path: "/info",
    icon: <BiIcons.BiNotification size={20} />,
  },
  {
    title: "Developers",
    path: "/developers",
    icon: <BsIcons.BsPeople size={20} />,
  },
  {
    title: "Notifications",
    path: "/info",
    icon: <IoIcons.IoMdNotificationsOutline size={20} />,
  },
];
