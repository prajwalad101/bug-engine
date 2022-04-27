import "../styles/globals.css";

import Providers from "../components/Wrappers/Providers";
import Layout from "../components/Wrappers/Layout";
import Auth from "../components/Wrappers/Auth";
import { useRef } from "react";

function MyApp({ Component, pageProps }) {
  const admin = useRef();

  return (
    <>
      <Providers session={pageProps.session}>
        {Component.auth === false ? (
          <Component {...pageProps} />
        ) : (
          <Auth admin={admin}>
            <Layout admin={admin} isNavbar={Component.navbar}>
              <Component {...pageProps} admin={admin} />
            </Layout>
          </Auth>
        )}
      </Providers>
    </>
  );
}

export default MyApp;
