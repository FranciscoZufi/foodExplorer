import { Container } from './styles'
import  explorer  from '../../assets/explorer.svg'
import { Input } from '../Input'
import  logOut  from '../../assets/logOut.svg'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import pedido from '../../assets/pedido.svg'
import menu from '../../assets/menu.svg'





export function Header() {
  return (
    <Container>
      <div className='desktop hide'>
        <img src={explorer} alt="logo food explorer" />
        <h1> food explorer</h1>
        <Input type="search" placeholder=' Busque por pratos ou ingredientes'/>
        <ButtonText title='Meus favoritos'/>
        <ButtonText title='Histórico de pedidos'/>
        <Button icon={pedido} title="Pedidos(0)"/>
        <ButtonText icon={logOut}/> 
      </div>
      <div className='mobile'>
        <ButtonText icon={menu}/>
      <div className='soon'>
        <img src={explorer} alt="logo food explorer" />
        <h1> food explorer</h1>
      </div>
      <div className='request'>
        <ButtonText icon={pedido}/>
        <div className='number'><span>0</span></div>
      </div>
      </div>
    </Container>
  )
  }
