import * as MdIcons from "react-icons/md";

function Navbar({ setSidebarOpen }) {
  return (
    <div className="flex justify-start items-center my-3 ml-5 lg:hidden">
      <MdIcons.MdMenu
        size={35}
        onClick={() => setSidebarOpen(true)}
        className="hover:cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
