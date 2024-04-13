const url = 'http://localhost:8080/paymethod';

async function getAllPayMethodsByUserId(userId) {
  try {
    const response = await fetch(`${url}/user/${userId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getAllPayMethodsByUserId };