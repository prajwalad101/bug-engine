import { signIn } from "next-auth/react";
import { useState } from "react";

import Navbar from "../Navigation/Navbar";
import Sidebar from "../Navigation/Sidebar";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* <Navbar setSidebarOpen={setSidebarOpen} /> */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      <div className="lg:ml-[285px] side-transition">{children}</div>
    </>
  );
}

export default Layout;
