import { useContext } from 'react';
import { SessionContext } from '../../context/sessionContext';
import useUser from '../../hooks/API_Hooks/useUser';
import InputForm from '../../components/inputForm';

export default function useEditForm(type) {
  const { updateUserData } = useContext(SessionContext);
  const { createNewImage, createNewAddress, createNewPayment, getOrdersByUserId, orders, isLoading } = useUser();

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
      case 'image':
        return <InputForm type='image'/>;
      case 'orders':
        return renderOrders();
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

  async function saveNewImage() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    const image = {
      idUser: user.id,
      url: document.querySelector('.url').value
    }

    const isOk = await createNewImage(image);

    if (!isOk) {
      window.alert('Error al guardar la imagen');
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
      case 'image':
        await saveNewImage();
        break;          
      default:
        await updateUserInfo(type);
        break;
    }
  }

  async function renderOrders() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    // useEffect(async () => {await getOrdersByUserId(user.id);}, []);
    return (
      <div className='orders'>
        {
          isLoading ? <p>Cargando...</p> : orders.map((order, index) => {
            return (
              <div className='order' key={index}>
                <p>{`Pedido #${order.id}`}</p>
                <p>{`Fecha: ${order.date}`}</p>
                <p>{`Total: $${order.total}`}</p>
                <p>{`Estado: ${order.status}`}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  return {
    inputType,
    handleSaveFunction
  }
}