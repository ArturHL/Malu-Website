import useUser from '../../hooks/API_Hooks/useUser';  
import { useContext, useState } from 'react';
import { SesionContext } from '../../context/sesionContext';

export default function useProfilePage() {
  const { getAddressesByUserId, deleteUserAddress, getPaymentsByUserId, deleteUserPayment, isLoading, addresses, payments } = useUser();
  const { logout, isUserLogged, loginRedirect } = useContext(SesionContext);
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
    setActiveEdit,
    getAddressesByUserId,
    deleteUserAddress,
    getPaymentsByUserId,
    deleteUserPayment,
    activeEditForm
  }
}