import { useState } from "react";
import Link from "next/link";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";
import ProjectLink from "../UI/ProjectLink";
import useProjects from "../../hooks/useProjects";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  // const projects = useProjects();
  const { isLoading, isError, data, error } = useProjects();

  const projects = data?.data;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div
      className={`${
        sidebarOpen ? "left-0" : "-left-[225px]"
      }  font-lato bg-white w-56 border-r-2 h-[100vh] fixed top-0 side-transition lg:left-0 lg:w-64`}
    >
      {/* Logo */}
      <div>
        {/* Close Sidebar Icon */}
        <div className="flex items-center">
          <h2 className="my-4 mx-7 text-xl font-bold">BugEngine</h2>
          <AiIcons.AiOutlineClose
            size={25}
            onClick={() => setSidebarOpen(false)}
            className=" my-4 ml-3 hover:cursor-pointer lg:hidden"
          />
        </div>
        <hr className="hr-line" />
      </div>

      <ul className="w-full mx-4">
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
          <p className="text-[17.5px] ml-3 mt-4 mb-2 text-gray-500">Projects</p>
          {projects.map((item) => {
            return (
              <ProjectLink
                key={item._id}
                project={item}
                setSidebarOpen={setSidebarOpen}
              />
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
