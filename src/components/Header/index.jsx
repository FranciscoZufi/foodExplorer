import { Container, Logout } from './styles'
import  explorer  from '../../assets/explorer'
import { Input } from '../Input'
import  logOut  from '../../assets/logOut'

export function Header() {
  return (
    <Container>
      <div>
        <img src={explorer} alt="logo food explorer" />
        <h1> food explorer</h1>
      </div>

      <div>
        <Input />
      </div>

      <Logout>
        <img src={logOut} alt="voltar ao Sign In" />
      </Logout>
    </Container>
  )
}
