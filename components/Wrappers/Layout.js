import { useState } from "react";

import Navbar from "../Navigation/Navbar";
import Sidebar from "../Navigation/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children, isAdmin, isNavbar }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        bodyClassName="font-poppins text-sm"
      />
      {isNavbar !== false && (
        <Navbar setSidebarOpen={setSidebarOpen} isAdmin={isAdmin} />
      )}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isAdmin={isAdmin}
      />
      <div className="lg:ml-[285px] side-transition">{children}</div>
    </>
  );
}

export default Layout;
