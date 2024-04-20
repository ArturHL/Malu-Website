import './index.css';

import PropTypes from 'prop-types';
import { MdCancelPresentation } from "react-icons/md";
import useEditForm from '../../hooks/Component_Hooks/useEditForm';

const EditForm = ({ type, activeEdit, setActiveEdit }) => {
  const { inputType, handleSaveFunction } = useEditForm(type);

  return (
    <section className={`subSection backGround ${type === activeEdit ? '' : 'inactive'}`}> 
      <form className='editForm'>
        <MdCancelPresentation className='returnMenu' onClick={()=>{setActiveEdit('none')}}/>
        {inputType(type)}
        <button type="submit" className='buttonA' onClick={()=>{handleSaveFunction(type)}}>Guardar</button>
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
