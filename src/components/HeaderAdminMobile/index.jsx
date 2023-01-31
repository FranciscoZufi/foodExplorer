import { Container } from './styles'
import  explorer  from '../../assets/explorer.svg'
import  menu  from '../../assets/menu.svg'



export function HeaderMobileAdmin() {
  return (
    <Container>
      <div>
        <img src={menu} alt="menu" />
      </div>
      <div>
        <img src={explorer} alt="logo food explorer" />
        <h1> food explorer</h1>
        <p>admin</p>
      </div>
     
    </Container>
  )
}
