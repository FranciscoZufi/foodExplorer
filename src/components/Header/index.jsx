import { Container } from './styles'
import  explorer  from '../../assets/explorer.svg'
import { Input } from '../Input'
import  logOut  from '../../assets/logOut.svg'
import { Button } from '../Button'
import pedido from '../../assets/pedido.svg'


export function Header() {
  return (
    <Container>
      <div>
        <img src={explorer} alt="logo food explorer" />
        <h1> food explorer</h1>
      </div>

      <div>
        <Input />
      </div>
      <div>
        <Button icon={pedido} title="Pedidos(0)"/>
      </div>
      <div>
        <img src={logOut} alt="voltar ao SingIn" />
      </div>
    </Container>
  )
}
