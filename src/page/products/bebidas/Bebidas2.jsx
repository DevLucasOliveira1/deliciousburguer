import React, {useState} from 'react'

import '../StylesProducts.css'

function Bebidas2(props) {
  
    const CloseBox = (index) => {

    const Box = document.querySelectorAll('.bebidas2')

    Box[index].classList.remove('on')

  }

    const [quantity, setQuantity] = useState(1);
    const [observation, setObservation] = useState('');

    const product = {
        name:'Pepsi Lata - 350ml',
        price: 6.00,
        image: 'bebida2.png',
        quantity,
        observation
    }

    const Buy = (index) => {

        const Alert = document.querySelectorAll('.success');
        const Box = document.querySelectorAll('.bebidas2')

        Alert[index].classList.add('success-init');
        Box[index].classList.remove('on');

        setTimeout(() => {
            Alert[index].classList.remove('success-init');
        }, 3000)

        props.addToCart(product)

    }
  
  return (
    <>
    
    <section className='add bebidas2'>

        <div className='container center-y'>

            <div className='add-box flex'>

                <div style={{textAlign: 'center'}} className='w50'>

                    <img className='center-y' src='/imagens/home/shop/bebida2.png'/>

                </div>

                <div className='w50'>

                    <div className='center-y'>

                        <span className='type-shop'>BEBIDAS</span>

                        <h1 className='name-shop'>Pepsi Lata - 350ml</h1>
                        
                        <h1 className='value-shop'>R$ 6.00</h1>

                        <h5 className='text-shop'>Quantidade:</h5>
                        <input type='number' min="1" defaultValue="1" onChange={(e) => setQuantity(e.target.value)}/>

                    </div>
                    
                </div>

                    <div className='line-shop'></div>
                
                <div style={{textAlign: 'center', marginBottom: '20px'}} className='w100'>

                    <p className='text-shop'>Descrição:</p>

                    <p>Refrigerante de 350ml</p>

                </div>

                <div style={{textAlign: 'center'}} className='w100'>

                    <p className='text-shop'>Observações:</p>
                    <textarea onChange={(e) => setObservation(e.target.value)}></textarea>

                    <button onClick={() => Buy(0)} className='btn1'>Adicionar <i class="fa-solid fa-heart"></i></button>

                    <button onClick={() => CloseBox(0)} style={{marginLeft: '10px'}} className='btn2'>Voltar</button>

                </div>

            </div>

        </div>

    </section>
    
    </>
  )
}

export default Bebidas2