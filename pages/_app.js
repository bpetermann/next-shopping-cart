import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/ui/layout';
import { CartContextProvider } from '../store/cart-context';
import { WishlistContextProvider } from '../store/wishlist-context';

function MyApp({ Component, pageProps }) {
  return (
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
        </Layout>
      </WishlistContextProvider>
    </CartContextProvider>
  );
}

export default MyApp;
