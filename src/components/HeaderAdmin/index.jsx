import { Container } from './styles'
import  explorer  from '../../assets/explorer.svg'
import { Input } from '../Input'
import  logOut  from '../../assets/logOut.svg'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import menu from '../../assets/menu.svg'



export function HeaderAdmin() {
  return (
    <Container>
      <div className='desktop'>
        <div className='soon'>
        <img src={explorer} alt="logo food explorer" />
        <div className='name'>
          <h1>food explorer</h1>
          <p>admin</p>
        </div>
        </div>
        <Input type="text" placeholder=' Busque por pratos ou ingredientes'/>
        <Button title="Novo prato"/>
        <ButtonText icon={logOut}/>
        </div>
        <div className="mobile">
          <ButtonText icon={menu}/>
          <div className='soonMobile'>
        <img src={explorer} alt="logo food explorer" />
        <div className='nameMobile'>
          <h1>food explorer</h1>
          <p>admin</p>
        </div>
        </div>
        </div>
    </Container>
  )
}
