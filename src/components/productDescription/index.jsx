import './index.css'

import useProductCard from '../../hooks/Component_Hooks/useProductCard'
import { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

function ProductDescription ({productId: id, editable, handleEditable}) {
  const [product, setProduct] = useState({})
  const [descriptionObject, setDescriptionObject] = useState([typeDescription(id)])
  const [activeMenuDescription, setActiveMenuDescription] = useState(-1)
  const {searchProduct, addProducts} = useProductCard()

  function activeMenu(id) {
    activeMenuDescription == id ? setActiveMenuDescription(-1) : setActiveMenuDescription(id)
  }

  function typeDescription(id) {
    if(id == 1 || id == 3) {
      return ({
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
    }
    if(id == 2 || id == 4) {
      return ({
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
    }
    if(id == 15) {
      return ({
        Aguacate: false,
        Chile: false,
        Chicharron: false,
        Crema: false,
        QuesoManchego: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if(id == 12) {
      return ({
        Chile: false,
        Cilantro: false,
        Cebolla: false,
        Aguacate: false,
        Arroz: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if(id == 13) {
      return ({
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 15 && id < 22) {
      return ({
        Cebolla: false,
        Cilantro: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 21 && id < 25){
      return ({
        Frijoles: false,
        Lechuga: false,
        Crema: false,
        QuesoRallado: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 24 && id < 27) {
      return ({
        Relleno: '',
        Lechuga: false,
        Crema: false,
        QuesoRallado: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 26 && id < 31) {
      return ({
        Cebolla: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 30 && id < 35) {
      return ({
        Cebolla: false,
        Cilantro: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id == 35 || id == 37) {
      return ({
        Coccion: '',
        Guisado: '',
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id == 36 || id == 38) {
      return ({
        Coccion: '',
        Guisado: '',
        Guisado2: '',
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id == 39 || id == 41) {
      return ({
        Lechuga: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id == 40 || id == 42) {
      return ({
        Guisado: '',
        Lechuga: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id > 42 && id < 49 && id != 44 && id != 47) {
      return ({
        Frijoles: false,
        Lechuga: false,
        Cebolla: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
    if (id == 44 || id == 47) {
      return ({
        Guisado: '',
        Frijoles: false,
        Lechuga: false,
        Cebolla: false,
        QuesoRallado: false,
        Crema: false,
        Salsa: {
          Verde: false,
          Roja: false
        },
        Limones: false,
        Extras: {
          Servilletas: false,
          Cubiertos: false
        }
      })
    }
  }

  function descriptionListener(e, key, type) {
    const newDescription = [...descriptionObject]
    if (type == 'Proteina') {
      newDescription[key].Proteina = e.target.value
    }
    if (type == 'Verdura') {
      newDescription[key].Verdura[e.target.previousSibling.textContent] = e.target.checked
    }
    if (type == 'Extras') {
      newDescription[key].Extras[e.target.previousSibling.textContent] = e.target.checked
    }
    if (type == 'SalsaVerde') {
      newDescription[key].Salsa.Verde = e.target.checked
    }
    if (type == 'SalsaRoja') {
      newDescription[key].Salsa.Roja = e.target.checked
    }
    if (type == 'Limones') {
      newDescription[key].Limones = e.target.checked
    }
    if (type == 'Aguacate') {
      newDescription[key].Aguacate = e.target.checked
    }
    if (type == 'Chile') {
      newDescription[key].Chile = e.target.checked
    }
    if (type == 'Chicharron') {
      newDescription[key].Chicharron = e.target.checked
    }
    if (type == 'Crema') {
      newDescription[key].Crema = e.target.checked
    }
    if (type == 'Manchego') {
      newDescription[key].QuesoManchego = e.target.checked
    }
    if (type == 'Cilantro') {
      newDescription[key].Cilantro = e.target.checked
    }
    if (type == 'Cebolla') {
      newDescription[key].Cebolla = e.target.checked
    }
    if (type == 'Arroz') {
      newDescription[key].Arroz = e.target.checked
    }
    if (type == 'QuesoRallado') {
      newDescription[key].QuesoRallado = e.target.checked
    }
    if (type == 'Frijoles') {
      newDescription[key].Frijoles = e.target.checked
    }
    if (type == 'Lechuga') {
      newDescription[key].Lechuga = e.target.checked
    }
    if (type == 'Relleno') {
      newDescription[key].Relleno = e.target.value
    }
    if (type == 'Coccion') {
      newDescription[key].Coccion = e.target.value
    }
    if (type == 'Guisado') {
      newDescription[key].Guisado = e.target.value
    }
    if (type == 'Guisado2') {
      newDescription[key].Guisado2 = e.target.value
    }
    console.log(newDescription);
    setDescriptionObject(newDescription)
  }

  function handleMenu(id, key) {
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
              <input type="radio" name={`proteina${key}`} onChange={(e)=>{descriptionListener(e, key, 'Proteina')}} value={'Maciza'}/>
            </li>
            <li>
              <p>Cabeza</p>
              <input type="radio" name={`proteina${key}`} onChange={(e)=>{descriptionListener(e, key, 'Proteina')}} value={'Cabeza'}/>
            </li>
            <li>
              <p>Pollo</p>
              <input type="radio" name={`proteina${key}`} onChange={(e)=>{descriptionListener(e, key, 'Proteina')}} value={'Pollo'}/>
            </li>
            <li>
              <p>Surtido</p>
              <input type="radio" name={`proteina${key}`} onChange={(e)=>{descriptionListener(e, key, 'Proteina')}} value={'Surtido'}/>
            </li>
            <li>
              <p>Mixto</p>
              <input type="radio" name={`proteina${key}`} onChange={(e)=>{descriptionListener(e, key, 'Proteina')}} value={'Mixto'}/>
            </li>
          </ul>
          <br />
          <h4>¿Verdura? 🥬</h4>
          <ul>
            <li>
              <p>Lechuga</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Verdura')}}/>
            </li>
            <li>
              <p>Rabano</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Verdura')}}/>
            </li>
            <li>
              <p>Cebolla</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Verdura')}}/>
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
            </li>
          </ul>
          </section>
        </>
      )
    }
    // Pozole sin carne Menu
    if(id == 2 || id == 4) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Pozole sin Maiz {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
          <h4>¿Verdura? 🥬</h4>
          <ul>
            <li>
              <p>Lechuga</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Verdura')}}/>
            </li>
            <li>
              <p>Rabano</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Verdura')}}/>
            </li>
            <li>
              <p>Cebolla</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Verdura')}}/>
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
            </li>
          </ul>
          </section>
        </>
      )
    }
    // Sopa de Tortilla Menu
    if(id == 15) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Sopa de Tortilla {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Que le ponemos? 🥑</h4>
            <ul>
              <li>
                <p>Aguacate</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Aguacate')}}/>
              </li>
              <li>
                <p>Chile</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Chile')}}/>
              </li>
              <li>
                <p>Chicharron</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Chicharron')}}/>
              </li>
              <li>
                <p>Crema</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Crema')}}/>
              </li>
              <li>
                <p>Queso Manchego</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Manchego')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
        
      )
    }
    // Consome ranchero Menu
    if (id == 12) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Consome Ranchero {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Que le ponemos? 🥑</h4>
            <ul>
              <li>
                <p>Chile</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Chile')}}/>
              </li>
              <li>
                <p>Cilantro</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Cilantro')}}/>
              </li>
              <li>
                <p>Cebolla</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Cebolla')}}/>
              </li>
              <li>
                <p>Aguacate</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Aguacate')}}/>
              </li>
              <li>
                <p>Arroz</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Arroz')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
      )
    }
    // Consome de Pollo Menu
    if (id == 13) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Caldo de Pollo {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
      )
    }
    // Gorditas Menu
    if (product.category == 3){
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Gordita {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
          <h4>¿Que le ponemos? 🥑</h4>
          <ul>
            <li>
              <p>Cebolla</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Cebolla')}}/>
            </li>
            <li>
              <p>Cilantro</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Cilantro')}}/>
            </li>
            <li>
              <p>Queso Rallado</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'QuesoRallado')}}/>
            </li>
            <li>
              <p>Crema</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Crema')}}/>
            </li>
          </ul>
          <br />
          <h4>¿Salsa y Limones? 🫑🍋</h4>
          <ul>
            <li>
              <p>Verde</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
            </li>
            <li>
              <p>Roja</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
            </li>
            <li>
              <p>Limones</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
            </li>
          </ul>
          </section>
        </>
      )
    }
    // Tostadas Menu
    if (product.category == 4){
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Tostada {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Que le ponemos? 🥑</h4>
            <ul>
              <li>
                <p>Frijoles</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Frijoles')}}/>
              </li>
              <li>
                <p>Lechuga</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Lechuga')}}/>
              </li>
              <li>
                <p>Crema</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Crema')}}/>
              </li>
              <li>
                <p>Queso Rallado</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'QuesoRallado')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
      )
    }
    // Flautas Menu
    if (product.category == 5) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Flautas {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Rellenas de? 🍗</h4>
            <ul>
              <li>
                <p>Pollo</p>
                <input type="radio" name={`relleno${key}`} value={'Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Relleno')}}/>
              </li>
              <li>
                <p>Res</p>
                <input type="radio" name={`relleno${key}`} value={'Res'} onChange={(e)=>{descriptionListener(e, key, 'Relleno')}}/>
              </li>
              <li>
                <p>Papa</p>
                <input type="radio" name={`relleno${key}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Relleno')}}/>
              </li>
              <li>
                <p>Surtidas</p>
                <input type="radio" name={`relleno${key}`} value={'Surtidas'} onChange={(e)=>{descriptionListener(e, key, 'Relleno')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Que le ponemos? 🥑</h4>
            <ul>
              <li>
                <p>Lechuga</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Lechuga')}}/>
              </li>
              <li>
                <p>Crema</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Crema')}}/>
              </li>
              <li>
                <p>Queso Rallado</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'QuesoRallado')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRroja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
      )
    }
    // Enchiladas Menu
    if (product.category == 6) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Enchiladas {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Que le ponemos? 🥑</h4>
            <ul>
              <li>
                <p>Cebolla</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Cebolla')}}/>
              </li>
              <li>
                <p>Queso Rallado</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'QuesoRallado')}}/>
              </li>
              <li>
                <p>Crema</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Crema')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
      )
    }
    // Chilaquiles Menu
    if (product.category == 7) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Chilaquiles {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Que le ponemos? 🥑</h4>
            <ul>
              <li>
                <p>Cebolla</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Cebolla')}}/>
              </li>
              <li>
                <p>Cilantro</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Cilantro')}}/>
              </li>
              <li>
                <p>Queso Rallado</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'QuesoRallado')}}/>
              </li>
              <li>
                <p>Crema</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Crema')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
      )
    }
    // Quesadillas Sencilla Menu
    if (id == 35 || id == 37) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Quesadilla {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Frita o Asada? 🥟</h4>
            <ul>
              <li>
                <p>Frita</p>
                <input type="radio" name={`coccion${key}`} value={'Frita'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
              </li>
              <li>
                <p>Asada</p>
                <input type="radio" name={`coccion${key}`} value={'Asada'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Elige tu guisado? 🥘</h4>
            <ul>
              <li>
                <p>Queso</p>
                <input type="radio" name={`guisado${key}`} value={'Queso'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Papa C/chorizo</p>
                <input type="radio" name={`guisado${key}`} value={'Papa C/chorizo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Papa</p>
                <input type="radio" name={`guisado${key}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Pollo</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Res</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Res'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Setas</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Setas'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Hongos</p>
                <input type="radio" name={`guisado${key}`} value={'Hongos'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Chicharron</p>
                <input type="radio" name={`guisado${key}`} value={'Chicharron'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Picadillo</p>
                <input type="radio" name={`guisado${key}`} value={'Picadillo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
      )
    }
    // Quesadillas Combinada Menu
    if (id == 36 || id == 38) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Quesadilla {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Frita o Asada? 🥟</h4>
            <ul>
              <li>
                <p>Frita</p>
                <input type="radio" name={`coccion${key}`} value={'Frita'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
              </li>
              <li>
                <p>Asada</p>
                <input type="radio" name={`coccion${key}`} value={'Asada'} onChange={(e)=>{descriptionListener(e, key, 'Coccion')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Elige tu primer guisado? 🥘</h4>
            <ul>
              <li>
                <p>Queso</p>
                <input type="radio" name={`guisado${key}`} value={'Queso'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Papa C/chorizo</p>
                <input type="radio" name={`guisado${key}`} value={'Papa C/chorizo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Papa</p>
                <input type="radio" name={`guisado${key}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Pollo</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Res</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Res'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Setas</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Setas'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Hongos</p>
                <input type="radio" name={`guisado${key}`} value={'Hongos'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Chicharron</p>
                <input type="radio" name={`guisado${key}`} value={'Chicharron'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Picadillo</p>
                <input type="radio" name={`guisado${key}`} value={'Picadillo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Elige tu segundo guisado? 🥘</h4>
            <ul>
              <li>
                <p>Queso</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Queso'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Papa C/chorizo</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Papa C/chorizo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Papa</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Tinga de Pollo</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Tinga de Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Tinga de Res</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Tinga de Res'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Tinga de Setas</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Tinga de Setas'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Hongos</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Hongos'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Chicharron</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Chicharron'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
              <li>
                <p>Picadillo</p>
                <input type="radio" name={`guisado${key + 1}`} value={'Picadillo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado2')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
      )
    }
    // Pambazos Menu
    if (id == 39 || id == 41) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Pambazo {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Que le ponemos? 🥑</h4>
            <ul>
              <li>
                <p>Lechuga</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Lechuga')}}/>
              </li>
              <li>
                <p>Queso Rallado</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'QuesoRallado')}}/>
              </li>
              <li>
                <p>Crema</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Crema')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
      )
    }
    // Pambazos con guisado Menu
    if (id == 40 || id == 42) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Pambazo {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
            <h4>¿Elige tu guisado? 🥘</h4>
            <ul>
              <li>
                <p>Papa</p>
                <input type="radio" name={`guisado${key}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Pollo</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Res</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Res'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Tinga de Setas</p>
                <input type="radio" name={`guisado${key}`} value={'Tinga de Setas'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Hongos</p>
                <input type="radio" name={`guisado${key}`} value={'Hongos'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Chicharron</p>
                <input type="radio" name={`guisado${key}`} value={'Chicharron'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
              <li>
                <p>Picadillo</p>
                <input type="radio" name={`guisado${key}`} value={'Picadillo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Que le ponemos? 🥑</h4>
            <ul>
              <li>
                <p>Lechuga</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Lechuga')}}/>
              </li>
              <li>
                <p>Queso Rallado</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'QuesoRallado')}}/>
              </li>
              <li>
                <p>Crema</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Crema')}}/>
              </li>
            </ul>
            <br />
            <h4>¿Salsa y Limones? 🫑🍋</h4>
            <ul>
              <li>
                <p>Verde</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
              </li>
              <li>
                <p>Roja</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
              </li>
              <li>
                <p>Limones</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
              </li>
            </ul>
            <br />
            <h4>Extras 🍴</h4>
            <ul>
              <li>
                <p>Servilletas</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
              <li>
                <p>Cubiertos</p>
                <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
              </li>
            </ul>
          </section>
        </>
      )
    }
    // Sopes Menu
    if (product.category == 10 && id != 44 && id != 47) {
      return (
        <>
          <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Sope {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
          <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
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
                <p>Cebolla</p>
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
        </>
      )
    }
    // Sopes con guisado Menu
    if (id == 44 || id == 47) {
      return (
        <>
        <p className='productIndividualTitle' onClick={()=>{activeMenu(key)}}>Pambazo {key + 1}<span className={activeMenuDescription == key ? 'rotate' : ''}><IoIosArrowUp/></span></p>
        <section className={`section2 ${activeMenuDescription == key ? '' : 'inactive'}`} id={key} key={key}>
          <h4>¿Elige tu guisado? 🥘</h4>
          <ul>
            <li>
              <p>Papa</p>
              <input type="radio" name={`guisado${key}`} value={'Papa'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Tinga de Pollo</p>
              <input type="radio" name={`guisado${key}`} value={'Tinga de Pollo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Tinga de Res</p>
              <input type="radio" name={`guisado${key}`} value={'Tinga de Res'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Tinga de Setas</p>
              <input type="radio" name={`guisado${key}`} value={'Tinga de Setas'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Hongos</p>
              <input type="radio" name={`guisado${key}`} value={'Hongos'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Chicharron</p>
              <input type="radio" name={`guisado${key}`} value={'Chicharron'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
            <li>
              <p>Picadillo</p>
              <input type="radio" name={`guisado${key}`} value={'Picadillo'} onChange={(e)=>{descriptionListener(e, key, 'Guisado')}}/>
            </li>
          </ul>
          <br />
          <h4>¿Que le ponemos? 🥑</h4>
          <ul>
            <li>
              <p>Lechuga</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Lechuga')}}/>
            </li>
            <li>
              <p>Queso Rallado</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'QuesoRallado')}}/>
            </li>
            <li>
              <p>Crema</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Crema')}}/>
            </li>
          </ul>
          <br />
          <h4>¿Salsa y Limones? 🫑🍋</h4>
          <ul>
            <li>
              <p>Verde</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaVerde')}}/>
            </li>
            <li>
              <p>Roja</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'SalsaRoja')}}/>
            </li>
            <li>
              <p>Limones</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Limones')}}/>
            </li>
          </ul>
          <br />
          <h4>Extras 🍴</h4>
          <ul>
            <li>
              <p>Servilletas</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
            </li>
            <li>
              <p>Cubiertos</p>
              <input type="checkbox" onChange={(e)=>{descriptionListener(e, key, 'Extras')}}/>
            </li>
          </ul>
        </section>
      </>
      )
    }
  }

  function addOrRemoveProduct(plus) {
    if(plus) {
      const copy = {...product}
      const copyDescription = [...descriptionObject]
      copy.quantity += 1
      copyDescription.push(typeDescription(id))
      setProduct(copy)
      setDescriptionObject(copyDescription)
    } else {
      if(product.quantity == 1) {
        return
      }
      const copy = {...product}
      const copyDescription = [...descriptionObject]
      copy.quantity -= 1
      copyDescription.pop()
      setProduct(copy)
      setDescriptionObject(copyDescription)
    }
  }

  async function setInitialProduct() {
    const product = await searchProduct(id)
    product.quantity = 1
    setProduct(product);
  }

  function addButton(e) {
    e.preventDefault();
    const completeProduct = {...product}
    completeProduct.description = descriptionObject
    addProducts(completeProduct);
    handleEditable(id);
  }
  
  function variableRender() {
    const elements = [];
    for (let index = 0; index < product.quantity; index++) {
      elements.push(handleMenu(id, index))
    }
    return elements
  }
  
  useEffect(() => {setInitialProduct()}, [])

  console.log(descriptionObject);

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