import * as AiIcons from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";

import { SidebarData } from "./SidebarData";
import ProjectLink from "../UI/Sidebar/ProjectLink";
import useProjects from "../../hooks/useProjects";
import { useState } from "react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  // Fetch projects from the api
  const { isLoading, isError, data, error } = useProjects();

  const projects = data?.data;

  // to view which project is currently selected
  const [activeProject, setActiveProject] = useState(projects[0]._id);

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
      <div className="mb-3 bg-sidebar-hover text-white">
        <div className="flex items-center ml-7 justify-between">
          <h2 className="my-4 pb-[1px] tracking-wide text-[19px] font-semibold">
            BugEngine
          </h2>
          <AiIcons.AiOutlineClose
            size={20}
            onClick={() => setSidebarOpen(false)}
            className="mr-5 transition-all hover:cursor-pointer text-gray-400 hover:text-white lg:hidden"
          />
        </div>
      </div>

      {/* Sidebar data */}
      <ul className="mx-4">
        {SidebarData.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center mb-[2px] pl-3 rounded-md h-12 hover:bg-[#0B132B] hover:cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            </li>
          );
        })}
        <div className="flex items-center justify-between text-gray-400 ml-3 mt-9">
          <p className="uppercase">projects</p>
          <IoAddSharp
            size={22}
            className="mr-2 hover:text-white hover:cursor-pointer"
          />
        </div>
        {/* All Projects */}
        <div className="mt-5">
          {projects.map((item) => (
            <ProjectLink
              key={item._id}
              project={item}
              setSidebarOpen={setSidebarOpen}
              setActiveProject={setActiveProject}
              activeProject={activeProject}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
