const url = 'http://localhost:8080/user';

async function getUserByEmail(email) {
  try {
    const response = await fetch(`${url}/email/${email}`);
    return response.json();
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function saveNewUser(user) {
  try {
    await fetch(`${url}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function updateUserById(userId, user) {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deleteUserById(userId) {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: 'DELETE',
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getUserByEmail, saveNewUser, updateUserById, deleteUserById };