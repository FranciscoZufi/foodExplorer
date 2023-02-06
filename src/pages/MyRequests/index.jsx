import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import qrcode from '../../assets/qrcode.svg'
import pix from '../../assets/pix.svg'
import { CardRequest } from '../../components/CardRequest'



export function MyRequests() {
  
return (
  <Container>
   <Header />
   <div className='page'>
    <div className='pedidos'>
   <h1>Meu Pedido</h1> 
   <div>
      <CardRequest />
      <CardRequest />
      <CardRequest />
      <CardRequest />
   </div>
   <h2>Total: R$ 103,88</h2>
   </div>
   <div className='pagamento'>
    <h1>Pagamento</h1>
    <div>
      <table>
        <tr>
          <img src={pix} alt="" /> <p>PIX</p>
          <td >
            <img src={qrcode} alt="" />
          </td>
          <td className='hide'>
            <div className='Card'>
              <label>Número do Cartão</label>
              <input placeholder='0000 0000 0000 0000'/>
            </div>
          </td>
        </tr>
      </table>
    </div>
   </div>
   </div>
   <Footer />
  </Container>
)
}