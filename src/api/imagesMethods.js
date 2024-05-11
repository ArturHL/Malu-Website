const categoryUrl = 'http://localhost:8080/categoryimg';

const productUrl = 'http://localhost:8080/productimg';

const userUrl = 'http://localhost:8080/userimg';

async function getImgByCategoryId(categoryId) {
  try {
    const response = await fetch(`${categoryUrl}/${categoryId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getImgByProductId(productId) {
  try {
    const response = await fetch(`${productUrl}/${productId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getImgByUserId(userId) {
  try {
    const response = await fetch(`${userUrl}/${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { getImgByCategoryId, getImgByProductId, getImgByUserId };