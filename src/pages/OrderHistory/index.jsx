import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import ellipseRed from '../../assets/ellipseRed.svg'
import ellipseYellow from '../../assets/ellipseYellow.svg'
import ellipseGreen from '../../assets/ellipseGreen.svg'




export function OrderHistory() {
  
return (
  <Container>
   <Header />
   <div className='tableMobile'>
   <h1>Pedidos</h1>
    <table>
      <div className='tr'>
        <div className='fragment'>
        <td> <img src={ellipseRed} alt="Pendente" /> Pendente</td>
        <td>003</td>
        <td>20/05 às 18h00</td></div>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
      </div>
      <div className='tr'>
        <div className='fragment'>
        <td> <img src={ellipseYellow} alt="Preparando" /> Preparando</td>
        <td>002</td>
        <td>20/05 às 18h00</td></div>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
      </div>
      <div className='tr'>
        <div className='fragment'>
        <td> <img src={ellipseGreen} alt="Entregue" /> Entregue</td>
        <td>001</td>
        <td>20/05 às 18h00</td></div>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
      </div>
    </table>
  
   </div>
   <div className='tableDesktop'>
    <h1>Histórico de pedidos</h1>
    <table>
      <tr>
      <th>
        Status
      </th>
      <th>
        Código
      </th>
      <th>
        Detalhamento
      </th>
      <th>
        Data e hora
      </th>
      </tr>
      <tr>
        <td> <img src={ellipseRed} alt="Pendente" /> Pendente</td>
        <td>003</td>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
        <td>20/05 às 18h00</td>
      </tr>
      <tr>
        <td> <img src={ellipseYellow} alt="Preparando" /> Preparando</td>
        <td>002</td>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
        <td>20/05 às 18h00</td>
      </tr>
      <tr>
        <td> <img src={ellipseGreen} alt="Entregue" /> Entregue</td>
        <td>001</td>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
        <td>20/05 às 18h00</td>
      </tr>
    </table>
  </div>
   <Footer />
  </Container>
)
}