//next
import Head from 'next/head';
//components
import Layout from "../components/layout/Layout";
//styles
import "../styles/globals.css";

const MyApp = ( { Component, pageProps } ) =>
{
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component { ...pageProps } />
    </Layout>
  );

};

export default MyApp;