import './index.css';

import InputForm from '../inputForm';
import PropTypes from 'prop-types';
import useUser from '../../hooks/useUser';

import { MdCancelPresentation } from "react-icons/md";
import { useContext } from 'react';
import { SesionContext } from '../../context/sesionContext';

const EditForm = ({ type, activeEdit, setActiveEdit }) => {
  const { updateUserData } = useContext(SesionContext);
  const { createNewAddress, createNewPayment } = useUser();

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
      case 'address':
        return <InputForm type='addressInput'/>;
      case 'payment':
        return <InputForm type='payment'/>;
    }
  }

  async function updateUserInfo(type) {

    const user = JSON.parse(sessionStorage.getItem('user'));

    switch (type) {
      case 'name':
        user.name = document.querySelector('.name').value;
        break;
      case 'phone':
        user.phone = document.querySelector('.phone').value;
        break;
      case 'mail':
        user.email = document.querySelector('.mail').value;
        break;
      case 'password':
        user.password = document.querySelector('.password').value;
        break;
    }

    sessionStorage.setItem('user', JSON.stringify(user));

    const newUser = {
      name: user.name,
      phone: user.phone,
      email: user.email,
      password: user.password
    }

    await updateUserData(user.id, newUser);

    location.reload();
  }

  async function saveAddress() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    const address = {
      idUser: user.id,
      street: `${document.querySelector('.street').value} ${document.querySelector('.numExt').value}`,
      number: document.querySelector('.numInt').value,
      postalCode: document.querySelector('.postalCode').value,
      city: document.querySelector('.city').value,
      state: document.querySelector('.state').value
    }

    const isOk = await createNewAddress(address);

    if (isOk) {
      window.alert('Error al guardar la direccion');
      return;
    } else {
      location.reload();
    }

  }

  async function saveNewPayment() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    const payment = {
      idUser: user.id,
      type: document.querySelector('.type').value,
      number: document.querySelector('.cardNumber').value,
      expirationDate: document.querySelector('.expiration').value,
      cvv: document.querySelector('.cvv').value,
    }

   const isOk = await createNewPayment(payment);

    if (!isOk) {
      window.alert('Error al guardar el metodo de pago');
      return;
    } else {
      location.reload();
    }
  }

  async function handleSaveFunction(type) {
    document.querySelector('.editForm').addEventListener('submit', (e) => {
      e.preventDefault();
    });
    switch (type) {
      case 'address':
        await saveAddress();
        break;
      case 'payment':
        await saveNewPayment();
        break;
      default:
        await updateUserInfo(type);
        break;
    }
  }

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
