import { Container } from './styles'
import  explorerLogoMobile  from '../../assets/explorerLogoMobile.svg'



export function FooterMobile() {
  return (
    <Container>
      <div>
        <img src={explorerLogoMobile} alt="logo explorer" />
        <h1> food explorer</h1>
      </div>

      <div>
        <h2>© 2023 - Todos os direitos reservados.</h2>
      </div>
      
    </Container>
  )
}