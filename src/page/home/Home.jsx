import React, { useState } from 'react'

import { Link, ScrollRestoration } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"

import './Home.css'
import { OpenCombo1, OpenCombo2, OpenCombo3, OpenComboFamilia1, OpenComboFamilia2, OpenComboFamilia3, OpenHamburguers1, OpenHamburguers2, OpenHamburguers3, OpenAcompanhamentos1, OpenAcompanhamentos2, OpenAcompanhamentos3, OpenBebidas1, OpenBebidas2, OpenBebidas3 } from './Consts.jsx'

import Combo1 from '../products/combos/Combo1.jsx'
import Combo2 from '../products/combos/Combo2.jsx'
import Combo3 from '../products/combos/Combo3.jsx'

import Combofamilia1  from '../products/combofamilia/Combofamilia1.jsx'
import Combofamilia2  from '../products/combofamilia/Combofamilia2.jsx'
import Combofamilia3  from '../products/combofamilia/Combofamilia3.jsx'

import Hamburguers1 from '../products/hamburguers/Hamburguers1.jsx'
import Hamburguers2 from '../products/hamburguers/Hamburguers2.jsx'
import Hamburguers3 from '../products/hamburguers/Hamburguers3.jsx'

import Acompanhamentos1 from '../products/acompanhamentos/Acompanhamentos1.jsx'
import Acompanhamentos2 from '../products/acompanhamentos/Acompanhamentos2.jsx'
import Acompanhamentos3 from '../products/acompanhamentos/Acompanhamentos3.jsx'

import Bebidas1 from '../products/bebidas/Bebidas1.jsx'
import Bebidas2 from '../products/bebidas/Bebidas2.jsx'
import Bebidas3 from '../products/bebidas/Bebidas3.jsx'

import Cart from '../cart/Cart.jsx'
import Data from '../data/Data.jsx'
import Payment from '../payment/Payment.jsx'

