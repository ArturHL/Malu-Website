import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { clients } from '../api/fakeData';
import Client from '../models/client';

export const SesionContext = createContext();

export function SesionProvider ({children}) {
  const [sesion, setSesion] = useState(sessionStorage.getItem('sesion'))
  const [user, setUser] = useState(sessionStorage.getItem('user'))
  const [errors, setErrors] = useState([])

  function login(userEmail, password) {
    clients.forEach(client => {
      console.log(client);
      if(client.email === userEmail && client.password === password) {
        console.log('loginPass');
        setSesion(true)
        setUser(client)
      }
    })
  }

  function logout() {
    setSesion(false)
    setUser({})
  }

  function isUserLogged() {
    return {sesion, user}
  }

  function loginRedirect() {
    if(!sesion) {
      window.alert('Debes iniciar sesión para continuar')
      window.location.href = '/login'
    }
  }

  function register(id, name, email, phone, password) {
    const newUser = new Client(id, name, email, phone, password)
    console.log(newUser);
  }

  function setNewError() {
    setErrors([])
    const listErrors = []
    listErrors.push('error')
    setErrors(listErrors)
    console.log(errors);
  }

  function clearErrors() {
    setErrors([])
    console.log(errors);
  }

  function isFormError() {
    if(errors.length > 0) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    sessionStorage.setItem('sesion', sesion)
    sessionStorage.setItem('user', JSON.stringify(user))
  }, [])

  return(
    <SesionContext.Provider value={{
      login,
      logout,
      isUserLogged,
      loginRedirect, 
      register, 
      setNewError,
      clearErrors,
      isFormError
    }}>
      {children}
    </SesionContext.Provider>
  )
}

SesionProvider.propTypes = {
  children: PropTypes.node.isRequired
}