import { Container } from './styles'
import  explorerLogo  from '../../assets/explorerLogo.svg'



export function Footer() {
  return (
    <Container>
      <div className='soon'>
        <img src={explorerLogo} alt="logo explorer" />
        <h1> food explorer</h1>
      </div>

      <div className='copyrights'>
        <h2>© 2023 - Todos os direitos reservados.</h2>
      </div>
      
    </Container>
  )
}
