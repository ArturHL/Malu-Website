import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useUser from '../hooks/useUser';

export const SesionContext = createContext();

export function SesionProvider ({children}) {
  const [sesion, setSesion] = useState(JSON.parse(sessionStorage.getItem('sesion')))
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  const [errors, setErrors] = useState([])
  const {userDB, logIn, signUp} = useUser()

  async function login(userEmail, password) {
    await logIn(userEmail, password)
    if (userDB !== null) {
      sessionStorage.setItem('sesion', true)
      sessionStorage.setItem('user', JSON.stringify(userDB))
      setSesion(true)
      setUser(userDB)
      return true
    } else {
      window.alert('Usuario o contraseña incorrectos')
      return false
    }
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

  async function register(name, email, phone, password) {
    const newUser = {
      name: name,
      email: email,
      phone: phone,
      password: password
    }
    await signUp(newUser) 
    if (userDB !== null) {
      sessionStorage.setItem('sesion', true)
      sessionStorage.setItem('user', JSON.stringify(userDB))
      setSesion(true)
      setUser(userDB)
      return true
    } else {
      window.alert('Error al registrar el usuario')
      return false
    }
  }

  function setNewError() {
    setErrors([])
    const listErrors = []
    listErrors.push('error')
    setErrors(listErrors)
  }

  function clearErrors() {
    setErrors([])
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