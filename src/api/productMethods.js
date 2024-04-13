const url = 'http://localhost:8080/product';

async function getAllProducts() {
  try {
    const response = await fetch(`${url}/all`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getProductById(productId) {
  try {
    const response = await fetch(`${url}/${productId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getProductByCategoryId(categoryId) {
  try {
    const response = await fetch(`${url}/category/${categoryId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getAllProducts, getProductById, getProductByCategoryId };