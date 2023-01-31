import { Container, Form} from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import  explorer  from '../../assets/explorer.svg'

export function SingUp() {
  
return (
  <Container>
    <div>
      <img src={explorer} alt="" />
      <h1>food explorer</h1>
    </div>
    <Form>
      <h2>Crie sua conta</h2>
      <label>
        Seu nome
        <Input placeholder="Exemplo: Maria da Silva" type="text"/>
      </label>
      <label>
        Email
      <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text"/>
      </label>
      <label>
        Senha
      <Input placeholder="No mínimo 6 caracteres" type="password"/>
      </label>
      <Button title="Criar conta" />
      <Link to='/'>Já tenho uma conta</Link>
    </Form>
  </Container>
)
}