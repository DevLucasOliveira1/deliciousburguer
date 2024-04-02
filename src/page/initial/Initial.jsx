import React from 'react'

import './Initial.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Link } from 'react-router-dom'

function Initial() {
  
  AOS.init();
  
  return (
    <>
    
    <section className='initial'>

      <div className='overlay'>

        <div className='container center-y'>

          <img src='../../public/imagens/logo/logo.png'/>

          <ul>

            <Link data-aos="zoom-in-up" data-aos-delay="10" to='/home'><li><div className='center-y'>Faça seu Pedido</div> <i class="fa-solid fa-cart-shopping"></i></li></Link>

            <Link data-aos="zoom-in-up" data-aos-delay="10" to=''><li><div className='center-y'>Whatsapp</div> <i class="fa-brands fa-whatsapp"></i></li></Link>

            <Link data-aos="zoom-in-up" data-aos-delay="10" to=''><li><div className='center-y'>Instagram</div> <i class="fa-brands fa-instagram"></i></li></Link>

            <Link data-aos="zoom-in-up" data-aos-delay="10" to=''><li><div className='center-y'>Nossa Localização</div> <i class="fa-solid fa-map-location-dot"></i></li></Link>

            <Link data-aos="zoom-in-up" data-aos-delay="10" to=''><li><div className='center-y'>Suporte</div> <i class="fa-solid fa-headset"></i></li></Link>

          </ul>

        </div>

      </div>

    </section>

    </>
  )
}

export default Initial