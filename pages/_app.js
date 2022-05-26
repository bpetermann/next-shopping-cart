import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/ui/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
