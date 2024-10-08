// pages/_app.js
import Head from "next/head";
import "../src/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shaan Suthar | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
