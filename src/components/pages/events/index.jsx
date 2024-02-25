import CategoryCard from '../../categoryCard';
import WhatsAppBtn from '../../whatsAppBtn';
import './index.css';

const EventPage = () => {
  return (
    <div className='eventsContainer'>
      <h1 className='title'>Taquizas y Banquetes</h1>
      <CategoryCard click={false} title='Cazuelas de Guisados' url='https://www.taquizascancun.com/wp-content/uploads/2020/12/cazuelas-de-guisados-1.jpg'/>
      <section className='eventSubMenu'>
        <h2 className='title'>Cazuelas de Guisados</h2>
        <p className='description'>Acompaña tus guisados con nuestras deliciosas cazuelas de guarniciones. Elige entre arroz, frijoles, nopales, ensalada, papas, verduras, y más.</p>
        <WhatsAppBtn phone='' text={'Consulta mayor informacion'}/>
      </section>
      <CategoryCard click={false} title='Cazuelas de Guarniciones' url='https://i.ytimg.com/vi/8rHh39P5TrY/sddefault.jpg?v=5ed03668'/>
      <section className='eventSubMenu'>
        <h2 className='title'>Cazuelas de Guarniciones</h2>
        <p className='description'>Acompaña tus guisados con nuestras deliciosas cazuelas de guarniciones. Elige entre arroz, frijoles, nopales, ensalada, papas, verduras, y más.</p>
        <WhatsAppBtn phone='' text={'Consulta mayor informacion'}/>
      </section>
      <CategoryCard click={false} title='Taquizas y Banquetes' url='https://banquetesparaeventos.com/catering/wp-content/uploads/2023/02/Banquetes-para-eventos-economicos-1.jpg'/>
      <section className='eventSubMenu'>
        <h2 className='title'>Taquizas y Banquetes</h2>
        <p className='description'>Acompaña tus guisados con nuestras deliciosas cazuelas de guarniciones. Elige entre arroz, frijoles, nopales, ensalada, papas, verduras, y más.</p>
        <WhatsAppBtn phone='' text={'Consulta mayor informacion'}/>
      </section>
      <CategoryCard click={false} title='Renta nuestra terraza' url='https://lh3.googleusercontent.com/p/AF1QipPbX19ll654iFlOx7fFTvXIl_zcWuim03iMxzdT=s680-w680-h510'/>
      <section className='eventSubMenu'>
        <h2 className='title'>Renta nuestra terraza</h2>
        <p className='description'>Acompaña tus guisados con nuestras deliciosas cazuelas de guarniciones. Elige entre arroz, frijoles, nopales, ensalada, papas, verduras, y más.</p>
        <WhatsAppBtn phone='' text={'Consulta mayor informacion'}/>
      </section>
    </div>
  );
};

export default EventPage;
