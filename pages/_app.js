import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
