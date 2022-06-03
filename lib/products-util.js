export async function getProducts() {
  const response = await fetch(`${process.env.json_server}`);
  const data = await response.json();
  const products = [];

  for (const key in data) {
    products.push({
      ...data[key],
    });
  }

  return products;
}
