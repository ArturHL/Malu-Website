const categoryUrl = 'https://ftojzcdpcjmmbtbhowmm.supabase.co/rest/v1/imagenes_categoria?';

const productUrl = 'http://localhost:8080/productimg';

const userUrl = 'http://localhost:8080/userimg';

const headers = {
  'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0b2p6Y2RwY2ptbWJ0Ymhvd21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NTE2OTEsImV4cCI6MjA1NTEyNzY5MX0.9Yj4jKLBqpRexr2zLqE5FwUH-vQig2_fMW6HOyhVuw0', // Reemplaza con tu API key de Supabase
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0b2p6Y2RwY2ptbWJ0Ymhvd21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NTE2OTEsImV4cCI6MjA1NTEyNzY5MX0.9Yj4jKLBqpRexr2zLqE5FwUH-vQig2_fMW6HOyhVuw0', // Si necesitas un token de autenticación
  'Content-Type': 'application/json' // Asegúrate de que el contenido sea JSON
};

async function getImgByCategoryId(categoryId) {
  try {
    const response = await fetch(`${categoryUrl}id_categoria=eq.${categoryId}`, {
      method: 'GET',
      headers: headers
    });
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