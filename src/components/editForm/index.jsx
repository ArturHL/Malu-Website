import './index.css';

import InputForm from '../inputForm';
import PropTypes from 'prop-types';

import { MdCancelPresentation } from "react-icons/md";

const EditForm = ({ type, activeEdit, setActiveEdit }) => {

  function inputType (type) {
    switch (type) {
      case 'name':
        return <InputForm type='name'/>;
      case 'phone':
        return <InputForm type='phone'/>;
      case 'mail':
        return <InputForm type='mail'/>;
      case 'password':
        return <InputForm type='password'/>;
    }
  }

  return (
    <section className={`subSection backGround ${type === activeEdit ? '' : 'inactive'}`}> 
      <form className='editForm'>
        <MdCancelPresentation className='returnMenu' onClick={()=>{setActiveEdit('none')}}/>
        {inputType(type)}
        <button type="submit" className='buttonA'>Guardar</button>
      </form> 
    </section>
  );
};

EditForm.propTypes = {
  type: PropTypes.string.isRequired,
  activeEdit: PropTypes.string.isRequired,
  setActiveEdit: PropTypes.func.isRequired
};

export default EditForm;
