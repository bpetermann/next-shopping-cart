import React, { useState, useContext, useEffect } from 'react';
import Searchbar from '../../components/layout/Searchbar';
import { getProducts } from '../../lib/products-util';
import ProductsOverview from '../../components/products/ProductsOverview';
import WishlistContext from '../../store/wishlist-context';
import CartContext from '../../store/cart-context';
import dynamic from 'next/dynamic';
import Categories from '../../components/layout/Categories';
const Wishlist = dynamic(() =>
  import('../../components/modal/wishlist/Wishlist')
);
const Cart = dynamic(() => import('../../components/modal/cart/Cart'));

const HomePage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Shoes');
  const { getStoredCartItems, showShoppingCart } = useContext(CartContext);
  const { getStoredWishlistItems, showWishlist } = useContext(WishlistContext);

  useEffect(() => {
    getStoredWishlistItems(products);
    getStoredCartItems(products);
    // eslint-disable-next-line
  }, []);

  const searchTermChangeHandler = (text) => {
    setSearchTerm(text);
  };

  const selectCategoryHandler = (category) => {
    setCategory(category);
  };

  let selectedCategory = products.filter((item) => {
    return item.category.includes(category);
  });

  let filteredItems = selectedCategory.filter((item) => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      {showShoppingCart && <Cart />}
      {showWishlist && <Wishlist />}
      <Searchbar onChangeSearchTerm={searchTermChangeHandler} />
      <Categories
        selectCategory={selectCategoryHandler}
        category={category}
      />
      <ProductsOverview selectedItems={filteredItems} />
    </>
  );
};

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: { products: products },
  };
}

export default HomePage;
