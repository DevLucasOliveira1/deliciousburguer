import React from 'react'

import { ScrollRestoration } from 'react-router-dom'

import './Cart.css'

function Cart({ onHandleItems, cartItems, setCartItems, subtotal, total }) {

    const CloseCart = (index) => {

        const Box = document.querySelectorAll('.cart');

        Box[index].classList.remove('on')
 
    }

    const NextBox = (index) => {

        const Box = document.querySelectorAll('.data');
        const PreviousBox = document.querySelectorAll('.cart')
        const Alert = document.querySelectorAll('.fail')

        if(cartItems.length > 0){

            Box[index].classList.add('on');
            PreviousBox[index].classList.remove('on');
            onHandleItems(cartItems)

        } else {

            Alert[index].classList.add('fail-init');

            setTimeout(() => {
                Alert[index].classList.remove('fail-init')
            }, 3000)

        }

    }

    const removeFromCart = (index) => {
        const updatedCartItems = cartItems.filter((item, itemIndex) => itemIndex !== index);
        setCartItems(updatedCartItems)
    }

    const renderCartItems = () => {
        return cartItems.map((item, index) => (

        <div key={index}  className='cart-box-single flex'>

            <div style={{textAlign: 'center', width: '35%'}} className='w50'>

                <img className='center-y' src={`/imagens/home/shop/${item.image}`}/>

            </div>

            <div style={{width: '65%'}} className='w50'>

                <div className='center-y'>

                    <h1 className='name-shop'><span className='quantity-shop'>{item.quantity}x</span> {item.name}</h1>
                    
                    <h1 className='value-shop'>R$ {item.price.toFixed(2)}</h1>

                    <p className='text-shop'>{item.observation}</p>

                    <h6 style={{cursor: 'pointer'}} onClick={() => removeFromCart(index)}>remover</h6>

                </div>
                
            </div>

        </div>

        ))
    }

    const renderEmptyMessage = () => (
        <div className='cart-box-single-none'>
            <h1>Seu Carrinho está vazio!</h1>
            <i className="fa-solid fa-face-sad-tear"></i>
        </div>
    )

    

  return (
    <>

    <ScrollRestoration/>

    <div className='fail'>
        <i class="fa-solid fa-circle-exclamation"></i>
        <h4>Adicione um pedido para continuar!</h4>
    </div>

    <section id='cart' className='cart'>

        <div className='container center-y'>

            <div className='cart-box flex'>

                <div style={{marginBottom: '30px'}} className='w100 flex'>

                    <div className='w20'>
                        <div className='cart-box-circle circle-active'><div className='center-y'>1</div></div>
                        <h4>Confirmando Pedido</h4>
                    </div>

                    <div className='cart-box-line center-y'></div>

                    <div className='w20'>
                        <div className='cart-box-circle'><div className='center-y'>2</div></div>
                        <h4>Confirmando Dados</h4>
                    </div>

                    <div className='cart-box-line center-y'></div>

                    <div className='w20'>
                        <div className='cart-box-circle'><div className='center-y'>3</div></div>
                        <h4>Finalizando Compra</h4>
                    </div>

                </div>

                <div className='cart-box-wraper w100'>
                    
                    {cartItems.length > 0 ? renderCartItems() : renderEmptyMessage()}

                </div>

                    <div className='line-shop'></div>

                <div style={{textAlign: 'center', marginBottom: '25px'}} className='w100'>

                    <h5>Subtotal: R$<span>{subtotal.toFixed(2)}</span></h5>
                    <h5>Taxa de Entrega: R$<span>0.00</span></h5>
                    <h2>Total: R$<span>{total.toFixed(2)}</span></h2>

                </div>

                <div style={{textAlign: 'center'}} className='w100'>

                    <button onClick={() => NextBox(0)} className='btn1'>Avançar <i class="fa-solid fa-face-laugh-beam"></i></button>

                    <button onClick={() => CloseCart(0)} style={{marginLeft: '10px'}} className='btn2'>Voltar</button>

                </div>

            </div>

        </div>

    </section>
    
    </>
  )
}

export default Cart