import CategoryCard from '../../categoryCard';
import './index.css';

const BookPage = () => {
  return (
    <>
    <h1 className='title'>Reservaciones</h1>
    <div className='reserveSection'>
      <section className='roofSection subSection'>
        <CategoryCard title='Terraza'url='https://lh3.googleusercontent.com/p/AF1QipPbX19ll654iFlOx7fFTvXIl_zcWuim03iMxzdT=s680-w680-h510'/>
        <div>
          <form action="">
            <label htmlFor="">A nombre de quien?</label>
            <input type="text" placeholder='Arturo Hernandez'/>
            <label htmlFor="">Numero de telefono</label>
            <input type="tel" placeholder='55 5555 5555'/>
            <label htmlFor="">Cuantas personas son?</label>
            <input type="number" placeholder='30 - 60'/>
            <label htmlFor="">En que fecha?</label>
            <input type="date" />
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
            <label htmlFor="">A nombre de quien?</label>
            <input type="text" placeholder='Arturo Hernandez'/>
            <label htmlFor="">Numero de telefono</label>
            <input type="tel" placeholder='55 5555 5555'/>
            <label htmlFor="">Cuantas personas son?</label>
            <input type="number" placeholder='1 - 20'/>
            <label htmlFor="">En que fecha?</label>
            <input type="date" />
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
