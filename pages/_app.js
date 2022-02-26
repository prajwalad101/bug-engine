import { useState } from "react";

import "../styles/globals.css";

import Sidebar from "../components/Naviagation/Sidebar";
import Navbar from "../components/Naviagation/Navbar";

// imports for react query
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  // State for opening and closing the sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar setSidebarOpen={setSidebarOpen} />
      <div>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="lg:ml-64">
          <Component {...pageProps} />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
