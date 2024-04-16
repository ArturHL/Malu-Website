import './index.css'

import ErrorTicket from '../errorTicket';
import { useEffect, useState } from 'react';
import useValidateInput from '../../hooks/useValidateInput';

import PropTypes from 'prop-types';

const InputForm = ({type}) => {
  const [inputType, setInputType] = useState(type)
  const [inputText, setInputText] = useState('')
  const { isError, textError, setInputV, setIsUsed } = useValidateInput(inputText, inputType)

  function handleInputText(e) {
    setInputText(e.target.value)
    if (inputText !== '') {setIsUsed(true)}
  }

  function inputTypeSwitch() {
    if (inputType === 'mail') {
      return  (<>
              <label className='label'>Correo</label>
              <input className='input mail' type='text' placeholder='email@example.com' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'password') {
      return (<>
              <label className='label'>Contraseña</label>
              <input className='input password' type='password' placeholder='********' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'confirmPassword') {
      return (<>
              <label className='label'>Confirmar Contraseña</label>
              <input className='input confirmPassword' type='password' placeholder='********' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'phone') {
      return (<>
              <label className='label'>Telefono</label>
              <input className='input phone' type='text' placeholder='55 1234 5678' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'name') {
      return (<>
              <label className='label'>Nombre</label>
              <input className='input name' type='text' placeholder='Arturo Hernandez' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'range1-20') {
      return (<>
              <label className='label'>Cuantas personas?</label>
              <input className='input range1' type='text' placeholder='1 - 20' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'range30-60') {
      return (<>
              <label className='label'>Cuantas personas?</label>
              <input className='input range2' type='text' placeholder='30 - 60'onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'date') {
      return (<>
              <label className='label'>Fecha</label>
              <input className='input date' type='date' onChange={handleInputText}/>
              </>)
    }
    if (inputType === 'code') {
      return (<>
              <label className='label'>Codigo de Regalo</label>
              <input className='input code' type='text' placeholder='Codigo de Regalo' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'addressInput') {
      return (<>
              <label className='label'>Calle</label>
              <input className='input addressInput' type='text' placeholder='Av. Universidad' onChange={handleInputText}/>
              <label className='label'>Numero Ext.</label>
              <input className='input addressInput' type='text' placeholder='1555' onChange={handleInputText}/>
              <label className='label'>Numero Int.</label>
              <input className='input addressInput' type='text' placeholder='1' onChange={handleInputText}/>
              <label className='label'>Codigo Postal</label>
              <input className='input addressInput' type='text' placeholder='12345' onChange={handleInputText}/>
              <label className='label'>Ciudad</label>
              <input className='input addressInput' type='text' placeholder='Ciudad de Mexico' onChange={handleInputText}/>
              <label className='label'>Estado</label>
              <input className='input addressInput' type='text' placeholder='CDMX' onChange={handleInputText}/>
              </>)
    }
    if (inputType === 'payment') {
      return (<>
              <label className='label'>Numero de Tarjeta</label>
              <input className='input card' type='text' placeholder='**** **** **** 1234' onChange={handleInputText}/>
              <label className='label'>Fecha de Expiracion</label>
              <input className='input card' type='text' placeholder='MM/AA' onChange={handleInputText}/>
              <label className='label'>Codigo de Seguridad</label>
              <input className='input card' type='text' placeholder='123' onChange={handleInputText}/>
              <label className='label'>Tipo</label>
              <input className='input card' type='text' placeholder='Visa / Mastercard / AMEX' onChange={handleInputText}/>
              </>)
    }
  }

  useEffect(() => {setInputV(inputText)}, [inputText])
  return (
    <>
      {inputTypeSwitch()}
      <ErrorTicket isError={isError} textError={textError}/>
    </>
  );
};

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
}

export default InputForm;
