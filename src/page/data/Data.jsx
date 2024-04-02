import React, {useState} from 'react'

import InputMask from 'react-input-mask'

import './Data.css'

function Data({ onFormSubmit, subtotal, taxaEntrega, deliveryActive, setDeliveryActive }) {
  
  const NextBox = (index) => {

    const Box = document.querySelectorAll('.payment');
    const PreviousBox = document.querySelectorAll('.data')
    const Message = document.querySelectorAll('.invalid')

    if(deliveryActive === false){

        if(formData.nome === '' || formData.email === '' || formData.telefone === ''){

            Message[index].classList.add('invalid-init');

            setTimeout(() => {
                Message[index].classList.remove('invalid-init')
            }, 3000);

        } else {

            Box[index].classList.add('on')
            PreviousBox[index].classList.remove('on')
            
        } 

    } else if (deliveryActive === true){

        if(formData.nome === '' || formData.email === '' || formData.telefone === '' || formData.rua === '' || formData.numero === '' || formData.bairro === '' || formData.cep === ''){

            Message[index].classList.add('invalid-init');
            
            setTimeout(() => {
                Message[index].classList.remove('invalid-init')
            }, 3000)

        } else {

            Box[index].classList.add('on')
            PreviousBox[index].classList.remove('on')

        }

    }

  }

  const ReturnBox = (index) => {

    const Box = document.querySelectorAll('.cart');
    const NextBox = document.querySelectorAll('.data');

    Box[index].classList.add('on');
    NextBox[index].classList.remove('on')

  }

  const [formData, setFormData] = useState({
    nome:'',
    email:'',
    telefone:'',
    cpf:'',
    rua:'',
    numero:'',
    bairro:'',
    cep:'',
    observacao:''
  })

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    onFormSubmit(formData)

  }

  const handleDeliveryToggle = () => {

    if(deliveryActive){
        setFormData({
            ...formData,
            rua:'',
            numero:'',
            bairro:'',
            cep:'',
            observacao:''
        })
    }

    setDeliveryActive(!deliveryActive)
  }

  return (
    <>

    <div className='invalid'>
        <div>
            <i class="fa-solid fa-circle-exclamation center-y"></i>
        </div>
        <h4>Complete os campos obrigatórios para continuar!</h4>
    </div>
    
    <section id='data' className='data'>
        
        <div className='container center-y'>
        <form onSubmit={handleSubmit}>

            <div className='data-box flex'>

                <div style={{marginBottom: '30px'}} className='w100 flex'>

                    <div className='w20'>
                        <div className='data-box-circle circle-active'><div className='center-y'>1</div></div>
                        <h4>Confirmando Pedido</h4>
                    </div>

                    <div style={{backgroundColor: '#f0ab47'}} className='data-box-line center-y'></div>

                    <div className='w20'>
                        <div className='data-box-circle circle-active'><div className='center-y'>2</div></div>
                        <h4>Confirmando Dados</h4>
                    </div>

                    <div className='data-box-line center-y'></div>

                    <div className='w20'>
                        <div className='data-box-circle'><div className='center-y'>3</div></div>
                        <h4>Finalizando Compra</h4>
                    </div>

                </div>

                
                <div className='form flex'>

                    <div style={{width: '48%'}} className='w50'>
                        <label>*Nome:</label>
                        <br/>
                        <input 
                        type='name' 
                        placeholder='Digite seu nome...' 
                        name='nome' 
                        onChange={handleChange} 
                        value={formData.nome}/>
                    </div>

                    <div style={{width: '48%'}} className='w50'>
                        <label>*Email:</label>
                        <br/>
                        <input 
                        type='email' 
                        placeholder='Digite seu email...' 
                        name='email' 
                        onChange={handleChange} 
                        value={formData.email}/>
                    </div>

                    <div style={{width: '48%'}} className='w50'>
                        <label>*Telefone:</label>
                        <br/>
                        <InputMask
                        mask="(99) 9 9999-9999"
                        maskChar="_" 
                        placeholder='Digite seu telefone...' 
                        name='telefone' 
                        onChange={handleChange} 
                        value={formData.telefone}/>
                    </div>

                    <div style={{width: '48%'}} className='w50'>
                        <label>CPF (opcional):</label>
                        <br/>
                        <InputMask
                        mask="999.999.999.99" 
                        maskChar="_"
                        placeholder='Digite seu cpf...' 
                        name='cpf'
                        onChange={handleChange} 
                        value={formData.cpf}/>
                    </div>

                    <div style={{marginBottom:'15px'}} className='w100 flex'>

                        <button type='button' onClick={handleDeliveryToggle} className='btn1'>{ deliveryActive ? 'Retirar no local' : 'Entregar em casa'}</button>

                    </div>

                    {deliveryActive && (

                        <div className='w100 form-delivery flex'>

                            <div style={{width: '48%'}} className='w50'>
                                <label>*Rua:</label>
                                <br/>
                                <input 
                                type='name' 
                                placeholder='Digite sua rua...' 
                                name='rua'
                                onChange={handleChange} 
                                value={formData.rua}/>
                            </div>

                            <div style={{width: '48%'}} className='w50'>
                                <label>*Número:</label>
                                <br/>
                                <input 
                                type='name' 
                                placeholder='Digite o número da casa...' 
                                name='numero'
                                onChange={handleChange} 
                                value={formData.numero}/>
                            </div>

                            <div style={{width: '48%'}} className='w50'>
                                <label>*Bairro:</label>
                                <br/>
                                <input 
                                type='name' 
                                placeholder='Digite seu bairro...' 
                                name='bairro'
                                onChange={handleChange} 
                                value={formData.bairro}/>
                            </div>

                            <div style={{width: '48%'}} className='w50'>
                                <label>*CEP:</label>
                                <br/>
                                <InputMask
                                mask="99999-999"
                                maskChar="_"
                                placeholder='Digite seu cep...' 
                                name='cep'
                                onChange={handleChange} 
                                value={formData.cep}/>
                            </div>

                            <div style={{width: '98%'}}>
                                <label>Observações:</label>
                                <textarea 
                                placeholder='Digite alguma observação...' 
                                name='observacao'
                                onChange={handleChange} 
                                value={formData.observacao}></textarea>
                            </div>

                        </div>

                    )}

                </div>

                    <div className='line-shop'></div>

                <div style={{textAlign: 'center', marginBottom: '25px'}} className='w100'>

                    <h5>Subtotal: R$<span>{subtotal.toFixed(2)}</span></h5>
                    <h5>Taxa de Entrega: R$<span>{deliveryActive ? taxaEntrega.toFixed(2) : '0.00'}</span></h5>
                    <h2>Total: R$<span>{(subtotal + (deliveryActive ? taxaEntrega : 0)).toFixed(2)}</span></h2>

                </div>

                <div style={{textAlign: 'center'}} className='w100'>

                    <button type='submit' onClick={() => NextBox(0)} className='btn1'>Avançar <i class="fa-solid fa-face-laugh-beam"></i></button>

                    <button type='button' onClick={() => ReturnBox(0)} style={{marginLeft: '10px'}} className='btn2'>Voltar</button>

                </div>

            </div>
            
        </form>
        </div>

    </section>
    
    </>
  )
}

export default Data