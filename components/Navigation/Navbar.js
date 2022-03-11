// hooks
import { useSession } from "next-auth/react";

// icons
import { MdMenu } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";

function Navbar({ setSidebarOpen }) {
  const { data: session, status } = useSession();

  const userImage = session.user.image;

  return (
    <div className="flex items-center justify-between my-3 mx-5 lg:hidden">
      <MdMenu
        size={35}
        onClick={() => setSidebarOpen(true)}
        className="hover:cursor-pointer"
      />
      <div className="flex items-center gap-8">
        <IoMdNotificationsOutline size={29} />
        <div className="rounded-full overflow-y-hidden overflow-x-hidden w-[30px] h-[30px]">
          <Image src={userImage} alt="user profile" width={30} height={30} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
