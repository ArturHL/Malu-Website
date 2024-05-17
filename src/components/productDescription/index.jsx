import './index.css'

import useProductCard from '../../hooks/Component_Hooks/useProductCard'
import { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

function ProductDescription ({productId: id, editable, handleEditable}) {
  const [product, setProduct] = useState({})
  const [descriptionObject, setDescriptionObject] = useState({})
  const [activeMenuDescription, setActiveMenuDescription] = useState(-1)
  const {searchProduct} = useProductCard()

  function typeDescription(id) {
    if(id == 1 || id == 3) {
      setDescriptionObject({
        Proteina: '',
        Verdura: {
          Lechuga: false,
          Rabano: false,
          Cebolla: false
        },
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
      console.log(descriptionObject);
      return
    }
    setDescriptionObject('none')
  }

  function activeMenu(id) {
    activeMenuDescription == id ? setActiveMenuDescription(-1) : setActiveMenuDescription(id)
  }

  function handleMenu(id, key) {
    // Podemos invocar una funcion que establesca un estado con un objeto personalizado para cada producto y asi que 
    // los inputs modifiquen el estado y no se pierdan los datos al cerrar el menu
    // al final podemos capturar el estado y agregarlo al carrito con su producto correspondiente

    // Pozole Menu
    if(id == 1 || id == 3) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Pozole {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
          <h4>Elige tu Proteina 🥩</h4>
          <ul>
            <li>
              <p>Maciza</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cabeza</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Pollo</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Surtido</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Mixto</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>¿Verdura? 🥬</h4>
          <ul>
            <li>
              <p>Lechuga</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Rabano</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cebolla</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" />
            </li>
          </ul>
          </section>
        </>
      )
    }
    // Pozole sin carne Menu
    if(id == 2 || id == 4) {
      return (
        <section className='section2'>
          <h4>¿Verdura? 🥬</h4>
          <ul>
            <li>
              <p>Lechuga</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Rabano</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cebolla</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" />
            </li>
          </ul>
        </section>
      )
    }
    // Sopa de Tortilla Menu
    if(id == 15) {
      return (
        <section className='section2'>
          <h4>¿Que le ponemos? 🥑</h4>
          <ul>
            <li>
              <p>Aguacate</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Chile</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Chicharron</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Crema</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Queso Manchego</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>¿Salsa y Limones? 🫑🍋</h4>
          <ul>
            <li>
              <p>Verde</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Roja</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Limones</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" />
            </li>
          </ul>
        </section>
      )
    }
    // Consome ranchero Menu
    if (id == 12) {
      return (
        <section className='section2'>
          <h4>¿Que le ponemos? 🥑</h4>
          <ul>
            <li>
              <p>Chile</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cilantro</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cebolla</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Aguacate</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Arroz</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>¿Salsa y Limones? 🫑🍋</h4>
          <ul>
            <li>
              <p>Verde</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Roja</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Limones</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" />
            </li>
          </ul>
        </section>
      )
    }
    // Consome de Pollo Menu
    if (id == 13) {
      return (
        <section className='section2'>
          <h4>¿Salsa y Limones? 🫑🍋</h4>
          <ul>
            <li>
              <p>Verde</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Roja</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Limones</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" />
            </li>
          </ul>
        </section>
      )
    }
    // Gorditas Menu
    if (product.category == 3){
      return (
        <section className='section2'>
          <h4>¿Que le ponemos? 🥑</h4>
          <ul>
            <li>
              <p>Cebolla</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cilantro</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Queso Rallado</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Crema</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>¿Salsa y Limones? 🫑🍋</h4>
          <ul>
            <li>
              <p>Verde</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Roja</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Limones</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" />
            </li>
          </ul>
        </section>
      )
    }
    // Tostadas Menu
    if (product.category == 4){
      return (
        <section className='section2'>
          <h4>¿Que le ponemos? 🥑</h4>
          <ul>
            <li>
              <p>Frijoles</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Lechuga</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Crema</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Queso Rallado</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>¿Salsa y Limones? 🫑🍋</h4>
          <ul>
            <li>
              <p>Verde</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Roja</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Limones</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" />
            </li>
          </ul>
        </section>
      )
    }
    // Flautas Menu
    if (product.category == 5) {
      return (
        <section className='section2'>
          <h4>¿Rellenas de? 🍗</h4>
          <ul>
            <li>
              <p>Pollo</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Res</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Papa</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Surtidas</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>¿Que le ponemos? 🥑</h4>
          <ul>
            <li>
              <p>Lechuga</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Crema</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Queso Rallado</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>¿Salsa y Limones? 🫑🍋</h4>
          <ul>
            <li>
              <p>Verde</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Roja</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Limones</p>
              <input type="checkbox" />
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" />
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" />
            </li>
          </ul>
        </section>
      )
    }
  }

  function addOrRemoveProduct(plus) {
    if(plus) {
      const copy = {...product}
      copy.quantity += 1
      setProduct(copy)
    } else {
      if(product.quantity == 1) {
        return
      }
      const copy = {...product}
      copy.quantity -= 1
      setProduct(copy)
    }
  }

  async function setInitialProduct() {
    const product = await searchProduct(id)
    product.quantity = 1
    setProduct(product);
  }

  function addButton(e) {
    e.preventDefault();
    typeDescription(id);
    // addProducts(product);
    // handleEditable(id);
  }
  
  function variableRender() {
    const elements = [];
    for (let index = 0; index < product.quantity; index++) {
      elements.push(handleMenu(id, index))
    }
    return elements
  }
  
  useEffect(() => {setInitialProduct()}, [])
  
  return (
    <>
      <div className={`backGroundMenu ${editable ? 'inactive' : ''}`}>
        <div className='productDescriptionMenu'>
          <p className='goBack' onClick={handleEditable}><IoIosArrowUp />Cancelar</p>
          <section className='section1'>
            <h2>{product.name}</h2>
            <div className='productController'>
              <button onClick={()=>{addOrRemoveProduct(false)}}> - </button>
              <p>{product.quantity}</p>
              <button onClick={()=>{addOrRemoveProduct(true)}}> + </button>
            </div>
          </section>
          <form className='formDescription'>
            <div>
              {variableRender()}
            </div>
            <button className='buttonA' onClick={(e)=>{addButton(e)}}>Agregar al Carrito</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductDescription