import "../styles/globals.css";

import Providers from "../components/Wrappers/Providers";
import Layout from "../components/Wrappers/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Providers session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
