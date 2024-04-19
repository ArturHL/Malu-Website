import CategoryCard from '../../categoryCard';
import './index.css';

import InputForm from '../../inputForm';

const BookPage = () => {
  return (
    <>
    <h1 className='title'>Reservaciones</h1>
    <div className='reserveSection'>
      <section className='roofSection subSection'>
        <CategoryCard title='Terraza'url='https://lh3.googleusercontent.com/p/AF1QipPbX19ll654iFlOx7fFTvXIl_zcWuim03iMxzdT=s680-w680-h510'/>
        <div>
          <form action="">
            <InputForm type='name'/>
            <InputForm type='phone'/>
            <InputForm type='range30-60'/>
            <InputForm type='date'/>
            <button className='buttonA'>Reservar</button>
            <p>
              Llenar este formulario NO confirma una reservacion con los datos especificados. 
              Nosotros nos pondremos en contacto con usted para confirmar su reservacion.
            </p>
          </form>
        </div>
      </section>
      <section className='tableSection subSection'>
        <CategoryCard title='Mesas' url='https://media.istockphoto.com/id/1297364206/es/foto/elegante-servicio-de-configuraci%C3%B3n-de-mesa-de-restaurante-para-recepci%C3%B3n-con-tarjeta-reservada.jpg?s=612x612&w=0&k=20&c=TCCZrCxSs8ZtXT71ilkBRdkfIrZtttR3AO7Gz9fAoaU='/>
        <div>
          <form action="">
            <InputForm type='name'/>
            <InputForm type='phone'/>
            <InputForm type='range1-20'/>
            <InputForm type='date'/>
            <button className='buttonA'>Reservar</button>
            <p>
              Llenar este formulario SI confirma una reservacion con los datos especificados. 
              Cualquier cambio o cancelacion debe ser notificada con 24 horas de anticipacion.
            </p>
          </form>
        </div>
      </section>
    </div>
    </>
  );
};

export default BookPage;
