import './index.css';

const EventPage = () => {
  return (
    <div className='eventsContainer'>
      <h1 className='title'>Taquizas y Banquetes</h1>
      <section>
        <h2>Descripción</h2>
        <p>Aquí puedes encontrar toda la información relevante sobre nuestras taquizas y banquetes.</p>
      </section>
      <section>
        <h2>Menú</h2>
        <p>Te ofrecemos una amplia variedad de platillos para que elijas los que más te gusten.</p>
      </section>
      <section>
        <h2>Paquetes</h2>
        <p>Contamos con diferentes paquetes que se adaptan a tus necesidades y presupuesto.</p>
      </section>
      <section>
        <h2>Reservaciones</h2>
        <p>Si deseas reservar una taquiza o banquete, puedes contactarnos para más información.</p>
      </section>
    </div>
  );
};

export default EventPage;
