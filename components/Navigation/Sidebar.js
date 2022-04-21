import useProjects from "../../hooks/useProjects";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import * as AiIcons from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";

import { getSidebarData } from "./SidebarData";
import ProjectLink from "../UI/Sidebar/ProjectLink";
import UserDropdown from "../UI/Heading/UserDropdown";
import CreateProjectModal from "../Modal/CreateProjectModal";
import useProject from "../../hooks/useProject";

function Sidebar({ sidebarOpen, setSidebarOpen, isAdmin }) {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [projectModal, setProjectModal] = useState(false);

  // Fetch projects from the api
  const { isLoading, isError, data, error } = useProjects();
  // useProject("62612f85a42c7d72bbc22539");

  const projects = data?.data;
  const sidebarData = getSidebarData(isAdmin);

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
      }  font-lato bg-sidebar-background text-sidebar-text w-64 h-[100vh] fixed top-0 side-transition lg:left-0 md:w-[270px] z-50`}
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
            className="mr-5 transition-all hover:cursor-pointer text-gray-500 hover:text-white lg:hidden"
          />
        </div>
      </div>

      {/* Sidebar data */}
      <ul>
        {sidebarData.map((item, index) => {
          return (
            <Link href={item.path} passHref key={index}>
              <li
                // key={index}
                className={`flex items-center text-gray-300 mb-[2px] pl-3 lg:pl-5 h-12 hover:bg-sidebar-hover hover:cursor-pointer transition-colors ${
                  item.title === selectedTab && "bg-sidebar-hover"
                }`}
                onClick={() => {
                  setSelectedTab(item.title);
                  setSidebarOpen(false);
                }}
              >
                <div className="flex items-center gap-3">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              </li>
            </Link>
            // </Link>
          );
        })}
        <div className="flex items-center justify-between text-gray-400 ml-3 lg:pl-4 mt-9">
          <p className="uppercase">projects</p>
          {isAdmin && (
            <IoAddSharp
              size={22}
              className="mr-5 hover:text-white hover:cursor-pointer"
              onClick={() => {
                setSidebarOpen(false);
                setProjectModal(true);
                // router.push("/newProject");
              }}
            />
          )}
        </div>
        {/* All Projects */}
        <div className="mt-5 text-gray-300">
          {projects.map((item) => (
            <ProjectLink
              key={item._id}
              project={item}
              setSidebarOpen={setSidebarOpen}
              setActiveProject={setSelectedTab}
              activeProject={selectedTab}
            />
          ))}
        </div>
      </ul>
      <CreateProjectModal open={projectModal} setOpen={setProjectModal} />
    </div>
  );
}

export default Sidebar;
