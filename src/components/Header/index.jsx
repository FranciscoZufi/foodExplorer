import { Container } from './styles'
import  explorer  from '../../assets/explorer.svg'
import { Input } from '../Input'
import  logOut  from '../../assets/logOut.svg'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import pedido from '../../assets/pedido.svg'





export function Header() {
  return (
    <Container>
      <div>
        <img src={explorer} alt="logo food explorer" />
        <h1> food explorer</h1>
      </div>
      <Input type="text" placeholder=' Busque por pratos ou ingredientes'/>
      <ButtonText title='Meus favoritos'/>
      <ButtonText title='Histórico de pedidos'/>
      <Button Icon={pedido} title="Pedidos(0)"/>
      <img src={logOut} alt="voltar ao SingIn" />  
    </Container>
  )
  }
