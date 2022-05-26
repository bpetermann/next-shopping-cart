import ProductDetail from '../../components/products/ProductDetail';

const ProductDetailPage = ({ selectedProduct }) => {
  return (
    <div>
      <ProductDetail
        name={selectedProduct.name}
        description={selectedProduct.description}
        price={selectedProduct.price}
        id={selectedProduct.id}
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

  const product = products.find((product) => product.id === productId);

  return {
    props: { selectedProduct: product },
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
