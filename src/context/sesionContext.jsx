import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { clients } from '../api/fakeData';
import Client from '../models/client';

export const SesionContext = createContext();

export function SesionProvider ({children}) {
  const [sesion, setSesion] = useState(JSON.parse(sessionStorage.getItem('sesion')))
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  const [errors, setErrors] = useState([])

  function login(userEmail, password) {
    clients.forEach(client => {
      if(client.email === userEmail && client.password === password) {
        const user = client
        sessionStorage.setItem('sesion', true)
        sessionStorage.setItem('user', JSON.stringify(user))
        setSesion(true)
        setUser(user)
      }
    })
  }

  function logout() {
    sessionStorage.setItem('sesion', false)
    sessionStorage.setItem('user', JSON.stringify({}))
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
  }, [sesion, user])

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