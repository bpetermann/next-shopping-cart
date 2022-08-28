import { products } from './db-backup';

export async function getProducts() {
  // Disabled my-json-server due to loading problems

  // const response = await fetch(`${process.env.json_server}`, { method: 'GET' });
  // const data = await response.json();
  // const products = [];

  // for (const key in data) {
  //   products.push({
  //     ...data[key],
  //   });
  // }

  return products;
}
