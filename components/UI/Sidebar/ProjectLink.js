import { useRouter } from "next/router";

export default function ProjectLink({
  project,
  setSidebarOpen,
  activeProject,
  setActiveProject,
}) {
  const router = useRouter();

  const pushToProjectPage = () => {
    router.push(`/project/${project._id}`);
  };

  const activeClass = activeProject === project._id ? "bg-sidebar-hover" : "";

  return (
    <li
      className={`${activeClass} flex items-center mb-1 pl-3 h-12 rounded-md hover:bg-sidebar-hover hover:cursor-pointer transition-colors`}
      onClick={() => {
        setActiveProject(project._id);
        pushToProjectPage;
        setSidebarOpen(false);
      }}
    >
      <p>{project.name}</p>
    </li>
  );
}
