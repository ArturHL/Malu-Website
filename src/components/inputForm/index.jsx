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
              <input className='input mail' type='text' placeholder='Correo' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'password') {
      return (<>
              <label className='label'>Contraseña</label>
              <input className='input password' type='password' placeholder='Contraseña' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'confirmPassword') {
      return (<>
              <label className='label'>Confirmar Contraseña</label>
              <input className='input passwordComfirm' type='password' placeholder='Confirmar Contraseña' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'phone') {
      return (<>
              <label className='label'>Telefono</label>
              <input className='input' type='text' placeholder='Telefono' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'name') {
      return (<>
              <label className='label'>Nombre</label>
              <input className='input' type='text' placeholder='Nombre' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'range1-20') {
      return (<>
              <label className='label'>Edad</label>
              <input className='input' type='range' min='1' max='20' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'range30-60') {
      return (<>
              <label className='label'>Edad</label>
              <input className='input' type='range' min='30' max='60' onChange={handleInputText}/>
              </>)
    } 
    if (inputType === 'date') {
      return (<>
              <label className='label'>Fecha</label>
              <input className='input' type='date' onChange={handleInputText}/>
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
