import './index.css';

import { useContext, useEffect, useState } from 'react';
import { SesionContext } from '../../../context/sesionContext';
import EditForm from '../../editForm';
import useUser from '../../../hooks/useUser';  

const ProfilePage = () => {
  const { logout, isUserLogged, loginRedirect } = useContext(SesionContext);
  const { sesion, user } = isUserLogged();
  const [ activeEdit, setActiveEdit ] = useState('none');
  const { getAddressesByUserId, deleteUserAddress, getPaymentsByUserId, deleteUserPayment, isLoading, addresses, payments } = useUser();

  function activeEditForm(form) {
    if (form === 'none') {
      setActiveEdit('none');
    }
    if (form === 'name') {
      setActiveEdit('name');
    }
    if (form === 'phone') {
      setActiveEdit('phone');
    }
    if (form === 'mail') {
      setActiveEdit('mail');
    }
    if (form === 'password') {
      setActiveEdit('password');
    }
  }

  useEffect(() => {getAddressesByUserId(user.id); getPaymentsByUserId(user.id)}, [])

  return (
    <>
      {sesion ? (
        <section className='profileSection'>
          <div className="section profile-card">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC" alt="Profile Picture" />
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
              {/* {user.payMethods.map((index, payMethod) => {
                console.log(index, payMethod);
                return (
                  <div className="payment-method" key={index}>
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/visa-5-logo-svg-vector.svg" alt="Credit Card" />
                    <p>**** **** **** 1234</p>
                    <button className='buttonB'>Eliminar</button>
                  </div>
                )
              })} */}
              {/* <div className="payment-method">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/visa-5-logo-svg-vector.svg" alt="Credit Card" />
                <p>**** **** **** 1234</p>
                <button className='buttonB'>Eliminar</button>
              </div> */}
              {
                isLoading ? <p>Cargando...</p> : payments.map((payMethod, index) => {
                  return (
                    <div className="payment-method" key={index}>
                      <img src="https://cdn.freebiesupply.com/logos/large/2x/visa-5-logo-svg-vector.svg" alt="Credit Card" />
                      <p>**** **** **** {payMethod.number}</p>
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
