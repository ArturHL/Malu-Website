import './index.css'

import { PiUserCircleDuotone } from "react-icons/pi";
import { PiPhoneFill } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import MenuCard from '../../menuCard/index.jsx';

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
          <img src='/Screenshot 2023-11-29 011326.png' alt='promo' />
        </div>
      </section>
      <section className='menuSection'>
        <h2 className='title'>Menú</h2>
        <div className='menuContainer'>
          <MenuCard 
            title="Tacos de Carne Asada"
            description="Deliciosos tacos de carne asada con guacamole y salsa picante."
            price="$10"
            imageUrl="https://phantom-marca-us.unidadeditorial.es/38cc156b436b56320c082691810ca038/resize/828/f/jpg/assets/multimedia/imagenes/2022/09/16/16632876379191.jpg"
          />
          <MenuCard 
            title="Enchiladas Verdes"
            description="Enchiladas rellenas de pollo bañadas en salsa verde y queso fundido."
            price="$8"
            imageUrl="https://phantom-marca-us.unidadeditorial.es/38cc156b436b56320c082691810ca038/resize/828/f/jpg/assets/multimedia/imagenes/2022/09/16/16632876379191.jpg"
          />
          <MenuCard 
            title="Chiles Rellenos"
            description="Chiles poblanos rellenos de queso y bañados en salsa de tomate."
            price="$12"
            imageUrl="https://phantom-marca-us.unidadeditorial.es/38cc156b436b56320c082691810ca038/resize/828/f/jpg/assets/multimedia/imagenes/2022/09/16/16632876379191.jpg"
          />
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
      <section className='locationSection'>
        <h2 className='title'>Ubicación y Contacto</h2>
        <div className='locationContainer'>
          <div className='locationMap'>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.158247345831!2d-99.14876932418888!3d19.362299442921067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffb5575f3263%3A0xb90ede229e5a09f2!2sAntojitos%20Mal%C3%BA!5e0!3m2!1ses-419!2smx!4v1701382575092!5m2!1ses-419!2smx" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='locationInfo'>
            <h2>Portales Norte</h2>
            <p>
              Bélgica 815 col. Portales Nte Del, Benito Juárez, 03300 CDMX
            </p>
            <div className='contactInfo'>
              <p className='contactOption'>
                <PiPhoneFill/> Tel: 55 5555 5555
              </p>
              <p className='contactOption'>
                <PiPhoneFill/> Tel: 55 5555 5555
              </p>
              {/* https://wa.me/1XXXXXXXXXX */}
              <a className='whatsAppChat' href="https://wa.me/5532019274"><FaWhatsapp/> Chatea con Nosotros</a>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage