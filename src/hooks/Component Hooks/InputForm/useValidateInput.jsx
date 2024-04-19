import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { SesionContext } from '../../../context/sesionContext';

function useValidateInput(inputValue, validationType) {
  const [inputV , setInputV] = useState(inputValue)
  const [isUsed, setIsUsed] = useState(false)
  const [isError, setIsError] = useState(false)
  const [textError, setTextError] = useState('')
  const { setNewError, clearErrors } = useContext(SesionContext)

  function validateInput(inputValue, validationType) {
    if(inputValue === '') {
      setIsError(true)
      setNewError()
      setTextError('No puede estar vacio')
      return
    } 
    if (validationType === 'mail') {
      if (!/\S+@\S+\.\S+/.test(inputValue)){
        setIsError(true)
        setNewError()
        setTextError('No es un correo valido')
      } else {
        setIsError(false)
        clearErrors()
        setTextError('')
      }
    }
    if (validationType === 'password') {
      if (inputValue.length < 8) {
        setIsError(true)
        setNewError()
        setTextError('La contraseña debe tener al menos 8 caracteres')
      } else if (!/[a-z]/.test(inputValue)) {
        setIsError(true)
        setNewError()
        setTextError('La contraseña debe tener al menos una letra minuscula')
      } else if (!/[A-Z]/.test(inputValue)) {
        setIsError(true)
        setNewError()
        setTextError('La contraseña debe tener al menos una letra mayuscula')
      } else if (!/[0-9]/.test(inputValue)) {
        setIsError(true)
        setNewError()
        setTextError('La contraseña debe tener al menos un numero')
      } else if (!/[!@#$%^&*;'/.]/.test(inputValue)) {
        setIsError(true)
        setNewError()
        setTextError('La contraseña debe tener al menos un caracter especial (! @ # $ % ^ & * ; / . - _)')
      } else { 
        setIsError(false)
        clearErrors()
        setTextError('')
      }
    }
    if (validationType === 'confirmPassword') {
      const password = document.querySelector('.password').value
      if (inputValue !== password) {
        setIsError(true)
        setNewError()
        setTextError('Las contraseñas no coinciden')
      } else {
        setIsError(false)
        clearErrors()
        setTextError('')
      }
    }
    if (validationType === 'phone') {
      if (inputValue.length < 10) {
        setIsError(true)
        setNewError()
        setTextError('El numero debe tener al menos 10 digitos')
      } else if (!/[0-9]/.test(inputValue)) {
        setIsError(true)
        setNewError()
        setTextError('El numero solo puede contener numeros')
      } else {
        setIsError(false)
        clearErrors()
        setTextError('')
      }
    }
    if (validationType === 'name') {
      if (inputValue.length < 3) {
        setIsError(true)
        setNewError()
        setTextError('El nombre debe tener al menos 3 caracteres')
      } else if (!/[a-z]/.test(inputValue)) {
        setIsError(true)
        setNewError()
        setTextError('El nombre solo puede contener letras')
      } else {
        setIsError(false)
        clearErrors()
        setTextError('')
      }
    }
    if (validationType === 'range1-20') {
      if (inputValue < 1 || inputValue > 20) {
        setIsError(true)
        setNewError()
        setTextError('El numero debe estar entre 1 y 20')
      } else {
        setIsError(false)
        clearErrors()
        setTextError('')
      }
    }
    if (validationType === 'range30-60'){
      if (inputValue < 30 || inputValue > 60) {
        setIsError(true)
        setNewError()
        setTextError('El numero debe estar entre 30 y 60')
      } else {
        setIsError(false)
        clearErrors()
        setTextError('')
      }
    }
    if (validationType === 'date') {
      if (inputValue === '') {
        setIsError(true)
        setNewError()
        setTextError('Debes seleccionar una fecha')
      } else {
        setIsError(false)
        clearErrors()
        setTextError('')
      }
    }
  }
  
  useEffect(() => {
    if (isUsed) {
      validateInput(inputV, validationType)
    } else {
      return
    }
  }, [inputV])

  return { isError, textError, setInputV, setIsUsed }
}

export default useValidateInput;