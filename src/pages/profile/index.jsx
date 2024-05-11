import './index.css';

import { useEffect } from 'react';
import EditForm from '../../components/editForm';
import useProfilePage from '../../hooks/Pages_Hooks/useProfilePage';

const ProfilePage = () => {
  const { logout,
    loginRedirect,
    sesion,
    user,
    activeEdit,
    isLoading,
    addresses,
    payments,
    setActiveEdit,
    getAddressesByUserId,
    deleteUserAddress,
    getPaymentsByUserId,
    deleteUserPayment,
    activeEditForm } = useProfilePage();

  useEffect(() => {getAddressesByUserId(user.id); getPaymentsByUserId(user.id)}, [])

  return (
    <>
      {sesion ? (
        <section className='profileSection'>
          <div className="section profile-card">
            <img src={user.img} alt="Profile Picture"/>
            <h2>{user.name} <label className='labelEdit' onClick={()=>{activeEditForm('name')}}>Editar</label></h2>
            <EditForm type='name' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
          </div>

          <div className="section dataSection">
            <h3>Datos De la Cuenta</h3>
            <p>Telefono: {user.phone} <label className='labelEdit' onClick={()=>{activeEditForm('phone')}}>Editar</label></p>
            <EditForm type='phone' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
            <p>Correo: {user.email} <label className='labelEdit' onClick={()=>{activeEditForm('mail')}}>Editar</label></p>
            <EditForm type='mail' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
            <p>Contraseña: ******** <label className='labelEdit' onClick={()=>{activeEditForm('password')}}>Editar</label></p>
            <EditForm type='password' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
          </div>

          <div className="section">
            <button className='buttonB'>Ver Historial de Pedidos</button>
            {/* Infinite loop */}
            {/* <EditForm type='orders' activeEdit={activeEdit} setActiveEdit={setActiveEdit}/> */}
            <button className='buttonA'><a href="/menu">Realizar Nuevo Pedido</a></button>
          </div>

          <div className="section">
            <h3>Direcciones de Envio</h3>
            <div className='delivery-address'>
              {
                isLoading ? <p>Cargando...</p> : addresses.map((address, index) => {
                  return (
                    <div className='address' key={index}>
                      <p>{`${address.street} Int. ${address.number}`}</p> <button className='buttonB' onClick={()=>{deleteUserAddress(address.id)}}>Eliminar</button>
                    </div>
                  )
                })
              }
            </div>
            <button className='buttonA' onClick={(e)=>{e.preventDefault(); setActiveEdit('address')}}>Agregar Direccion de Envio</button>
            <EditForm type='address' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
          </div>

          <div className="section">
            <h3>Métodos de Pago</h3>
            <div className="payment-methods">
              {
                isLoading ? <p>Cargando...</p> : payments.map((payMethod, index) => {
                  return (
                    <div className="payment-method" key={index}>
                      <img src={payMethod.type == 'visa' ? 'https://cdn.freebiesupply.com/logos/large/2x/visa-5-logo-svg-vector.svg' : 
                                payMethod.type == 'mastercard' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png' : 
                                'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg'} alt="Credit Card" />
                      <p>**** **** **** {payMethod.number.slice(-4)}</p>
                      <button className='buttonB' onClick={()=>{deleteUserPayment(payMethod.id)}}>Eliminar</button>
                    </div>
                  )
                })
              }
            </div>
            <button className='buttonA' onClick={(e)=>{e.preventDefault(); setActiveEdit('payment')}}>Agregar Método de Pago</button>
            <EditForm type='payment' activeEdit={activeEdit} setActiveEdit={setActiveEdit} />
          </div>

          <div className="section">
            <button className='buttonB'>Pedir Ayuda</button>
            <button className='buttonA' onClick={logout}>Cerrar Sesión</button>
          </div>
        </section>
      ) : loginRedirect()}
    </>
  );
};

export default ProfilePage;
