import useUser from '../../hooks/API_Hooks/useUser';  
import { useContext, useState } from 'react';
import { SessionContext } from '../../context/sessionContext';

export default function useProfilePage() {
  const { getAddressesByUserId, deleteUserAddress, getPaymentsByUserId, deleteUserPayment, getUserImg, isLoading, addresses, payments } = useUser();
  const { logout, isUserLogged, loginRedirect } = useContext(SessionContext);
  const { sesion, user } = isUserLogged();
  const [ activeEdit, setActiveEdit ] = useState('none');

  function activeEditForm(form) {
    if (form === 'none') {
      setActiveEdit('none');
    }
    if (form === 'name') {
      setActiveEdit('name');
    }
    if (form === 'phone') {
      setActiveEdit('phone');
    }
    if (form === 'mail') {
      setActiveEdit('mail');
    }
    if (form === 'password') {
      setActiveEdit('password');
    }
  }

  return {
    logout,
    isUserLogged,
    loginRedirect,
    sesion,
    user,
    activeEdit,
    isLoading,
    addresses,
    payments,
    getUserImg,
    setActiveEdit,
    getAddressesByUserId,
    deleteUserAddress,
    getPaymentsByUserId,
    deleteUserPayment,
    activeEditForm
  }
}