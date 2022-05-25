import ProductsOverview from '../../components/products/ProductsOverview';

const HomePage = ({ products }) => {
  return (
    <>
      <ProductsOverview products={products} />
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
