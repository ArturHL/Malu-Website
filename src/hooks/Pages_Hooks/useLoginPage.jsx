import { useState } from 'react';
import { useContext } from 'react';
import { SessionContext } from '../../context/sessionContext';

export default function useLoginPage() {
  const [form, setForm] = useState('login')

  const { login, isFormError, register } = useContext(SessionContext);

  async function loginUser() {
    document.querySelector(".formLogin").addEventListener("submit", function(event) {
    event.preventDefault()});
    if(isFormError()) {
      console.log('error');
      return 
    }

    const mail = document.querySelector('.mail')
    const password = document.querySelector('.password')

    const redirection = await login(mail.value, password.value)
    redirection ? location.href = '/profile' : console.log(redirection)
  }

  async function registerUser() {
    document.querySelector(".formRegister").addEventListener("submit", function(event) {
    event.preventDefault()});
    if(isFormError()) {
      console.log('error');
      return 
    }

    const name = document.querySelector('.name')
    const mail = document.querySelector('.mail')
    const phone = document.querySelector('.phone')
    const password = document.querySelector('.password')
    const confirmPassword = document.querySelector('.confirmPassword')

    if(password.value !== confirmPassword.value) {
      console.log('Las contraseñas no coinciden')
      return
    }

    const redirection = await register(name.value, mail.value, phone.value, password.value)
    redirection ? location.href = '/profile' : console.log('error')
  }

  return {
    form,
    setForm,
    loginUser,
    registerUser
  }
}