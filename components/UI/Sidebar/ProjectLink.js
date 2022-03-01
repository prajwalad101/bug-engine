import { useRouter } from "next/router";

export default function ProjectLink({ project, setSidebarOpen }) {
  const router = useRouter();

  const pushToProjectPage = () => {
    router.push(`/project/${project._id}`);
    setSidebarOpen(false);
  };

  return (
    <li
      className="flex items-center mb-1 pl-3 h-12 rounded-md hover:bg-sidebar-hover hover:cursor-pointer transition-colors"
      onClick={pushToProjectPage}
    >
      <p>{project.name}</p>
    </li>
  );
}
