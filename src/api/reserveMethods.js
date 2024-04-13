const url = 'http://localhost:8080/booking';

// Function to get all reservations
async function getAllReservations() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Function to get reservations by user ID
async function getReservationsByUserId(userId) {
  try {
    const response = await fetch(`${url}/user/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Function to save a new reservation
async function saveReservation(reservation) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Function to delete a reservation by ID
async function deleteReservationById(reservationId) {
  try {
    const response = await fetch(`${url}/${reservationId}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Function to update a reservation by ID
async function updateReservationById(reservationId, updatedReservation) {
  try {
    const response = await fetch(`${url}/${reservationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedReservation)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}