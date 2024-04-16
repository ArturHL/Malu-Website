import { useState } from 'react';
import { getUserByEmail, saveNewUser, updateUserById } from '../api/userMethods';
import { getAllAddressesByUser } from '../api/addressMethods';

export default function useUser() {
  const [userDB, setUserDB] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
    return addresses;
  }

  async function createAddress(address) {
    setIsLoading(true);
    const newAddress = await createAddress(address);
    setIsLoading(false);
    return newAddress;
  }

  async function deleteAddress(id) {
    setIsLoading(true);
    const deletedAddress = await deleteAddress(id);
    setIsLoading(false);
    return deletedAddress;
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
  
  return {
    userDB,
    isLoading,
    logIn,
    signUp,
    updateUser,
    deleteUser,
    getAddressesByUserId,
    createAddress,
    deleteAddress,
    getPaymentsByUserId,
    createPayment,
    deletePayment,
    getOrdersByUserId,
    createOrder,
    cancelOrder,
    getReservesByUserId,
    createReserve,
    cancelReserve,
  };
}