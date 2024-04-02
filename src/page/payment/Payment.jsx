import React, {useState, useEffect} from 'react'

import './Payment.css'

function Payment({ onPaymentSubmit, subtotal, taxaEntrega, deliveryActive}) {

    const ReturnBox = (index) => {

        const Box = document.querySelectorAll('.data');
        const NextBox = document.querySelectorAll('.payment')

        Box[index].classList.add('on');
        NextBox[index].classList.remove('on');
        
    }

    const [formPayment, setFormPayment] = useState({
        pagamento:'',
        troco:'',
        quanto:''
    })

    useEffect(() => {
        if(formPayment.pagamento !== 'dinheiro'){
            setFormPayment({...formPayment, troco:'', quanto: ''})
        }
    }, [formPayment.pagamento])


    const paymentVerification = (index)  =>{

        const Message = document.querySelectorAll('.invalid2')

        
        if(formPayment.pagamento === 'dinheiro'){
            
            if(formPayment.troco === 'sim'){

                if(formPayment.quanto === ''){

                    Message[index].classList.add('invalid2-init');
                    
                    setTimeout(() => {
                        Message[index].classList.remove('invalid2-init');
                    }, 3000)

                } else {
                    
                    onPaymentSubmit(formPayment)

                }

            } else if(formPayment.troco === ''){

                Message[index].classList.add('invalid2-init');

                setTimeout(() => {
                    Message[index].classList.remove('invalid2-init');
                }, 3000)
                

            } else {
            
                onPaymentSubmit(formPayment)
                
            }

        } else if(formPayment.pagamento === ''){
            
            Message[index].classList.add('invalid2-init');

            setTimeout(() => {
                Message[index].classList.remove('invalid2-init');
            }, 3000)

        } else {
            onPaymentSubmit(formPayment)
        }

    }

    const handleSubmit = (e) => {

        e.preventDefault();

    }

    const handleChange = (e) => {
        setFormPayment({
            ...formPayment,
            [e.target.name]: e.target.value
        })
    }

    const formPix = () => (

        <div style={{width: '98%', textAlign: 'center'}} className='form-pix'>
            <i class="fa-brands fa-pix"></i><h4>CNPJ: 00.000.000/0001-00</h4><h4>Burguer Delicious</h4>
        </div>

    )

    const formCartao = () => (

        <div style={{textAlign:'center'}} className='form-cartao w100'>
            <h4>Aceitamos:</h4>
            <div>
                <img src='/imagens/payment/cartao1.webp'/>
                <img src='/imagens/payment/cartao2.webp'/>
                <img src='/imagens/payment/cartao3.webp'/>
                <img src='/imagens/payment/cartao4.webp'/>
            </div>
        </div>

    )

    const formTroco = () => (

        <div className='w100' >
            <label>*Vai precisar de troco?</label>
            <br/>
            <select value={formPayment.troco} defaultValue='' onChange={handleChange} name='troco'>
                <option value='' selected disabled>Selecione...</option>
                <option value="nao">Não</option>
                <option value="sim">Sim</option>
            </select>
        </div>

    )

    const formQuanto = () => (

        <div className='w100'>
            <label>*Quanto vai precisar de troco?</label>
            <br/>
            <input type='name' placeholder='Digite quanto vai precisar de troco...' onChange={handleChange} name='quanto' value={formPayment.quanto}/>
        </div>

    )

    return (
    <>

    <div className='invalid2'>
        <div>
            <i class="fa-solid fa-circle-exclamation center-y"></i>
        </div>
        <h4>Complete os campos obrigatórios para continuar!</h4>
    </div>
    
    <section id='payment' className='payment'>

        <div className='container center-y'>
        <form onSubmit={handleSubmit}>

            <div className='payment-box flex'>

                <div style={{marginBottom: '30px'}} className='w100 flex'>

                    <div className='w20'>
                        <div className='payment-box-circle circle-active'><div className='center-y'>1</div></div>
                        <h4>Confirmando Pedido</h4>
                    </div>

                    <div style={{backgroundColor: '#f0ab47'}} className='payment-box-line center-y'></div>

                    <div className='w20'>
                        <div className='payment-box-circle circle-active'><div className='center-y'>2</div></div>
                        <h4>Confirmando Dados</h4>
                    </div>

                    <div style={{backgroundColor: '#f0ab47'}} className='payment-box-line center-y'></div>

                    <div className='w20'>
                        <div className='payment-box-circle circle-active'><div className='center-y'>3</div></div>
                        <h4>Finalizando Compra</h4>
                    </div>

                </div>

                <div className='form flex'>

                    <div className='w100'>
                        <label>*Método de Pagamento:</label>
                        <br/>
                        <select value={formPayment.pagamento} onChange={handleChange} name='pagamento'>
                            <option value='' selected disabled>Selecione...</option>
                            <option value="dinheiro">Dinheiro</option>
                            <option value="pix">Pix</option>
                            <option value="cartao">Cartão</option>
                        </select>
                    </div>            

                    {formPayment.pagamento === 'pix' ? formPix() : null}
                    {formPayment.pagamento === 'cartao' ? formCartao() : null}
                    {formPayment.pagamento === 'dinheiro' && formTroco()}
                    {formPayment.pagamento === 'dinheiro' && formPayment.troco === 'sim' && formQuanto()}
                    
                </div>
                    <div className='line-shop'></div>

                <div style={{textAlign: 'center', marginBottom: '25px'}} className='w100'>

                    <h5>Subtotal: R$<span>{subtotal.toFixed(2)}</span></h5>
                    <h5>Taxa de Entrega: R$<span>{deliveryActive ? taxaEntrega.toFixed(2) : '0.00'}</span></h5>
                    <h2>Total: R$<span>{(subtotal + (deliveryActive ? taxaEntrega : 0)).toFixed(2)}</span></h2>

                </div>

                <div style={{textAlign: 'center'}} className='w100'>

                    <button type='submit' onClick={() => paymentVerification(0)} className='btn1'>Comprar <i class="fa-solid fa-face-laugh-beam"></i></button>

                    <button type='button' onClick={() => ReturnBox(0)} style={{marginLeft: '10px'}} className='btn2'>Voltar</button>

                </div>

            </div>

        </form>
        </div>

    </section>
    
    </>
  )
}

export default Payment