import CategoryCard from '../../categoryCard';
import ProductCard from '../../productCard';
import './index.css'

const ProductPage = () => {
  return (
    <section className='productMenuSection'>
      <CategoryCard  title='Pozole' url='/receta-pozole-sin-carne.jpeg'/>
      <ProductCard title='Pozole Gde Surtido' price={89} imageUrl='/receta-pozole-sin-carne.jpeg' units={0}/>
      <ProductCard title='Pozole Ch Surtido' price={69} imageUrl='/receta-pozole-sin-carne.jpeg' units={0}/>
      <ProductCard title='Pozole Gde Maciza' price={89} imageUrl='/receta-pozole-sin-carne.jpeg' units={0}/>
      <ProductCard title='Pozole Ch Maciza' price={69} imageUrl='/receta-pozole-sin-carne.jpeg' units={0}/>
      <ProductCard title='Pozole Gde Pollo' price={89} imageUrl='/receta-pozole-sin-carne.jpeg' units={0}/>
      <ProductCard title='Pozole Ch Pollo' price={69} imageUrl='/receta-pozole-sin-carne.jpeg' units={0}/>
      <p className='redirection'><span> {'<-'} </span>Volver</p>
    </section>
  );
};

export default ProductPage;
