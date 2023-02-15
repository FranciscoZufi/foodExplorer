import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { ButtonText } from '../../components/ButtonText'
import qrcode from '../../assets/qrcode.svg'
import pix from '../../assets/pix.svg'
import card from '../../assets/card.svg'
import { CardRequest } from '../../components/CardRequest'



export function MyRequests() {
  
return (
  <Container>
   <Header />
   <div className='page'>
    <div className='request'>
      <h1>Meu Pedido</h1>
      <div className='cardsRequest'>
        <CardRequest />
        <CardRequest />
        <CardRequest />
        <CardRequest />
      </div>
      <h2>Total: R$ 103,88</h2>
   </div>
   <div className='payments'>
    <h1>Pagamento</h1>
    <div className='formOfPayment'>
      <ButtonText  icon={pix} title='PIX'/>
      <ButtonText icon={card} title='Crédito'/>
    </div>
    
    <img src={pix} alt="" /> 
    <h2>PIX</h2>
    <img src={card} alt="" /> 
    <h2>Crédito</h2>
    <img src={qrcode} alt="" />
    <label>Número do Cartão</label>
    <input placeholder='0000 0000 0000 0000'/>
   </div>
   </div>
   <Footer />
  </Container>
)
}