import Head from "next/head";
import Main from "@/components/Layouts/Main";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/next';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shariar Ayon - Wordpress and Full Stack Developer</title>
        <meta name="description" content="Default description for all pages" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Component {...pageProps} />
        <Analytics />
      </Main>
    </>
  );
}
