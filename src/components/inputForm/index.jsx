import './index.css'

import ErrorTicket from '../errorTicket';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import useInputForm from '../../hooks/Component_Hooks/InputForm/useInputForm';

const InputForm = ({type}) => {
  const {inputTypeSwitch, isError, textError, inputText, setInputV} = useInputForm(type)

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
