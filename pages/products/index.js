import React, { useState, useContext, useEffect } from 'react';
import Searchbar from '../../components/layout/Searchbar';
import ProductsOverview from '../../components/products/ProductsOverview';
import WishlistContext from '../../store/wishlist-context';
import CartContext from '../../store/cart-context';
import Wishlist from '../../components/wishlist/Wishlist';
import Cart from '../../components/cart/Cart';

const HomePage = ({ products }) => {
  const { getStoredCartItems, showShoppingCart } = useContext(CartContext);
  const { getStoredWishlistItems, showWishlist } = useContext(WishlistContext);

  useEffect(() => {
    getStoredWishlistItems(products);
    getStoredCartItems(products);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const searchTermChangeHandler = (text) => {
    setSearchTerm(text);
  };

  let filteredItems = products.filter((item) => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      {showShoppingCart && <Cart />}
      {showWishlist && <Wishlist />}
      <Searchbar onChangeSearchTerm={searchTermChangeHandler} />
      <ProductsOverview selectedItems={filteredItems} />
    </>
  );
};

export async function getStaticProps() {
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

  return {
    props: { products: products },
    revalidate: 1800,
  };
}

export default HomePage;