function Home() {

  AOS.init();

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({});
  const [paymentData, setPaymentData] = useState({});

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const handleItems = (cartProducts) => {
    cartProducts.forEach(product => {
      console.log(product)
    })
  }

  const onFormSubmit = (formData) => {
    console.log(formData)
    setFormData(formData)
  }

  const [deliveryActive, setDeliveryActive] = useState(false)

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxaEntrega = deliveryActive ? 5.00 : 0;
  const total = subtotal + taxaEntrega;

  const onPaymentSubmit = (formPayment) => {
    console.log(formPayment)
    setPaymentData(formPayment)

    
    const filteredFormData = Object.entries(formData)
    .filter(([_name, value]) => value.trim() !== '')
    .reduce((obj, [name,value]) => ({...obj, [name]: value }), {});

    const filteredFormPayment = Object.entries(formPayment)
    .filter(([_name, value]) => value.trim() !== '')
    .reduce((obj, [name,value]) => ({...obj, [name]: value }), {});

    const filteredCart = cartItems.map(item => ({
      name: item.name,
      price: item.price.toFixed(2),
      quantity: item.quantity,
      observation: item.observation || ''
    }));

    let whatsappMessage = `Carrinho:\nR$${total.toFixed(2)}\n${deliveryActive ? '+entrega\n' : ''}\n`;

    filteredCart.forEach(item => {
      whatsappMessage += `Pedido: ${item.name}\nPreço: R$${item.price}\nQuantidade: ${item.quantity}\nObservação: ${item.observation}\n\n`;
    });

    for (const name in filteredFormData) {
      whatsappMessage += `${name.charAt(0).toUpperCase() + name.slice(1)}: ${filteredFormData[name]}\n`;
    }

    for (const name in filteredFormPayment) {
      whatsappMessage += `${name.charAt(0).toUpperCase() + name.slice(1)}: ${filteredFormPayment[name]}\n`;
    }

    const numberWhatsapp = '5583988357734'

    const whatsUrl = `https://wa.me/${numberWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsUrl, '_blank')
  }

  return (
    <>

    <ScrollRestoration/>

    <Payment onPaymentSubmit={onPaymentSubmit} subtotal={subtotal} total={subtotal + (deliveryActive ? taxaEntrega : 0)} taxaEntrega={taxaEntrega} deliveryActive={deliveryActive}/>
    <Data onFormSubmit={onFormSubmit} subtotal={subtotal} total={subtotal + taxaEntrega} taxaEntrega={taxaEntrega} deliveryActive={deliveryActive} setDeliveryActive={setDeliveryActive}/>
    <Cart onHandleItems={handleItems} cartItems={cartItems} setCartItems={setCartItems} subtotal={subtotal} total={total}/>
    <Combo1 addToCart={addToCart} />
    <Combo2 addToCart={addToCart} />
    <Combo3 addToCart={addToCart} />
    <Combofamilia1 addToCart={addToCart} />
    <Combofamilia2 addToCart={addToCart} />
    <Combofamilia3 addToCart={addToCart} />
    <Hamburguers1 addToCart={addToCart} />
    <Hamburguers2 addToCart={addToCart} />
    <Hamburguers3 addToCart={addToCart} />
    <Acompanhamentos1 addToCart={addToCart} />
    <Acompanhamentos2 addToCart={addToCart} />
    <Acompanhamentos3 addToCart={addToCart} />
    <Bebidas1 addToCart={addToCart} />
    <Bebidas2 addToCart={addToCart} />
    <Bebidas3 addToCart={addToCart} />

    <div className='success'>
      <div>
        <i class="fa-solid fa-circle-exclamation center-y"></i>
      </div>
      <h4>Pedido adicionado com sucesso!</h4>
    </div>
    
    <section className='bg-slide'>

      <div className='container'>

        <Slider className='bg-desktop' {...settings}>

          <img src='/imagens/home/bg/bg1.png'/>
          <img src='/imagens/home/bg/bg2.png'/>
          <img src='/imagens/home/bg/bg3.png'/>

        </Slider>

        <Slider className='bg-tablet' {...settings}>

          <img src='/imagens/home/bg/bg1-tablet.png'/>
          <img src='/imagens/home/bg/bg2-tablet.png'/>
          <img src='/imagens/home/bg/bg3-tablet.png'/>

        </Slider>

        <Slider className='bg-phone' {...settings}>

          <img src='/imagens/home/bg/bg1-phone.png'/>
          <img src='/imagens/home/bg/bg2-phone.png'/>
          <img src='/imagens/home/bg/bg3-phone.png'/>

        </Slider>

      </div>

    </section>

    <section className='list-sections'>
      
      <div className='container'>

        <div className='list-sections-single'>

          <div className='center-y'>

            <Link to="#combosindividuais">

              <img src='/imagens/home/ancor/img1.png'/>

              <h4>Combos Individuais</h4>

            </Link>

          </div>

        </div>

        <div className='list-sections-single'>

          <div className='center-y'>
            
            <Link to="#combosfamilia">

              <img src='/imagens/home/ancor/img2.png'/>

              <h4>Combos Família</h4>

            </Link>

          </div>

        </div>

        <div className='list-sections-single'>

          <div className='center-y'>

            <Link to="#hamburguers">

              <img src='/imagens/home/ancor/img3.png'/>

              <h4>Hambúrguers</h4>

            </Link>

          </div>

        </div>

        <div className='list-sections-single'>

          <div className='center-y'>

            <Link to="#acompanhamentos">

              <img src='/imagens/home/ancor/img4.png'/>

              <h4>Acompanhamentos</h4>

            </Link>

          </div>

        </div>

        <div className='list-sections-single'>

          <div className='center-y'>

            <Link to="#bebidas">

              <img src='/imagens/home/ancor/img5.png'/>
              
              <h4>Bebidas</h4>

            </Link>

          </div>

        </div>

      </div>
    
    </section>

      <div className='space100'></div>

    <div className='group-section' id='combosindividuais'>
      
      <div className='container'>

        <h1 className='name-section'>COMBOS INDIVIDUAIS</h1>

        <div className='line-section'></div>

      </div>

    </div>

      <div className='space50'></div>

    <section className='shop'>

      <div className='container flex'>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenCombo1(0)}>

          <div className='shop-single-type'>Popular</div>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/combo1.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Burguer Tradicional + Fritas P + Refrigerante</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 20,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>
          
        </div>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={() => OpenCombo2(0)}>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/combo2.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Burguer Duplo + Mega Fritas</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 20,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={() => OpenCombo3(0)}>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/combo3.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Bacon Plus + Fritas P + Refrigerante</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 20,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

      </div>

    </section>

      <div className='space100'></div>

      <div className='group-section' id='combosfamilia'>
      
      <div className='container'>

        <h1 className='name-section'>COMBOS FAMÍLIA</h1>

        <div className='line-section'></div>

      </div>

    </div>

      <div className='space50'></div>

    <section className='shop'>

      <div className='container flex'>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenComboFamilia1(0)}>

          <div className='shop-single-type'>Especial</div>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/combofamilia1.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Duplo Cheddar + Fritas P + 2 Refrigerantes</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 20,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenComboFamilia2(0)}>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/combofamilia2.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Duplo Bacon + 2 Refrigerantes</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 20,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenComboFamilia3(0)}>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/combofamilia3.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Duplo Burguer</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 20,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

      </div>

    </section>

      <div className='space100'></div>

      <div className='group-section' id='hamburguers'>
      
      <div className='container '>

        <h1 className='name-section'>HAMBÚRGUERS</h1>

        <div  className='line-section'></div>

      </div>

    </div>

      <div className='space50'></div>

    <section className='shop'>

      <div className='container flex'>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenHamburguers1(0)}>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/hamburguer1.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>BigBurguer</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 20,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenHamburguers2(0)}>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/hamburguer2.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>MiniBacon</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 20,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenHamburguers3(0)}>

          <div className='shop-single-type'>Sensação</div>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/hamburguer3.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Duplo Cheddar</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 20,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

      </div>

    </section>

      <div className='space100'></div>

      <div className='group-section' id='acompanhamentos'>
      
      <div className='container'>

        <h1 className='name-section'>ACOMPANHAMENTOS</h1>

        <div className='line-section'></div>

      </div>

    </div>

      <div className='space50'></div>

    <section className='shop'>

      <div className='container flex'>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenAcompanhamentos1(0)}>

        <div className='shop-single-type'>Popular</div>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/acompanhamentos1.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Porção Pequena de Fritas</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 10,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenAcompanhamentos2(0)}>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/acompanhamentos2.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Porção Grande de Salada</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 10,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenAcompanhamentos3(0)}>

          <div className='shop-single-type'>Especial</div>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/acompanhamentos3.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Mega Fritas + Bacon</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 10,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

      </div>

    </section>

      <div className='space100'></div>

      <div className='group-section' id='bebidas'>
      
      <div className='container'>

        <h1 className='name-section'>BEBIDAS</h1>

        <div className='line-section'></div>

      </div>

    </div>

      <div className='space50'></div>

    <section className='shop'>

      <div className='container flex'>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenBebidas1(0)}>

          <div className='shop-single-type'>Popular</div>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/bebida1.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Coca-Cola Lata - 350ml</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 6,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenBebidas2(0)}>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/bebida2.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Pepsi Lata - 350ml</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 6,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

        <div className='shop-single w33' data-aos="zoom-in-up" data-aos-offset="1200" onClick={()=> OpenBebidas3(0)}>

          <div className='shop-single-img'>
            <img className='centery' src='/imagens/home/shop/bebida3.png'/>
          </div>

          <div className='shop-single-content'>
            <div className='centery'>
            <h1 className='name-shop'>Guaraná Antarctica Lata - 350ml</h1>

            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>
            <i class="fa-regular fa-star star"></i>

            <h1 className='value-shop'><span>R$</span> 6,00</h1>
            <button className='btn-shop'>Adicionar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
          </div>

        </div>

      </div>

    </section>

      <div style={{height:'150px'}}></div>
    
    </>
  )
}

export default Home
