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
      className={`${activeClass} flex items-center mb-[2px] pl-3 lg:pl-5 h-12 hover:bg-sidebar-hover hover:cursor-pointer transition-colors`}
      onClick={() => {
        setActiveProject(project._id);
        pushToProjectPage();
        setSidebarOpen(false);
      }}
    >
      <p>{project.name}</p>
    </li>
  );
}
