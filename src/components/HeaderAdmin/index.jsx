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
