import React from 'react'

import { Link } from 'react-router-dom'

import './Submenu.css'

function Submenu() {
  
  window.addEventListener('scroll', function(){
    var Menu =  document.getElementById('submenu');

    if(window.scrollY > 190){
        Menu.classList.add('submenu-up')
    } else {
        Menu.classList.remove('submenu-up')
    }
  })

  const OpenCart = (index) => {

    const Box = document.querySelectorAll('.cart');

    Box[index].classList.add('on')

  }
  
  return (
    <>
    
        <section className='submenu' id='submenu'>

            <div className='container flex'>

                <Link to="#inicio" style={{textAlign:'center'}} className='w50 submenu-active'>

                    <i class="fa-solid fa-house"></i>

                    <h4>Início</h4>

                </Link>

                <div onClick={() => OpenCart(0)} style={{textAlign:'center'}} className='w50'>

                    <i class="fa-solid fa-cart-shopping"></i>

                    <h4>Carrinho</h4>

                </div>

            </div>

        </section>

    </>
  )
}

export default Submenu