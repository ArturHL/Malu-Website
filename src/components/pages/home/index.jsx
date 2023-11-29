import './index.css'

import { PiUserCircleDuotone } from "react-icons/pi";

function HomePage() {
  return (
    <>
      <section className='principalSection'>
        <h1>El mejor Pozole de CDMX</h1>
        <p>
          Con mas de 30 años de experiencia preparando este delicioso
          platillo, te ofrecemos el mejor sabor y calidad en cada uno de
          nuestros productos.
        </p>
      </section>
      <section className='promoSlider'>
        <h2 className='title'>¡Promociones!</h2>
        <div className='promoContainer'>
          <img src='/assets/Screenshot 2023-11-29 011326.png' alt='promo' />
        </div>
      </section>
      <section className='menuSection'>
        <h2 className='title'>Menú</h2>
        <div className='menuContainer'>
          <div className='menuCard'>
            <img src='https://gastromexi.com/wp-content/uploads/2018/06/pozolerojo-1000x658.jpg' alt='menu' />
            <div className='infoContainer'>
              <h2>Pozole Rojo <span className='price'>$89</span></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptates.
              </p>
            </div>
            <div className='callToAction'>
              <button>Compra en 1 Click</button>
              <button>Agregar al Carrito</button>
            </div>
          </div>
          <div className='menuCard'>
            <img src='https://www.vvsupremo.com/wp-content/uploads/2020/02/Deep-Fried-Cheese-Quesadillas.jpg' alt='menu' />
            <div className='infoContainer'>
              <h2>Quesadilla Sencilla <span className='price'>$37</span></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptates.
              </p>
            </div>
            <div className='callToAction'>
              <button>Compra en 1 Click</button>
              <button>Agregar al Carrito</button>
            </div>
          </div>
        </div>
        <p className='redirection'>Puedes ver nuestro menu completo <span>Aqui</span></p>
      </section>
      <section className='reviewsSection'>
        <h2 className='title'>Lo que dicen nuestros clientes</h2>
        <div className='reviewsContainer'>
          <div className='review'>
            <PiUserCircleDuotone />
            <div className='infoContainer'>
              <p>Alejandro Perez.</p>
              <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptates.&quot;
              </p>
            </div>
          </div>
          <div className='review'>
            <PiUserCircleDuotone />
            <div className='infoContainer'>
              <p>Alejandro Perez.</p>
              <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptates.&quot;
              </p>
            </div>
          </div>
          <div className='review'>
            <PiUserCircleDuotone />
            <div className='infoContainer'>
              <p>Alejandro Perez.</p>
              <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptates.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* LocationSection */}
      {/* ContactSection */}
      {/* Footer */}
    </>
  )
}

export default HomePage