import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import qrcode from '../../assets/qrcode.svg'
import pix from '../../assets/pix.svg'
import card from '../../assets/card.svg'
import pedido from '../../assets/pedido.svg'
import { CardRequest } from '../../components/CardRequest'



export function MyRequests() {
  
return (
  <Container>
   <Header />
   <div className='page'>
    <div className='request hide'>
      <h1>Meu Pedido</h1>
      <div className='cardsRequest'>
        <CardRequest />
        <CardRequest />
        <CardRequest />
        <CardRequest />
      </div>
      <h2>Total: R$ 103,88</h2>
      <div className='buttonAdvance'>
        <Button title='Avançar'/>
      </div>
   </div>
   <div className='payments'>
    <h1>Pagamento</h1>
    <div className='formOfPayment'>
      <div className='pix'><ButtonText  icon={pix} title='PIX'/></div>
      <div className='card'><ButtonText icon={card} title='Crédito'/></div>
    </div>
    <div className='qrcode hide'> 
      <img src={qrcode} alt="" />
    </div>
    <div className='cardPayment'>
      <div className='nCard'>
        <label htmlFor='nCard'>Número do Cartão
        <input id='nCard' placeholder='0000 0000 0000 0000'/></label>
      </div>
      <div className='description'>
        <label htmlFor='validity'>Validade
        <input id='validity' placeholder='04/25'/></label>
        <label htmlFor='cvc'>CVC
        <input id='cvc' placeholder='000'/></label>
      </div>
      <Button icon={pedido} title='Finalizar pagamento'/>
    </div>
    
   </div>
   </div>
   <Footer className='footer'/>
  </Container>
)
}