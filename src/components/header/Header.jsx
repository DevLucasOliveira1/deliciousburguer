import React from 'react'

import './Header.css'

function Header() {
  
  const OpenCart = (index) => {

    const Box = document.querySelectorAll('.cart')

    Box[index].classList.add('on')

  }
  
  return (
    <>
    
    <div className='header-top' id='inicio'>

      <div className='container'>

        <h4 style={{float: 'left'}}>Endereço: Rua Cristovão n.20</h4>
        
        <h3 style={{float: 'right'}}><i style={{position: 'relative', top: '1px'}} class="fa-brands fa-instagram"></i></h3>

        <div className='clear'></div>

      </div>

    </div>

    <header>

      <div className='container flex'>

        <div className='w50'>

          <img src='../../../dist/imagens/logo/logo.png'/>

        </div>

        <div style={{textAlign: 'right'}} className='w50'>

          <div className='center-y'>

            <i onClick={() => OpenCart(0)} class="fa-solid fa-cart-shopping"></i>

          </div>
          
        </div>

      </div>

    </header>
    
    </>
  )
}

export default Header