const url = 'https://ftojzcdpcjmmbtbhowmm.supabase.co/rest/v1/productos?';
const headers = {
  'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0b2p6Y2RwY2ptbWJ0Ymhvd21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NTE2OTEsImV4cCI6MjA1NTEyNzY5MX0.9Yj4jKLBqpRexr2zLqE5FwUH-vQig2_fMW6HOyhVuw0', // Reemplaza con tu API key de Supabase
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0b2p6Y2RwY2ptbWJ0Ymhvd21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NTE2OTEsImV4cCI6MjA1NTEyNzY5MX0.9Yj4jKLBqpRexr2zLqE5FwUH-vQig2_fMW6HOyhVuw0', // Si necesitas un token de autenticación
  'Content-Type': 'application/json' // Asegúrate de que el contenido sea JSON
};

async function getAllProducts() {
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

async function getProductById(productId) {
  try {
    const response = await fetch(`${url}id=eq.${productId}`, {
      method: 'GET',
      headers: headers
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getProductByCategoryId(categoryId) {
  try {
    const response = await fetch(`${url}categoria_id=eq.${categoryId}`, {
      method: 'GET',
      headers: headers
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
export { getAllProducts, getProductById, getProductByCategoryId };