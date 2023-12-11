import './index.css'

import { IoIosArrowUp } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

function OrderMenu() {
  return (
    <>
      <section className='orderMenu'>
        <IoIosArrowUp />
        <div>
          <div>
            <FaCartShopping />
            <p>MX$252.00</p>
          </div>
          <button className='buttonA'>Pagar</button>
        </div>
      </section>
    </>
  )
}

export default OrderMenu