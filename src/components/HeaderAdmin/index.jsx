import { Container } from './styles'
import  explorer  from '../../assets/explorer'
import { Input } from '../Input'
import  logOut  from '../../assets/logOut'
import { Button } from '../Button'



export function Header() {
  return (
    <Container>
      <div>
        <img src={explorer} alt="logo food explorer" />
        <div>
          <h1> food explorer</h1>
          <p>admin</p>
        </div>
        
      </div>

      <div>
        <Input />
      </div>
      <div>
        <Button title="Novo prato"/>
      </div>
      <div>
        <img src={logOut} alt="voltar ao SingIn" />
      </div>
    </Container>
  )
}
