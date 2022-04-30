// hooks
import { useSession } from "next-auth/react";

// icons
import { MdMenu } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import UserDropdown from "../UI/Heading/UserDropdown";

function Navbar({ setSidebarOpen, isAdmin }) {
  const { data: session, status } = useSession();

  const userImage = session.user.image;

  return (
    <div className="font-inter flex items-center justify-between my-3 mx-5 lg:hidden">
      <MdMenu
        size={35}
        onClick={() => setSidebarOpen(true)}
        className="hover:cursor-pointer"
      />
      <UserDropdown isAdmin={isAdmin} />
    </div>
  );
}

export default Navbar;
