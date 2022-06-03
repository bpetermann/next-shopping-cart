import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import { getProducts } from '../../lib/products-util';
import ProductDetail from '../../components/products/ProductDetail';
import CartContext from '../../store/cart-context';
import WishlistContext from '../../store/wishlist-context';
import dynamic from 'next/dynamic';
const Wishlist = dynamic(() =>
  import('../../components/modal/wishlist/Wishlist')
);
const Cart = dynamic(() => import('../../components/modal/cart/Cart'));

const ProductDetailPage = ({ selectedProduct, allProducts }) => {
  const { getStoredCartItems, showShoppingCart } = useContext(CartContext);
  const { getStoredWishlistItems, showWishlist } = useContext(WishlistContext);

  useEffect(() => {
    getStoredWishlistItems(allProducts);
    getStoredCartItems(allProducts);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>{selectedProduct.name}</title>
        <meta name='description' content={selectedProduct.description} />
      </Head>
      {showShoppingCart && <Cart />}
      {showWishlist && <Wishlist />}
      <ProductDetail item={selectedProduct} />
    </>
  );
};

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const products = await getProducts();

  const allProducts = [...products];

  const product = products.find((product) => product.id === productId);

  return {
    props: { selectedProduct: product, allProducts: allProducts },
  };
}

export async function getStaticPaths() {
  const data = await getProducts();

  const ids = data.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { productId: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default ProductDetailPage;
