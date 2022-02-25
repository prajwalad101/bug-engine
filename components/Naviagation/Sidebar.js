import { useEffect, useState } from "react";
import Link from "next/link";

// hooks
import useProjects from "../../hooks/useProjects";

// icons
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";

function Sidebar() {
  const projects = useProjects();

  // State for opening and closing the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="flex justify-start items-center my-3 ml-5">
        <MdIcons.MdMenu
          size={35}
          onClick={openSidebar}
          className="hover:cursor-pointer"
        />
      </div>
      {/* Sidebar */}
      <nav
        className={`${
          sidebarOpen ? "left-0" : "-left-full"
        }  font-lato bg-white w-56 border-r-2 h-[100vh] fixed top-0 transition-all`}
      >
        <ul className="w-full mx-4">
          {/* Close Sidebar Icon */}
          <li className="my-4 ml-3">
            <AiIcons.AiOutlineClose
              size={25}
              onClick={closeSidebar}
              className="hover:cursor-pointer"
            />
          </li>
          {/* Displays all Sidebar data */}
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="py-1">
                <Link href={item.path}>
                  <a className="flex items-center gap-3 h-10 pl-3 rounded-sm hover:bg-slate-100 w-[85%]">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </a>
                </Link>
              </li>
            );
          })}
          <div>
            <p className="text-lg ml-3 mt-4 mb-2 text-gray-500">Projects</p>
            {projects.map((item) => {
              return (
                <li
                  key={item._id}
                  className="my-1 flex items-center h-11 rounded-sm hover:bg-slate-100 w-[85%] pl-3"
                  onClick={closeSidebar}
                >
                  <Link href={`/projects/${item._id}`}>{item.name}</Link>
                </li>
              );
            })}
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
