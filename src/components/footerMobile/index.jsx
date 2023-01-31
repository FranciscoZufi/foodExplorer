import { Container } from './styles'
import  explorer  from '../../assets/explorer'



export function FooterMobile() {
  return (
    <Container>
      <div>
        <img src={explorer} alt="logo food explorer" />
        <h1> food explorer</h1>
      </div>

      <div>
        <h2>© 2023 - Todos os direitos reservados.</h2>
      </div>
      
    </Container>
  )
}
