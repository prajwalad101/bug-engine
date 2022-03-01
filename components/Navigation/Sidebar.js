import Link from "next/link";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";
import ProjectLink from "../UI/Sidebar/ProjectLink";
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
        sidebarOpen ? "left-0" : "-left-[280px]"
      }  font-lato bg-sidebar-background text-sidebar-text w-64 h-[100vh] fixed top-0 side-transition lg:left-0 md:w-[270px]`}
    >
      {/* Sidebar heading */}
      <div className="mb-3 bg-[#000022] text-white">
        <div className="flex items-center ml-7 justify-between">
          <h2 className="my-4 pb-[1px] tracking-wide text-[19px] font-semibold">
            BugEngine
          </h2>
          <AiIcons.AiOutlineClose
            size={20}
            onClick={() => setSidebarOpen(false)}
            className="mr-5 transition-all hover:cursor-pointer hover:text-gray-500 lg:hidden"
          />
        </div>
      </div>

      {/* Sidebar data */}
      <ul className="mx-4">
        {SidebarData.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center mb-1 pl-3 rounded-md h-12 hover:bg-[#0B132B] hover:cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            </li>
          );
        })}
        <div>
          <p className="uppercase text-gray-500 ml-3 mt-9">projects</p>
        </div>
      </ul>

      {/* <ul className="w-full mx-4">
        Displays all Sidebar data
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
      </ul> */}
    </div>
  );
}

export default Sidebar;
