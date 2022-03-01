import { MdMenu } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar({ setSidebarOpen }) {
  return (
    <div className="flex items-center justify-between my-3 mx-5 lg:hidden">
      <MdMenu
        size={35}
        onClick={() => setSidebarOpen(true)}
        className="hover:cursor-pointer"
      />
      <div className="flex items-center gap-8">
        <IoMdNotificationsOutline size={29} />
        <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
      </div>
    </div>
  );
}

export default Navbar;
