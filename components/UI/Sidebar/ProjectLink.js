import Link from "next/link";

export default function ProjectLink({
  project,
  setSidebarOpen,
  activeProject,
  setActiveProject,
}) {
  const activeClass = activeProject === project._id ? "bg-sidebar-hover" : "";

  return (
    <Link href={`/project/${project._id}`} passHref>
      <li
        className={`${activeClass} flex items-center mb-[2px] pl-3 lg:pl-5 h-12 hover:bg-sidebar-hover hover:cursor-pointer transition-colors`}
        onClick={() => {
          setActiveProject(project._id);
          // pushToProjectPage();
          setSidebarOpen(false);
        }}
      >
        <p>{project.name}</p>
      </li>
    </Link>
  );
}
