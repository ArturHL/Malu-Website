import './index.css';

// import MenuCard from '../../menuCard';
import CategoryCard from '../../categoryCard';

const MenuPage = () => {
  return (
    <>
      <h2 className='title'>Que se te antoja?</h2>
      <section className='menuSection'>
        <CategoryCard title={"Pozole"} url={"/public/receta-pozole-sin-carne.jpeg"}/>
        <CategoryCard title={"Sopas"} url={"https://upload.wikimedia.org/wikipedia/commons/9/9a/Tortilla_Soup.jpg"}/>
        <CategoryCard title={"Gorditas"} url={"https://cdn2.cocinadelirante.com/sites/default/files/images/2023/07/como-hacer-gorditas-chicharron.jpg"}/>
        <CategoryCard title={"Tostadas"} url={"https://3.bp.blogspot.com/-uVryl8s7Cnc/WzCWAb6nXRI/AAAAAAAAMgY/24i-sz4VKZUTWLLgTwwBFAq0Dvt5ys7mACK4BGAYYCw/s1600/P1170232.JPG"}/>
        <CategoryCard title={"Flautas"} url={"https://www.gastrolabweb.com/u/fotografias/m/2023/8/23/f608x342-51515_81238_15.jpg"}/>
        <CategoryCard title={"Enchiladas"} url={"https://sazondemama.com/wp-content/uploads/2022/09/Como-preparar-la-receta-Mexicana-de-enchiladas-verdes-y-cuantas-calorias-tienen-1200x900.jpg"}/>
        <CategoryCard title={"Chilaquiles"} url={"https://keviniscooking.com/wp-content/uploads/2021/12/Chilaquiles-Verdes-square.jpg"}/>
        <CategoryCard title={"Quesadillas"} url={"https://www.vvsupremo.com/wp-content/uploads/2020/02/Deep-Fried-Cheese-Quesadillas.jpg"}/>
        <CategoryCard title={"Pambazos"} url={"https://www.casademexico.es/wp-content/uploads/2022/09/Pambazo-Rojo-pagina.jpg"}/>
        <CategoryCard title={"Sopes"} url={"https://www.larecetafacil.com/wp-content/uploads/2022/01/sopes_de_pollochicken_sopes_recipe.jpg"}/>
        <CategoryCard title={"Aguas Frescas"} url={"https://cdn7.kiwilimon.com/recetaimagen/3630/640x640/15252.jpg.webp"}/>
        <CategoryCard title={"Refrescos"} url={"https://cdn.milenio.com/uploads/media/2019/11/05/coca-cola-mantenido-respetuosa-esencia_37_0_1126_700.jpg"}/>
        <CategoryCard title={"Postres"} url={"https://cdn7.kiwilimon.com/recetaimagen/21435/640x640/11502.jpg.webp"}/>
      </section>
    </>
  );
}

// <MenuCard title="Pozole Rojo" description="Delicioso pozole rojo con carne de cerdo" price="$10" imageUrl='/public/receta-pozole-sin-carne.jpeg'/>
export default MenuPage;
