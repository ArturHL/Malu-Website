export default function useUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function logIn(email, password) {
    // Code to log in a user
  }

  async function signUp(email, password) {
    // Code to sign up a user
  }

  async function updateUser(user) {
    // Code to update a user
  }

  async function deleteUser(id) {
    // Code to delete a user
  }

  // Address methods //

  async function getAddressesByUserId(userId) {
    // Code to get addresses by user id
  }

  async function createAddress(address) {
    // Code to create an address
  }

  async function deleteAddress(id) {
    // Code to delete an address
  }

  // Payment methods //

  async function getPaymentsByUserId(userId) {
    // Code to get payments by user id
  }

  async function createPayment(payment) {
    // Code to create a payment
  }

  async function deletePayment(id) {
    // Code to delete a payment
  }

  // Order methods //

  async function getOrdersByUserId(userId) {
    // Code to get orders by user id
  }

  async function createOrder(order) {
    // Code to create an order
  }

  async function cancelOrder(id) {
    // Code to cancel an order
  }

  // Reserve Methods //

  async function getReservesByUserId(userId) {
    // Code to get reserves by user id
  }

  async function createReserve(reserve) {
    // Code to create a reserve
  }

  async function cancelReserve(id) {
    // Code to cancel a reserve
  }
  
}