const url = 'http://localhost:8080/order';

async function getAllOrders() {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getOrderById(orderId) {
  try {
    const response = await fetch(`${url}/${orderId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getOrderByUserId(userId) {
  try {
    const response = await fetch(`${url}/user/${userId}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function saveOrder(order) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function updateStatusById(orderId, status) {
  try {
    const response = await fetch(`${url}/${orderId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getAllOrders, getOrderById, getOrderByUserId, saveOrder, updateStatusById };