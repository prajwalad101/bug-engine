import { useRouter } from "next/router";
import { useEffect } from "react";
import { GoSettings } from "react-icons/go";

import { projects } from "../../dev-data/projects";

function ProjectPage() {
  const router = useRouter();

  // Finds a project from its id
  const projectId = Number(router.query.id);
  const project = projects.find((el) => el.id === projectId);

  // If project not loaded return null
  if (!project) return null;

  return (
    <div className="ml-5 mt-5 font-lato ">
      <div className="flex items-end gap-4">
        <h1 className="font-bold text-2xl">{project.name}</h1>
        <p className="text-gray-500 ">21 January, 2021</p>
      </div>
      <div className="flex items-center gap-3 mt-2 text-gray-600 hover:cursor-pointer">
        <GoSettings />
        <p>Details</p>
      </div>
    </div>
  );
}

export default ProjectPage;
