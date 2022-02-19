import Link from "next/link";

import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <>
      <div className="mt-3 ml-3">
        <MdIcons.MdMenu size={35} />
      </div>
      <nav>
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
