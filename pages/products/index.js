import React, { useState } from 'react';
import Searchbar from '../../components/layout/Searchbar';
import ProductsOverview from '../../components/products/ProductsOverview';

const HomePage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTermChangeHandler = (text) => {
    setSearchTerm(text);
  };

  let filteredItems = products.filter((item) => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
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
