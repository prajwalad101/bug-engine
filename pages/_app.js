import "../styles/globals.css";

import { useState } from "react";
import Providers from "../components/Wrappers/Providers";
import Layout from "../components/Wrappers/Layout";
import Auth from "../components/Wrappers/Auth";

function MyApp({ Component, pageProps }) {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Providers session={pageProps.session}>
      {Component.auth === false ? (
        <Component {...pageProps} />
      ) : (
        <Auth setIsAdmin={setIsAdmin}>
          <Layout isAdmin={isAdmin}>
            <Component {...pageProps} isAdmin={isAdmin} />
          </Layout>
        </Auth>
      )}
    </Providers>
  );
}

export default MyApp;
