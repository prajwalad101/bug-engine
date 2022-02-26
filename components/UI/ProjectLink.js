import Link from "next/link";

export default function ProjectLink({ project, setSidebarOpen }) {
  return (
    <li
      className="my-1 flex items-center h-11 rounded-sm hover:bg-slate-100 w-[85%] pl-3"
      onClick={() => setSidebarOpen(false)}
    >
      <Link href={`/projects/${project._id}`}>{project.name}</Link>
    </li>
  );
}
