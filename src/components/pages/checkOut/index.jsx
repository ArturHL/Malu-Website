import './index.css'

import { IoIosArrowUp } from 'react-icons/io'
import { FaAngleDown } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";

import { useState } from 'react'

const Checkout = () => {
  const [stepActive, setStepActive] = useState('cart')

  function handleStepActive(step) {
    setStepActive(step)
  }

  function dropMenuAdress() {
    const menuAdress = document.querySelector('.menuAdress')
    menuAdress.classList.contains('inactive') ? 
      menuAdress.classList.toggle('inactive')
      : setTimeout(() => {menuAdress.classList.toggle('inactive')}, 510)
    setTimeout(() => {document.querySelector('.menuAdress').classList.toggle('dropMenuAdress')}, 1)
    setTimeout(() => {document.querySelector('.menuAdress').classList.toggle('increaseHeight')}, 1)
    menuAdress.classList.contains('overflow') ? menuAdress.classList.toggle('overflow') 
    : setTimeout(() => {document.querySelector('.menuAdress').classList.toggle('overflow')}, 500) 
  }

  function payOrder() {
    handleStepActive('paying')
  }

  function succesfullPaymentPage() {
    console.log('succesfullPaymentPage');
    setTimeout(() => {document.querySelector('.paying').classList.toggle('inactive')}, 200)
    setTimeout(() => {document.querySelector('.succesfullPayment').classList.toggle('inactive')}, 300)
  }

  function handleMenu() {
    if (stepActive === 'cart') {
      return (
            (
      <>
        <section className='cartComfirm'>
        <div>
          <div className='cart'>
            <h2>Carrito</h2>
            <div className='cartItem'>
              <img src='https://via.placeholder.com/100' alt='product' />
              <div>
                <h3>Producto</h3>
                <p>Descripcion</p>
              </div>
              <p>$0.00</p>
            </div>
            <div className='cartItem'>
              <img src='https://via.placeholder.com/100' alt='product' />
              <div>
                <h3>Producto</h3>
                <p>Descripcion</p>
              </div>
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </section>
      <form className='giftCode'>
        <input type="text"  placeholder='Codigo de Descuento'/>
        <button className='buttonB'>Aplicar</button>
      </form>
      <section className='totalPrice'>
        <div>
          <h3>Subtotal</h3>
          <h4>$ 0.00</h4>
        </div>
        <div>
          <h3>Envio</h3>
          <h4>$ 0.00</h4>
        </div>
        <div>
          <h3>Descuento</h3>
          <h4>- $ 0.00</h4>
        </div>
        <div>
          <h2>Total</h2>
          <h3>$ 0.00</h3>
        </div>
      </section>
      <button className='buttonA comfirmarCompra' onClick={()=>{handleStepActive('sendTo')}}>
        Continuar 
      </button>
      </>
    )
      )
    } else if (stepActive === 'sendTo') {
      return (
      <>
        <section className='shipmentsForm'>
          <h2>Selecciona la direccion de envio</h2>
          <div className='adressMenu' onClick={dropMenuAdress}><FaAngleDown /></div>
          <div className='menuAdress inactive'>
            <div className='adress'>
              <h3>Nombre</h3>
              <p>Direccion</p>
              <p>Telefono</p>
            </div>
            <div className='adress'>
              <h3>Nombre</h3>
              <p>Direccion</p>
              <p>Telefono</p>
            </div>

            <button className='buttonB'>Agregar Direccion</button>
          </div>
        </section>
        <FaMotorcycle className='deliveryIcon'/>
        <button className='buttonA comfirmarCompra' onClick={()=>{handleStepActive('pay')}}>
          Continuar 
        </button>
      </>
      )
    } else if (stepActive === 'pay') {
      return (
      <>
        <section className='shipmentsForm'>
          <h2>Selecciona Metodo de Pago</h2>
          <div className='adressMenu' onClick={dropMenuAdress}><FaAngleDown /></div>
          <div className='menuAdress inactive'>
            <div className='adress'>
              <img src="data:image/png;base64,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" alt="visa" />
              <p>**** **** **** 3456</p>
              <p>07/28</p>
            </div>
            <div className='adress'>
              <img src="data:image/png;base64,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" alt="visa" />
              <p>**** **** **** 3456</p>
              <p>07/28</p>
            </div>
            <div className='adress'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAABv1BMVEX/////mQDMAADJAAAAAGb/ngD/lwAAAGj/nAD/lgD/lAD/kQAAAFnRAAAAAGf/nQDRGwD6jAAAAF7ucwAAAF0AAGLdSgDwxMQAAFjVAAB2AEMoKHP66+vZ2eb88fHOzt0AAFPk5O3oo6P+9/f/0aPWUlL/+fLy8vdwAEuMVEudXj7ba2v/8+bmnJz/38H/+fGBAD301dXSNzfghYX/58//69b/2bHdd3f34ODww8P/tWKqACXpq6vZX1/VTEzQJCRBQYH/pzr/xYjUQkLss7P/vXapqcJiAEyZmbdiYpPAwNJVVYudnbk6AFn/tWbRMTH/q0b/y5TOFRWTADRwcJuAgKa0ABokFmC4bzfjj4+zAACtAB7LeipaWo19S0zff39wQ0/pZgDiWRLaQQ/yfADHl3zdhCC3ZRUxMnlJAFZuNzx8hbJGIE9OL1ZnOE+JADrtxqQXF268OkY0AEmwaTiRUzuUg5THh1qhk6OfACuQcI5kADarY3YAAEctAFxZCFXQxsfrjRN2PDl2bYowHV5LOnZEAEGPABpNAD2fKUVaNlVHEUK1iZuTRmNWSHR2ACarSlxrNGbdiyvhy72eAAhJQu2tAAAZn0lEQVR4nO1d6X/bxpmmCBAEQYK0GSISrYsSqcPWZeqgJOowSd2SLVOnLVm2nDZV7K4TV5ukG9dbOWrTbtbZ3e6RP3hnMMDMi4MUT4D9pc8HWwDJmcGD957BwOP5B1xAsqcLo6fHsR4HJ0ZVTEw41mVNmGtfPBlZ3vdyDN79lZGpxfa5ZnU5M54q7OZFSZKCBOivSH63kBofbVaXNSKZXpydJJxYoZ5/PNKfTjayy8Hp1G5EpUQQhDYIQQgEMGX53dT0YCO7rB3tJyv23FiYmpxqbwxN44W8FJQCRmrMEALoO/nCeEN6rB1dqwOV0ANoGujvqq/L0VQRyU55dgBPSJ6KKde0Lrm4UgU9jKbJsZpZGt3LByumh9EUzKfcsOPzAzXwo7O0slpLl5ka+KEsFR3WuJ4Tb638aCx5p6oUpdG1ytXLniWh4JzCzY3ULEBQlJbSlXc5jQxQHfzoopSdaR4rAOmB+vnRWFppr6zL8XywHgFiCASL081lB2GuYQQRkiqQpOlGEYQhBIvNlaSupUYSpJI0cEPoPVNsIEGEpGwTbdJJowlSSTovE08OrjWYIIxAsNAkgubr9GIlOfIuluoyJdVtpG0hCZkmENTTcB0DJK3YRgCj+WBTCGpTTVLDg8nV5hGkktRv7XKvCTrGEJBSDSUo2UQR0jhaMVWXRvPN0TGGYLGBhYB0k6yQkaR52GWmrlC6MgSEhgVJYw4QhDk6Z12uNc0KQQiNcm0NDRbLcrSiuf/BpiuZDqnYAIK6HjjFEIYaR84IzVcyHQGx7jgy7SRBxCBlmurJzBCkOg3SvLMMYe+fcsQMAY6CdYWR/U4z5OVuOWWGGIJ7tTPUlJysPEOfRhxnCHFUs2NzgyGfCwzVztEvh6FaOfolMVQbRy5YahcZqsVmO+7tXWYIcVSl73c4YsT4tU80wHmOqoohu5xn6NZtE4JOkyRI1eQiDxxnyAvX3JBFJo7HkIJYOUNNL6BVhFuOR5GBivN+h+pDN8EF+12pW3PBVNuD+8RxOarQZLvNDAPncNKPzFFbJfXs1jBEBLccV7VA9maGmjwbVB24z5w3RzdGkEm3WTGCu+18dHSTqi25TYoJtxyPsm9StXbnU7NflXVbTpaxNQTLL/nbd5ohL+d8MnYDhLZyDLlQI/qk5Shqk8oEkD0uZK/uVkDsIZVeNTLivBA57rEqQWC3FENzbhSJ3KbDFsFSZRHnHT53220y7CGUcPz/ECKGoP2yWjeEyFcRIi0SP7ogRJZKYyl87jhHttZo1nmGKobzChlYszKUbKUM3wwXYoOgNZttkWqsPVyo0dqE2M5nZ9WAc5ohm+kQ51P8qsB95rymmRP+EbdJuAHul2hb2lhjuBCHmwy2CxXrSmMiDeUrb82AZKxiDzjP0OfmSfwb4DRDbULRbT1r1fSMwVDod17PXFCcqmHQNOf9mQtpV9UwVNYcZ6ghsaAgqbhh75A6IDGGDAsdTKt8bjhdK+pOTAOSVCxkMuOZ1BreY6VBNAUkDQF8BKpGMD/j+tsB2JRIuwH1lgW4z+ozRYHgLgx+p/fywUAjGFob17CHmwMPPkKXzxmeLqSrQkeMoWbdFNVlioTgmmWOYnStARxJlPcUXiMH6rNs6HJcNnSsU2R85NDjmayRGYrKyo1G6KwKol3ZNFX/wr9IgBbSVMIFQT9k9Ub5QNkx9Euy2/hVzDSeGhmaIrusdfXMy7eqhpdInnj7NzYEaRdVD8SLcIi2lleNG609sqhIHlaObCg65g+Nw6l1RS2VxVoWvhP75fvCOEKKYr0WW3wafkVbI43RyGiKjjf+Orpu6Ff1dfKd2LZxOLWVTrhT+jh+TbYMe8HIb//JniFP3T4tck/Z0hsbJevjJP2xh2U6iLgS67VSFL9STMMxCkGFMYAcZc1YbFlFoYSvTXyz5bHHBFv0hzecQ6j08VF9vzrfC2VTb22aGDaapoGB+juGrBRZ9EwXAnxVK0uzU1NTI5NWosiHsyNLy5P7+EMunKMNGAnhuIGT/v6xqQHTw+4wCsP/C743nSUY8kwTivDmaWIxu1YoFLIoXmL2CQY8At7KT+MHfT1Pvuj7kimLZvv1RSJssYO84OeNHWNLLt8365kqBBz3+GQebGSRnjKQxC2vwl0u5s69C8zOJcf6+xf1UIObZO6yHa60HOgnWOTwviIoGPnqZazPOJDu7W3tTAZflBQs7sGdCqfXdJKkvRRBIdAWzE5r3xeC2XH16zPoi74nIdq6bvuDJLhgsbX8ljc6NJUiq555sEyMWTf/PKctcUvmPXdO5LeK0c7pFBn3VUvTJ7rZJhkct4T/W48ancn2TiIUi4USuYdI9AvokoWMZdpiMEukK6ifyEgk+MEuSyqy2bKJ7G0+SlVIt/1afF3GoakUWfVMdWjmwWDQMMq6ndySvGGyc+pTFJaNMJBpJI3Isr5H1hw3q/5/qcB7NZQL8X6/P8zzSjT2m4msIIp5uzHtIY5En08/LJCrHg9aFqL/ruOS/q3HWJpLG7N1aETmEBlIz8ilDVGOkUOT/9luOBrdnM0GYA/ij0JGO4e/yg3YNKLacnnja13s51fU/3pDsYfsS33+q7vffPPN3TeYJf+1EIlcfPt72zEVJPHiDf0oTwLorGBdG7tOVYjafi0FYQ5YBg6NmB9EEdUzZpD6vccxs2RpUBcGjNl8wMn8peGEKoordm2oxlFWorQ7Qu2hwhTBM/TlhQ8/nRXxCU8RSxHxTPErD61tYUTEb5ivIm58MGi3pLFb/2Nap0iblGXLHfb99EYPPdSvg+oZ08FZZFdKDAdppvzO5nwXd2yyc6oJtN8AC8s156dxnDYmPgpuy7+wB9ZE39lHX+RbP29SZIqMcJdpB7FWGen2d/Zf1j7WAwJSMqIxCnRo3TpFTM/YACflYYuT0/FY/nnd5nS7953JzmE/9X2JRvBYzBawuyPEKMgYEjLR1+b7ys93mNwdhfgx1m08s3s7V+K7KgqUImLe6DwsdGjrhKIeLn6l0bZOZdWDjJbufYeG+oYMJmaKixlNDsGqfN8UuJ945T+wo6HtbXAVszhbNMnpwxgw1pbFxr4nYV7/3DKmYsxkBj1iohSd5Ad68wIx88wUAYd2RAjp8R7r53JUbpBoYd/Su7nVGQthxHbY/V18D6K77S3kbfjO3L/OLiOHZryTS/H3bNyHiVis4xXwB/Jw1CSnz2MssM5Ys3o/r+QQ0Ztbl2RMyhYjoRA1mkHPqDGN6d02qahI7wDJ9W0d2g6hKMn07I+0y3Zu33+5FYpFFT6M/Al2uwnaR3uCKch6QuERFH5BrRZQBg55/oMs/8yG+Urx+3l8jRqQ8L4Ome6zEmNSaElZxQtMUS4UU9CY8IhQa0xyfhczhXvfJ4BUbcZCsQ4F3r9BdgfU2iybIIIZmqJTpPuzh6xQ0O9dwI7WH3v9YWNj40MMHUSp+PUmmMnZ6Xh0FcPByylqXWF3slMJD8sy43zz/cHbDdRKBx0nHgu8pu3N9WiIfjpheQhLfIp68fNPPr588eLlV5c4WuIZpd93QDPY93B9C9i55zH19kDzMBMsRRHI0Ia0C02e6nr2iunPrHxfGT449sbjcVlG/5y+9jMN3QYULccxZO7YiwNQpiehsP9+/CCnHyY5GbVzDC/qMXBoCLlQNMp30MNxi55F7j65e3Yt6sW36zdh2Np3HcAMbidi0QSTmc0/PX16l4c32aDH6lwaTdGQQ/PrX+rWL/RvmmD1Af1Z8e6jayKsqlkm15GgtnwT3DEwbSC/Y6FJF/5NnA2bxJvy2zALDZcho57DqKrN9LhgNUXXdEEkTmSl26GOUIIasz93MFszFEMtsds9cRtFV762H5BWsP72AEUTBoqAQ9vWL/RK++V3Hcyh0SSKWz6Zn+vqSfb0dVMx3QJW1TO3TBu/w8wvTlPkdywjPd9/oKLzkrI2ecAY9fSFrl5fhZmlwqFxCQhSILs3Pjo6gbwaG9NfQP3iSOGfgLZJvipeo5BhyK59E0XAoW2GNKEJaadAVU0rOXKTq3aB318Ug/dIa6l7/ANzaLjaFP9waf0tQxww6vn9KVJXhdW7tKqpDUElNv6G4UL0qe8eiDH1WtFXfuAeIiaKqC2KP2IO7bmeYGiuKv3XGHBomKD9Ehsx/zUcMjp3IknxK2ZK1IxHKVUbUyEDRj0k8FeYpov2FEl5+9XSPYkc/Xsb5S0/sERGzzSQuQeBKfAGqi2iFMkK+9ZrfUAa/7Md7AqxEHCmSSOKrvd+y8XjH8h+Q8lRXgDCbsWcDEIEUtYDHsEaOKpXWfIBIOhkC8hshZkp0qdNUNDALn4UUqSe0Sna99NhJX/Ur1Nr3BtmeoGEQKtO2CD9b0irzcnJPM70WGhiMk02mOdAzqtWgZ/5o4xTm5Kr6Pvi+1KtrSeYQ2sTxDOQ2tBpk2ugaNBhSvqINYdGh5X+UZ8sIuI+fwoczIrXu1Ty4lY57G5NGZFnCmZo2JahDKYcRWOn/HN6sEQGV1aKfBdXpcr+yLAmoIBE7oGWWKYBStLAoWnR9b7VoS3+aJxPWwIu2+OVnxkynqG+PnZ8It/xw5BEA4qk6Clsy5AimWmEGIE5L4kZIEUWc+17GjZafzQmdrCVgALiewGyP9rSNTAEu6zireVoK1aHdr7B50CHSaQX9Aq7vD8DM7K+E0UJEQuUR9DVI45CO8b0YQqUHFXTxIfKUbQPcl7VgWKKmBybZxUjyNgyoRx6mMNpWoKe6GSBOoqofB9BPq1TJF4D7QN3QMv0R6wObXmYh8HtKnQw7SCV7/bHlDBihKU8j5GhwhwpoSMoau1fs4zpXA3kGUWbl51G/PsDY3+aouVoa+boGkU1TIi2USCOwULBDvZLpFjIoVmTPfEM2EbQurbEaJbTHRodVnyYh7MxK/ErdoX976kODinKa5SlKWCAaksbakU5BEL6ngSTYzxtd+pntuiQXBKF/xiHCLQ/Ujc+9oPo2mOkyPcRaGH3TyhNw1ksFTqYGCAr5rsEFGU1eUQGip6DDk2rOmq1631msHrkO7CKikQdHE6FqJ79B47p5PgjNkASh8YXrjBJUZ5pG4j5vSaKNlECBqAoslcOs8mqEW10sGJmWOKAs3zWWhYnak/CwBz2JqjtwflvRAG+UW/I94adMzg0UrvWUiSUvetfSnvvQPM3hlx2jh79JxsOqVeiW07FT8vK5Pi7K0N1w8NuqsriPvDhaVnNhxmQzISZt3hM7ADPQx8ItzKOfKvwzGPjD3wKD/KJdZasTasUAcOvS0wAZGiQf20GJK1lkczPLsoGih7L0MF8YIZX2ywLeD864STHD1D6zOwkS6TJOhQ/+JF5t2hONjs0fB/CCqzU5vV1aUJA+K9DUBvC1yz4YeJ+xBwaTuEjIXDnPGuEj3vAu0BnoM2jEeWQN9iwpuT7YFp2joMuuyvBLCl5IvsYTEycsIloeZ9nNAyB6E2dlY5C07JimLyeXJ0Es5JaRigPG4wRutcCfn+cFBTWZjybUeZBkDsSz/wwUdwyODSkU4aGskH8fjDoWmBIoc3GeqwODVHEmjnh4CxhOsT+7lL5uAPc9wjX3j+gzcXLf2OV1j4m7J6eqYHl2ecg20Fi+1ifvV9a7EJRFOhPW4SCvD5vijanU4VCRr3Lz4EUTQcD4stYJ7jmTmYGcQqPM1ZYhx3NZIxPMILAlG78oK4MgZEK0jpAEaaP6fqiAkbadb68ZHj3wgqnnm5fHTsZWwVz1usJUxh0pBhTuZ70/Px8mqwCmJPBrCRdhBLmlVcee1wqIE2fWStuGSLXqDH/jXzrN885GwBLmnRlyBQxoHRYPZx84Ff0I2SqwLSfZwo6BAtk23lsXKI1FdD/my89pzPvVZian2sMxTf8fKhE0tJhFjCIIVbuUw0VUkM+WvLb2rqZAFkyS9cXYRtryNAwRdTAzGL62P1bhrUt63D+YHt+rsN8DbLCl2znhAMOlC5+QpERWJcA0R3iy8hFL9NxrSYd5svdZezQhD28ggSsUlNXyECHhimiBtA07eeFHtYy2IR93wPmQSW9KJWLlRjo0jPgvKgdj3/wl2B1O8YbTbkBQMdJTdr3EnVty7UKxI2U2d3N4y+z56xNDu0ceV1K0TzSMzA93SU/MnpfFfogYNkB4ITzK8a1U2mOQ0LRYT/rDfsDO71wKGaO7th8fxOF5xa6h/T7uJmg50gKTyaUzI2AdTNCNpvKp9bQH3TFLC43IIdG5XEF+w/dMi1hh8s+S3vvWwtCr3RDs2m2yiqmOJk32ZFVLKiIIzv96IHT4WCG4NYZVrVX1vv/ZzxbZ0qLh6hObrGoUKtJo4SFjz43fN2To80KbcJaMTPu280KYN31GGfI0FQXq0WnSbW4AxwaTgX4EBSW3ksamx0mrFfc+z+4BaT/UD1Rj9j+8tFLq51Ny7A/NoX1qe+eOuFlEb3/9ePULgodwnaUjqSTkaHXpK9xzznAde8ljZ1Uh5bZDa5lBLh6H90qlBH0dqtI49VDCyiHwgdzOIGLKzHyUffc3Ig3fkctduiEbu+8R/6kFyOdfqVsrffC29z9sPOPWI0PDEWkucXHmo9Cye7lJrz/Q9tTeA1PH0FXF1vZw30i+r7BqV9Mgb/oGy9EXqocdRzq6wz+rzPE83hE09PTc6GjIdLY6IweNkfOSC2iT+sy95Ny2a1eQvc0NkFCMZVKoQgS7hxCIjN1ev5rmfg39TAhq6V85G7J3P3PagT1iFza1tHRYU5RDo61n0a5UxS7REMdymVnLpfb2cl1RmPKhjrhphaRYsrW5ubmUU6dnMUcvVXnQaMoIzg8Qh+g5i5DiqU/nSK8YvNCnWiNhsI7R5vr66itcEJA53/wkynqzkPUSOcXX6iTsaFYR0ASUBREGvtJYAGP7ympRSi5rZ1XUeXehdZj7LeCaq4EKYATnAC4dyMonNZALukZOXgLDxBIgVLeIOvnEMJXx/EF7UMl/g7/F9Y+wrPr/kcLce0CY2TJHUrkeT/NUbjhsN5UlHzkfx2XF2h/p4Ai9RlrUbynaL/QfvBRfSTpKz8hCeHLa99T7edvfNjuaHgBn13yXfygd+x/c4GkU8M9+PSOYVOMee/BHQ0LKiv7w/jvYULJs2H9Q93/PttQcIOxjYW47D2+T3Agy8cHdz48uooi84nk6Wrj7Wlcppd4P0qIfH3/mJ2McwcbV2FtfNFHwwf7iNKFjWGCDfZF+uxRRDx78UT7wZOP355pFvjspTqiH15c+JDLukfwVESx9F0NZ4YHc0T0C9QMj38gimfaD+5dwO9IcFJOnVWnpQj1BoO/vabP8KXJ+8fHnEwYAJ/KWmHDqz5xA64Qf7T/bIH+Bp73nh4/e3Z86jV1Lht+z55CF32Rtouzs4vrtgjbtkf0idfoDHmWRowQ4L8jEXBgJCmirhOFPzA+AWbcBNOhvYvgNf/60+pgeMbPduv5Bj9KatoKy4Xn9D+t7kkr5582Nj2n73GeIs6FjT+rQtDIkBvPWLfgppcQlp0LXdgqvSV3vWSwbqDuwu6yLbpjIYHN6xx+aS/YuQk2r5V1Y9uQVjbYdjuDnzsvRp+Z3rFTEs4zZLcjnysv2fmkQrjwckLbXWZd2Cuswu2dXHivjP0ms25sD1oR3Ngc1H7VZMu9mkCH+1vNuWmNKkGr7DCrYrYlOWqNDWY1uLD3/s1wYX/ZMnvvt+JGs62xvSxAC+4024itm6rCDS/bc2Or2fJb8rjwjrRxjyeTsaZoOlx4z8UnFe3r5Biww9+bHh8sqW1JpxlCcD69KAMhMOiZmdkbTc2UiB7deKdua73HAasZomhvojRFbqia8y+KKwlJjav3pj3j5dyaG/XHVilja4sbB1OZVLk3yblRxm4Vikqlr2b8cmu0lb8O3RVz1AKlRqmC133qeOw0RYgjS6nRcY6ESOUMeXocp8hagHS8BCKUy16tcP0lzdznziceFZpqHS5EkAaGXHinbvkXfdpg0U2OuF85z1DpvLUkXKwdtfBr4luEIzcYKtzMhx2cf4vs3xtDLsnR342WEbhgs91gqAZLzeC47+dWM5ZdwJoLoXpvb0TaYYba8favTi6qEaQqI0Yreh47KEj76rOiM23OzXpIYsmJ1yqw5BRH3LK2rdZg3qlydrCK3L4cHKofcSesy4IjyibU48qMSHudIMmw89i41HxlCwiWRbF1oOlFNm7AtHfdYLHJnk1olJLpmG+uIHGL1i5TTVW2gPn5hfqRbKIgcQPWffwRRotNIwmJULkZjlrRvt8ckjivdad+DRmhOa5NEusMF0tirAEvRrMyNFWuy7UmCFKg9qz1ZiQbvo6NW+oq3+VotsEkCcHdqmrUVWOuoYEkt5y+ucvpRpokIVisO+GohKQGscQNVEAQBiKpMVFSIJhtPkEYc7MNIInjRswvnCmDmWz9r2MUpOBaIxKyypAcq9O7cd4TWz9fGqMFoS6ShKCw11wbZEH7SM2ixHFL8zd3YMV4sVZREiQp2yw3Xw7J1YEaWOK4lcUqBYhhIpWvniWkYMWMwwLEkFwdqfQFcoQe71Lt/BBMpIpVvCYW0RPIusePhvTYQCVvyOPwNvQVerCbMF0oBoM3vXVYCCAqi3uNTObrwdzq+Yq3BFHqGobJ2cUG0aNjhrx1GL+f2bD9NTrCrxAOSvm1lDMOvgp0pVdPZgcmH7BFHt79yeXZk9X2GwLo2jE6nirsFvMi0icCSRDzxbVCZtw5714jksmeHvuXVjUNExOjE81I3j2e/wdhJdYQpuf6jgAAAABJRU5ErkJggg==" alt="visa" />
              <p>**** **** **** 3456</p>
              <p>07/28</p>
            </div>
            <div className='adress'>
              <img src="data:image/png;base64,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" alt="visa" />
              <p>**** **** **** 3456</p>
              <p>07/28</p>
            </div>
            <button className='buttonB'>Agregar Direccion</button>
          </div>
        </section>
        <FaCreditCard className='deliveryIcon'/>
        <button className='buttonA comfirmarCompra' onClick={payOrder}>
          Comprar
        </button>
      </>
      )
    } else if(stepActive === 'paying'){
      succesfullPaymentPage()
      return (
        <>
          <section className='paying'>
            <img src="/Logo 2017.png" alt="" className='logo' />
            <h2>Estamos procesando tu pago...</h2>
          </section>
          <section className='succesfullPayment inactive'>
            <img src="/Logo 2017.png" alt="" className='logo' />
            <h2>Compra Realizada</h2>
            <p>Gracias por tu compra</p>
            <button className='buttonA'>Volver a la tienda</button>
          </section>
        </>
      )
    }
}

  return (
    <div className='checkOut'>
      <a className='goBack' href='/menu'><IoIosArrowUp />Volver al Menu</a>
      <img src="/Logo 2017.png" alt="" className='logo' />
      <section className='timeline'>
        <div onClick={()=>{handleStepActive('cart')}} className='step active'>
          <h2>Carrito</h2>
        </div>
        <div onClick={()=>{handleStepActive('sendTo')}} className={`step ${stepActive === 'sendTo' || stepActive === 'pay' ? 'active' : ''}`}>
          <h2>Envio</h2>
        </div>
        <div onClick={()=>{handleStepActive('pay')}} className={`step ${stepActive === 'pay' ? 'active' : ''} `}>
          <h2>Pago</h2>
        </div>
      </section>
      {handleMenu()}
    </div>
  );
};

export default Checkout;
