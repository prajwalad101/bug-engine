import "../styles/globals.css";

import Providers from "../components/Wrappers/Providers";
import Layout from "../components/Wrappers/Layout";
import Auth from "../components/Wrappers/Auth";

function MyApp({ Component, pageProps }) {
  return (
    <Providers session={pageProps.session}>
      <Layout>
        {Component.auth === false ? (
          <Component {...pageProps} />
        ) : (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        )}
      </Layout>
    </Providers>
  );
}

export default MyApp;
