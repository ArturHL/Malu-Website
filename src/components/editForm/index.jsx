import './index.css';

import InputForm from '../inputForm';
import PropTypes from 'prop-types';
import useUser from '../../hooks/useUser';

import { MdCancelPresentation } from "react-icons/md";
import { useContext } from 'react';
import { SesionContext } from '../../context/sesionContext';

const EditForm = ({ type, activeEdit, setActiveEdit }) => {
  const { updateUserData } = useContext(SesionContext);

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

  async function update(type) {
    document.querySelector('.editForm').addEventListener('submit', (e) => {
      e.preventDefault();
    });

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

  async function saveNewAddress() {
    // const user = JSON.parse(sessionStorage.getItem('user'));
    // const address = document.querySelector('.addressInput').value;

    // user.address.push(address);

    // sessionStorage.setItem('user', JSON.stringify(user));

    // const newUser = {
    //   address: user.address
    // }

    // await updateUserData(user.id, newUser);

    // location.reload();
  }

  async function saveNewPayment() {
    // const user = JSON.parse(sessionStorage.getItem('user'));
    // const payment = document.querySelector('.paymentInput').value;

    // user.payMethods.push(payment);

    // sessionStorage.setItem('user', JSON.stringify(user));

    // const newUser = {
    //   payMethods: user.payMethods
    // }

    // await updateUserData(user.id, newUser);

    // location.reload();
  }

  return (
    <section className={`subSection backGround ${type === activeEdit ? '' : 'inactive'}`}> 
      <form className='editForm'>
        <MdCancelPresentation className='returnMenu' onClick={()=>{setActiveEdit('none')}}/>
        {inputType(type)}
        <button type="submit" className='buttonA' onClick={()=>{update(type)}}>Guardar</button>
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
