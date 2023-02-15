import { Container, Form} from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import  explorer  from '../../assets/explorer.svg'

export function SingIn() {
  
return (
  <Container>
    <div className='logo'>
      <img src={explorer} alt="logo food explorer" />
      <h1>food explorer</h1>
    </div>
    <Form>
      <div className='form'>
      <h2>Faça login</h2>
      <label>
        Email
        <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text"/>
      </label>
      <label>
        Senha
      <Input placeholder="No mínimo 6 caracteres" type="password"/>
      </label>
      <Button title="Entrar" />
      <Link to='/register'>Criar uma conta</Link>
      </div>
    </Form>
  </Container>
)
}