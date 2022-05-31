import React, { useContext, useEffect } from 'react';
import ProductDetail from '../../components/products/ProductDetail';
import CartContext from '../../store/cart-context';
import WishlistContext from '../../store/wishlist-context';
import Wishlist from '../../components/wishlist/Wishlist';
import Cart from '../../components/cart/Cart';

const ProductDetailPage = ({ selectedProduct, allProducts }) => {
  const { getStoredCartItems, showShoppingCart } = useContext(CartContext);
  const { getStoredWishlistItems, showWishlist } = useContext(WishlistContext);

  useEffect(() => {
    getStoredWishlistItems(allProducts);
    getStoredCartItems(allProducts);
  }, []);

  return (
    <div>
      {showShoppingCart && <Cart />}
      {showWishlist && <Wishlist />}
      <ProductDetail
        name={selectedProduct.name}
        description={selectedProduct.description}
        price={selectedProduct.price}
        id={selectedProduct.id}
        amount={selectedProduct.amount}
      />
    </div>
  );
};

export async function getStaticProps(context) {
  const productId = context.params.productId;

  async function getProducts() {
    const response = await fetch(
      'https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems'
    );
    const data = await response.json();
    const products = [];

    for (const key in data) {
      products.push({
        ...data[key],
      });
    }

    return products;
  }

  const products = await getProducts();

  const allProducts = [...products];

  const product = products.find((product) => product.id === productId);

  return {
    props: { selectedProduct: product, allProducts: allProducts },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  async function getProducts() {
    const response = await fetch(
      'https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems'
    );
    const data = await response.json();
    const products = [];

    for (const key in data) {
      products.push({
        ...data[key],
      });
    }

    return products;
  }

  const data = await getProducts();

  const ids = data.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { productId: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
    // fallback: 'blocking',
  };
}

export default ProductDetailPage;
