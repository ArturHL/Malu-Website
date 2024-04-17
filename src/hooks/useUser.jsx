import { useState } from 'react';
import { getUserByEmail, saveNewUser, updateUserById } from '../api/userMethods';
import { getAllAddressesByUser, createAddress, deleteAddress} from '../api/addressMethods';
import { getAllPayMethodsByUserId, createPayMethod, deletePayMethod } from '../api/paymentMethods';

export default function useUser() {
  const [userDB, setUserDB] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [payments, setPayments] = useState([]);

  async function logIn(email, password) {
    setIsLoading(true);
    const user = await getUserByEmail(email);
    if (user.password === password) {
      setUserDB(user);
      setIsLoading(false);
      return userDB;
    } else {
      setUserDB(null);
      setIsLoading(false);
      return userDB;
    }
  }

  async function signUp(newUser) {
    setIsLoading(true);
    const user = await saveNewUser(newUser);
    if (user) {
      setUserDB(user);
      setIsLoading(false);
      return userDB;
    } else {
      setUserDB(null);
      setIsLoading(false);
      return userDB;
    }
  }

  async function updateUser(id, user) {
    setIsLoading(true);
    const updatedUser = await updateUserById(id, user);
    if (updatedUser) {
      setUserDB(updatedUser);
      setIsLoading(false);
      return userDB;
    } else {
      setUserDB(null);
      setIsLoading(false);
      return userDB;
    }
  }

  async function deleteUser(id) {
    // Code to delete a user
  }

  // Address methods //

  async function getAddressesByUserId(userId) {
    setIsLoading(true);
    const addresses = await getAllAddressesByUser(userId);
    setAddresses(addresses);
    setIsLoading(false);
  }

  async function createNewAddress(address) {
    setIsLoading(true);
    const newAddress = await createAddress(address);
    setIsLoading(false);
    return newAddress;
  }

  async function deleteUserAddress(id) {
    setIsLoading(true);
    await deleteAddress(id);
    setAddresses(addresses.filter((address) => address.id !== id));
    setIsLoading(false);
  }

  // Payment methods //

  async function getPaymentsByUserId(userId) {
    setIsLoading(true);
    const payments = await getAllPayMethodsByUserId(userId);
    setPayments(payments);
    setIsLoading(false);
  }

  async function createNewPayment(payment) {
    setIsLoading(true);
    const newPayment = await createPayMethod(payment);
    setIsLoading(false);
    return newPayment;
  }

  async function deleteUserPayment(id) {
    setIsLoading(true);
    await deletePayMethod(id);
    setPayments(payments.filter((payment) => payment.id !== id));
    setIsLoading(false);
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
  
  return {
    userDB,
    isLoading,
    addresses,
    payments,
    logIn,
    signUp,
    updateUser,
    deleteUser,
    getAddressesByUserId,
    createNewAddress,
    deleteUserAddress,
    getPaymentsByUserId,
    createNewPayment,
    deleteUserPayment,
    getOrdersByUserId,
    createOrder,
    cancelOrder,
    getReservesByUserId,
    createReserve,
    cancelReserve,
  };
}