import Link from "next/link";

import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <>
      <div className="flex justify-start items-center h-10">
        <MdIcons.MdMenu size={35} className="ml-3" />
      </div>
      <nav className="bg-slate-100 w-56 h-[100vh] flex justify-center fixed top-0 -left-full transition-all">
        <ul>
          <li>
            <AiIcons.AiOutlineClose />
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="flex items-center">
                <Link href={item.path}>{item.icon}</Link>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
