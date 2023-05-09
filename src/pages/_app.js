import { DefaultSeo } from "next-seo";
import { Layout } from "../components";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SEO } from "../../seo/next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
