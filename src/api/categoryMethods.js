const url = 'https://ftojzcdpcjmmbtbhowmm.supabase.co/rest/v1/categorias?';
const headers = {
  'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0b2p6Y2RwY2ptbWJ0Ymhvd21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NTE2OTEsImV4cCI6MjA1NTEyNzY5MX0.9Yj4jKLBqpRexr2zLqE5FwUH-vQig2_fMW6HOyhVuw0', // Reemplaza con tu API key de Supabase
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0b2p6Y2RwY2ptbWJ0Ymhvd21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NTE2OTEsImV4cCI6MjA1NTEyNzY5MX0.9Yj4jKLBqpRexr2zLqE5FwUH-vQig2_fMW6HOyhVuw0', // Si necesitas un token de autenticación
  'Content-Type': 'application/json' // Asegúrate de que el contenido sea JSON
};

async function getAllCategories() {
  try {
    const response = await fetch(`${url}select=*`, {
      method: 'GET',
      headers: headers
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getCategoryById(categoryId) {
  try {
    const response = await fetch(`${url}/${categoryId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getCategorybyName(categoryName) {
  try {
    const response = await fetch(`${url}/name/${categoryName}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function saveCategory(category) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function updateCategory(category) {
  try {
    const response = await fetch(`${url}/${category.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deleteCategory(categoryId) {
  try {
    const response = await fetch(`${url}/${categoryId}`, {
      method: 'DELETE',
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getAllCategories, getCategoryById, getCategorybyName, saveCategory, updateCategory, deleteCategory };