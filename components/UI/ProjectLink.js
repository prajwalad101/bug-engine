import { useRouter } from "next/router";

export default function ProjectLink({ project, setSidebarOpen }) {
  const router = useRouter();

  const pushToProjectPage = () => {
    router.push(`/projects/${project._id}`);
    setSidebarOpen(false);
  };

  return (
    <li
      className="my-1 flex items-center h-11 rounded-sm hover:bg-slate-100 hover:cursor-pointer w-[85%] pl-3"
      onClick={pushToProjectPage}
    >
      <p>{project.name}</p>
    </li>
  );
}
