import { Container, Form} from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { FiMail, FiLock} from 'react-icons/fi'
import  explorer  from '../../assets/explorer.svg'

export function SingIn() {
  
return (
  <Container>
    <div>
      <img src={explorer} alt="" />
      <h1>food explorer</h1>
    </div>
    <Form>
      <h2>Faça login</h2>
      <label>
        Email:
        <Input id='email' placeholder="Exemplo: exemplo@exemplo.com.br" type="text" icon={FiMail}/>
      </label>
      <label>
        Senha:
      <Input id='password' placeholder="No mínimo 6 caracteres" type="password" icon={FiLock}/>
      </label>
      <Button title="Entrar" />
      <Link to='/register'>Criar uma conta</Link>
    </Form>
  </Container>
)
}