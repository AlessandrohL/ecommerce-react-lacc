import products from '../utils/products.json';

export const getProductById = (id) => {
  const productIndex = products.findIndex(pr => pr.product_id === id);
  
  return products[productIndex]
}
