import { createContext, useState, useEffect } from 'react';

import PropTypes from 'prop-types';

export const ErrorContext = createContext();

export function ErrorProvider({ children }) {

  const loginInitial = {
    mail: {
      value: '',
      invalid: false,
      message: '',
    },
    password: {
      value: '',
      invalid: false,
      message: '',
    },
  };
  const [loginErrors, setLoginErrors] = useState(loginInitial);
  const registerInitial = {
    name: {
      value: '',
      invalid: false,
      message: '',
    },
    mail: {
      value: '',
      invalid: false,
      message: '',
    },
    phone: {
      value: '',
      invalid: false,
      message: '',
    },
    password: {
      value: '',
      invalid: false,
      message: '',
    },
    confirmPassword: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [registerErrors, setRegisterErrors] = useState(registerInitial);
  const reserveTerraceInitial = {
    range30: {
      value: '',
      invalid: false,
      message: '',
    },
    date: {
      value: '',
      invalid: false,
      message: '',
    },
    time: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [reserveTerraceErrors, setReserveTerraceErrors] = useState(reserveTerraceInitial);
  const reserveTableInitial = {
    range1: {
      value: '',
      invalid: false,
      message: '',
    },
    date: {
      value: '',
      invalid: false,
      message: '',
    },
    time: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [reserveTableErrors, setReserveTableErrors] = useState(reserveTableInitial);
  const imageInitial = {
    image: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [imageErrors, setImageErrors] = useState(imageInitial);
  const nameInitial = {
    name: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [nameErrors, setNameErrors] = useState(nameInitial);
  const phoneInitial = {
    phone: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [phoneErrors, setPhoneErrors] = useState(phoneInitial);
  const mailInitial = {
    mail: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [mailErrors, setMailErrors] = useState(mailInitial);
  const passwordInitial = {
    password: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [passwordErrors, setPasswordErrors] = useState(passwordInitial);
  const addressInitial = {
    street: {
      value: '',
      invalid: false,
      message: '',
    },
    numExt: {
      value: '',
      invalid: false,
      message: '',
    },
    numInt: {
      value: '',
      invalid: false,
      message: '',
    },
    postalCode: {
      value: '',
      invalid: false,
      message: '',
    },
    city: {
      value: '',
      invalid: false,
      message: '',
    },
    state: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [addressErrors, setAddressErrors] = useState(addressInitial);
  const paymentInitial = {
    type: {
      value: '',
      invalid: false,
      message: '',
    },
    cardNumber: {
      value: '',
      invalid: false,
      message: '',
    },
    expiration: {
      value: '',
      invalid: false,
      message: '',
    },
    cvv: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [paymentErrors, setPaymentErrors] = useState(paymentInitial);

  function updateValueInput (inputValue, inputName, form) {
    if (form === 'login') {
      const newLoginErrors = { ...loginErrors };
      newLoginErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newLoginErrors[inputName].invalid = validation.invalid;
      newLoginErrors[inputName].message = validation.message;
      setLoginErrors(newLoginErrors);
    }
    if (form === 'register') {
      const newRegisterErrors = { ...registerErrors };
      newRegisterErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newRegisterErrors[inputName].invalid = validation.invalid;
      newRegisterErrors[inputName].message = validation.message;
      setRegisterErrors(newRegisterErrors);
    }
    if (form === 'reserveTerrace') {
      const newReserveTerraceErrors = { ...reserveTerraceErrors };
      newReserveTerraceErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newReserveTerraceErrors[inputName].invalid = validation.invalid;
      newReserveTerraceErrors[inputName].message = validation.message;
      setReserveTerraceErrors(newReserveTerraceErrors);
    }
    if (form === 'reserveTable') {
      const newReserveTableErrors = { ...reserveTableErrors };
      newReserveTableErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newReserveTableErrors[inputName].invalid = validation.invalid;
      newReserveTableErrors[inputName].message = validation.message;
      setReserveTableErrors(newReserveTableErrors);
    }
    if (form === 'image') {
      const newImageErrors = { ...imageErrors };
      newImageErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newImageErrors[inputName].invalid = validation.invalid;
      newImageErrors[inputName].message = validation.message;
      setImageErrors(newImageErrors);
    }
    if (form === 'name') {
      const newNameErrors = { ...nameErrors };
      newNameErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newNameErrors[inputName].invalid = validation.invalid;
      newNameErrors[inputName].message = validation.message;
      setNameErrors(newNameErrors);
    }
    if (form === 'phone') {
      const newPhoneErrors = { ...phoneErrors };
      newPhoneErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newPhoneErrors[inputName].invalid = validation.invalid;
      newPhoneErrors[inputName].message = validation.message;
      setPhoneErrors(newPhoneErrors);
    }
    if (form === 'mail') {
      const newMailErrors = { ...mailErrors };
      newMailErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newMailErrors[inputName].invalid = validation.invalid;
      newMailErrors[inputName].message = validation.message;
      setMailErrors(newMailErrors);
    }
    if (form === 'password') {
      const newPasswordErrors = { ...passwordErrors };
      newPasswordErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newPasswordErrors[inputName].invalid = validation.invalid;
      newPasswordErrors[inputName].message = validation.message;
      setPasswordErrors(newPasswordErrors);
    }
    if (form === 'address') {
      const newAddressErrors = { ...addressErrors };
      newAddressErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newAddressErrors[inputName].invalid = validation.invalid;
      newAddressErrors[inputName].message = validation.message;
      setAddressErrors(newAddressErrors);
    }
    if (form === 'payment') {
      const newPaymentErrors = { ...paymentErrors };
      newPaymentErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newPaymentErrors[inputName].invalid = validation.invalid;
      newPaymentErrors[inputName].message = validation.message;
      setPaymentErrors(newPaymentErrors);
    }
    // agregar los demas forms
  }

  function getInfoError (inputName, form) {
    if (form === 'login') {
      return loginErrors[inputName];
    }
    if (form === 'register') {
      return registerErrors[inputName];
    }
    if (form === 'reserveTerrace') {
      return reserveTerraceErrors[inputName];
    }
    if (form === 'reserveTable') {
      return reserveTableErrors[inputName];
    }
    if (form === 'image') {
      return imageErrors[inputName];
    }
    if (form === 'name') {
      return nameErrors[inputName];
    }
    if (form === 'phone') {
      return phoneErrors[inputName];
    }
    if (form === 'mail') {
      return mailErrors[inputName];
    }
    if (form === 'password') {
      return passwordErrors[inputName];
    }
    if (form === 'address') {
      return addressErrors[inputName];
    }
    if (form === 'payment') {
      return paymentErrors[inputName];
    }
    // agregar los demas forms
  }

  function isFormError (form) {
    if (form === 'login') {
      updateValueInput(loginErrors.mail.value, 'mail', form);
      updateValueInput(loginErrors.password.value, 'password', form);
      return validateForm(loginErrors);
    }
    if (form === 'register') {
      updateValueInput(registerErrors.name.value, 'name', form);
      updateValueInput(registerErrors.mail.value, 'mail', form);
      updateValueInput(registerErrors.phone.value, 'phone', form);
      updateValueInput(registerErrors.password.value, 'password', form);
      updateValueInput(registerErrors.confirmPassword.value, 'confirmPassword', form);
      return validateForm(registerErrors);
    }
    if (form === 'reserveTerrace') {
      updateValueInput(reserveTerraceErrors.range30.value, 'range30', form);
      updateValueInput(reserveTerraceErrors.date.value, 'date', form);
      updateValueInput(reserveTerraceErrors.time.value, 'time', form);
      return validateForm(reserveTerraceErrors);
    }
    if (form === 'reserveTable') {
      updateValueInput(reserveTableErrors.range1.value, 'range1', form);
      updateValueInput(reserveTableErrors.date.value, 'date', form);
      updateValueInput(reserveTableErrors.time.value, 'time', form);
      return validateForm(reserveTableErrors);
    }
    if (form === 'image') {
      updateValueInput(imageErrors.image.value, 'image', form);
      return validateForm(imageErrors);
    }
    if (form === 'name') {
      updateValueInput(nameErrors.name.value, 'name', form);
      return validateForm(nameErrors);
    }
    if (form === 'phone') {
      updateValueInput(phoneErrors.phone.value, 'phone', form);
      return validateForm(phoneErrors);
    }
    if (form === 'mail') {
      updateValueInput(mailErrors.mail.value, 'mail', form);
      return validateForm(mailErrors);
    }
    if (form === 'password') {
      updateValueInput(passwordErrors.password.value, 'password', form);
      return validateForm(passwordErrors);
    }
    if (form === 'address') {
      updateValueInput(addressErrors.street.value, 'street', form);
      updateValueInput(addressErrors.numExt.value, 'numExt', form);
      updateValueInput(addressErrors.numInt.value, 'numInt', form);
      updateValueInput(addressErrors.postalCode.value, 'postalCode', form);
      updateValueInput(addressErrors.city.value, 'city', form);
      updateValueInput(addressErrors.state.value, 'state', form);
      return validateForm(addressErrors);
    }
    if (form === 'payment') {
      updateValueInput(paymentErrors.type.value, 'type', form);
      updateValueInput(paymentErrors.cardNumber.value, 'cardNumber', form);
      updateValueInput(paymentErrors.expiration.value, 'expiration', form);
      updateValueInput(paymentErrors.cvv.value, 'cvv', form);
      return validateForm(paymentErrors);
    }
    // agregar los demas forms
  }

  function validateForm (form) {
    return Object.values(form).some((input) => input.invalid);
  }

  function validateInput(inputValue, validationType) {
    if (inputValue === '') {
      return { invalid: true, message: 'Este campo no puede estar vacio' }
    } 
    if (/<\/?[a-z][\s\S]*>/i.test(inputValue)) {
      return { invalid: true, message: 'El valor no puede contener etiquetas HTML' }
    }
    if (validationType === 'mail') {
      if (!/\S+@\S+\.\S+/.test(inputValue)){
        return { invalid: true, message: 'Correo invalido' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'password') {
      if (inputValue.length < 8) {
        return { invalid: true, message: 'La contraseña debe tener al menos 8 caracteres' }
      } else if (!/[a-z]/.test(inputValue)) {
        return { invalid: true, message: 'La contraseña debe tener al menos una letra minúscula' }
      } else if (!/[A-Z]/.test(inputValue)) {
        return { invalid: true, message: 'La contraseña debe tener al menos una letra mayúscula' }
      } else if (!/[0-9]/.test(inputValue)) {
        return { invalid: true, message: 'La contraseña debe tener al menos un número' }
      } else if (!/[!@#$%^&*(),.?":{}|]/.test(inputValue)) {
        return { invalid: true, message: 'La contraseña debe tener al menos un caracter especial (!@#$%^&*(),.?":{}|)' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    // Esta quiza tenemos que moverla a una funcion aparte
    if (validationType === 'confirmPassword') {
      if (inputValue !== registerErrors.password.value) {
        return { invalid: true, message: 'Las contraseñas no coinciden' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'phone') {
      if (inputValue.length < 10) {
        return { invalid: true, message: 'El telefono debe tener al menos 10 digitos' }
      } else if (!/[0-9]/.test(inputValue)) {
        return { invalid: true, message: 'El telefono solo puede contener numeros' }
      } else if (!/^[0-9]+$/.test(inputValue)) {
        return { invalid: true, message: 'El telefono solo puede contener numeros' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'name') {
      if (inputValue.length < 3) {
        return { invalid: true, message: 'El nombre debe tener al menos 3 caracteres' }
      } else if (!/^[a-zA-Z ]+$/.test(inputValue)) {
        return { invalid: true, message: 'El nombre solo puede contener letras' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'range1') {
      if (inputValue < 1 || inputValue > 20) {
        return { invalid: true, message: 'El rango debe ser de 1 a 20' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'range30') {
      if (inputValue < 30 || inputValue > 60) {
        return { invalid: true, message: 'El rango debe ser de 30 a 60' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'street') {
      if (inputValue.length < 3) {
        return { invalid: true, message: 'La calle debe tener al menos 3 caracteres' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'postalCode') {
      if (inputValue.length < 5) {
        return { invalid: true, message: 'El codigo postal debe tener al menos 5 caracteres' }
      } else if (!/^[0-9]+$/.test(inputValue)) {
        return { invalid: true, message: 'El codigo postal solo puede contener numeros' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'city') {
      if (inputValue.length < 3) {
        return { invalid: true, message: 'La ciudad debe tener al menos 3 caracteres' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'state') {
      if (inputValue.length < 3) {
        return { invalid: true, message: 'El estado debe tener al menos 3 caracteres' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'type') {
      if (inputValue.length < 4) {
        return { invalid: true, message: 'El tipo de tarjeta debe tener al menos 4 caracteres' }
      } else if (!/^[a-zA-Z ]+$/.test(inputValue)) {
        return { invalid: true, message: 'El tipo de tarjeta solo puede contener letras' }
      } else if (inputValue !== 'Visa' && inputValue !== 'Mastercard' && inputValue !== 'AMEX') {
        return { invalid: true, message: `El tipo de tarjeta solo puede ser Visa, Mastercard o AMEX` }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'cardNumber') {
      if (inputValue.length < 16) {
        return { invalid: true, message: 'El numero de tarjeta debe tener al menos 16 caracteres' }
      } else if (!/^[0-9]+$/.test(inputValue)) {
        return { invalid: true, message: 'El numero de tarjeta solo puede contener numeros' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'cvv') {
      if (inputValue.length < 3) {
        return { invalid: true, message: 'El cvv debe tener al menos 3 caracteres' }
      } else if (inputValue.length > 4) {
        return { invalid: true, message: 'El cvv no puede tener mas de 4 caracteres' }
      } else if (!/^[0-9]+$/.test(inputValue)) {
        return { invalid: true, message: 'El cvv solo puede contener numeros' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    return { invalid: false, message: '' }
  }

  return (
    <ErrorContext.Provider value={{ 
      updateValueInput,
      getInfoError,
      isFormError,
      }}>
      {children}
    </ErrorContext.Provider>
  );
}

ErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};