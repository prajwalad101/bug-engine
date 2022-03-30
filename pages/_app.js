import "../styles/globals.css";

import { useRef } from "react";
import Providers from "../components/Wrappers/Providers";
import Layout from "../components/Wrappers/Layout";
import Auth from "../components/Wrappers/Auth";

function MyApp({ Component, pageProps }) {
  const isAdmin = useRef(false);

  return (
    <Providers session={pageProps.session}>
      {Component.auth === false ? (
        <Component {...pageProps} />
      ) : (
        <Auth isAdmin={isAdmin}>
          <Layout>
            <Component {...pageProps} isAdmin={isAdmin} />
          </Layout>
        </Auth>
      )}
    </Providers>
  );
}

export default MyApp;
