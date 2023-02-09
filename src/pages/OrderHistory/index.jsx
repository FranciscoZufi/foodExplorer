import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'




export function OrderHistory() {
  
return (
  <Container>
   <Header />
   <div className='table'>
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
        <td>Pendente</td>
        <td>003</td>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
        <td>20/05 às 18h00</td>
      </tr>
      <tr>
        <td>Pendente</td>
        <td>002</td>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
        <td>20/05 às 18h00</td>
      </tr>
      <tr>
        <td>Entregue</td>
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