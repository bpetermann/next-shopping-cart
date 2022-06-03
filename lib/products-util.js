export async function getProducts() {
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
