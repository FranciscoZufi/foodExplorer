import { Container } from './styles'
import  explorer  from '../../assets/explorer'
import  menu  from '../../assets/menu'



export function HeaderMobile() {
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
