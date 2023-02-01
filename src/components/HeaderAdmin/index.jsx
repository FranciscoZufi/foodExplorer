import { Container } from './styles'
import  explorer  from '../../assets/explorer.svg'
import { Input } from '../Input'
import  logOut  from '../../assets/logOut.svg'
import { Button } from '../Button'



export function HeaderAdmin() {
  return (
    <Container>
      <div>
        <img src={explorer} alt="logo food explorer" />
        <div>
          <h1> food explorer</h1>
          <p>admin</p>
        </div>
        
      </div>

      
        <Input type="text" placeholder=' Busque por pratos ou ingredientes'/>
      
      
        <Button title="Novo prato"/>
     
        <img src={logOut} alt="voltar ao SingIn" />
     
    </Container>
  )
}
