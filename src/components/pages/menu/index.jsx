import './index.css';

import MenuCard from '../../menuCard';

const MenuPage = () => {
  return (
    <div>
      <section>
        <h2>Pozole</h2>
        <MenuCard title="Pozole Rojo" description="Delicioso pozole rojo con carne de cerdo" price="$10" />
        <MenuCard title="Pozole Verde" description="Sabroso pozole verde con carne de pollo" price="$12" />
      </section>

      <section>
        <h2>Enchiladas</h2>
        <MenuCard title="Enchiladas Rojas" description="Ricas enchiladas rojas con queso y salsa picante" price="$8" />
        <MenuCard title="Enchiladas Verdes" description="Deliciosas enchiladas verdes con pollo y salsa verde" price="$9" />
      </section>

      <section>
        <h2>Quesadillas</h2>
        <MenuCard title="Quesadilla de Queso" description="Quesadilla de queso derretido con tortilla de maíz" price="$5" />
        <MenuCard title="Quesadilla de Pollo" description="Quesadilla de pollo con tortilla de harina" price="$6" />
      </section>
    </div>
  );
}

export default MenuPage;
