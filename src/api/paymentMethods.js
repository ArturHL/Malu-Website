const url = 'http://localhost:8080/paymethod';

async function getAllPayMethodsByUserId(userId) {
  try {
    const response = await fetch(`${url}/userId/${userId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function createPayMethod(payMethod) {
  console.log(payMethod);
  try {
    const response = await fetch(`${url}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payMethod),
    });
    console.log(response);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deletePayMethod(payMethodId) {
  try {
    const response = await fetch(`${url}/${payMethodId}`, {
      method: 'DELETE',
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getAllPayMethodsByUserId, createPayMethod, deletePayMethod };