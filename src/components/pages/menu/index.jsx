import './index.css';
import useCategory from '../../../hooks/useCategory';
import { useEffect } from 'react';

// import MenuCard from '../../menuCard';
import CategoryCard from '../../categoryCard';

const MenuPage = () => {
  const { category, isLoading, getAllCategoriesData } = useCategory();
  useEffect(() => {
    getAllCategoriesData();
  }, []);
  return (
    <>
      <h2 className='title'>Que se te antoja?</h2>
      <section className='menuSection'>
        {/* <CategoryCard click={true} title={"Pozole"} url={"/receta-pozole-sin-carne.jpeg"}/> */}
        {isLoading ? 
          <p>Cargando...</p> 
          : 
          category.map((category, index) => (
            <CategoryCard key={index} click={true} id={category.id} title={category.name} url={category.image}/>
          ))
        }
      </section>
    </>
  );
}

// <MenuCard title="Pozole Rojo" description="Delicioso pozole rojo con carne de cerdo" price="$10" imageUrl='/public/receta-pozole-sin-carne.jpeg'/>
export default MenuPage;
