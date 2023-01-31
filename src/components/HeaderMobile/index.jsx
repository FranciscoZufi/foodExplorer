import { Container } from './styles'
import  explorer  from '../../assets/explorer'
import  menu  from '../../assets/menu'
import { Button } from '../Button'
import pedido from '../../assets/pedido'


export function HeaderMobile() {
  return (
    <Container>
      <div>
        <img src={menu} alt="menu" />
      </div>
      <div>
        <img src={explorer} alt="logo food explorer" />
        <h1> food explorer</h1>
      </div>
      <div>
        <img src={pedido} alt="voltar ao SingIn" />
        <Button title="0"/>
      </div>
    </Container>
  )
}
