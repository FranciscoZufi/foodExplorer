import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'



export function OrderHistory() {
  
return (
  <Container>
   <Header />
    <h1>Histórico de pedidos</h1>
    <table>
      <tr>
        <td>Status</td>
        <td>Código</td>
        <td>Detalhamento</td>
        <td>Data e hora</td>
      </tr>
      <tr>
        <td>Pendente</td>
        <td>004</td>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
        <td>20/05 às 18h00</td>
      </tr>
      <tr>
        <td>Pendente</td>
        <td>004</td>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
        <td>20/05 às 18h00</td>
      </tr>
      <tr>
        <td>Pendente</td>
        <td>004</td>
        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
        <td>20/05 às 18h00</td>
      </tr>
    </table>
  
   <Footer />
  </Container>
)
}