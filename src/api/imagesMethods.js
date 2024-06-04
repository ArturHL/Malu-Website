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
    if (!response.ok) {
      return false;
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function saveNewImage(image) {
  const response = await getImgByUserId(image.idUser);
  if (!response) {
    console.log('post');
    try {
      const response = await fetch(`${userUrl}/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(image),
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      console.log('put');
      const response = await fetch(`${userUrl}/${image.idUser}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(image),
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }
}

export { getImgByCategoryId, getImgByProductId, getImgByUserId, saveNewImage };