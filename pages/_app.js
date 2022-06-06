import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/ui/Layout';
import { SessionProvider } from 'next-auth/react';
import { CartContextProvider } from '../store/cart-context';
import { WishlistContextProvider } from '../store/wishlist-context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <CartContextProvider>
        <WishlistContextProvider>
          <Layout>
            <Head>
              <title>Shopping Cart</title>
              <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
              />
            </Head>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </WishlistContextProvider>
      </CartContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
