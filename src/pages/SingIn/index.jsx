import { Container, Form} from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import  explorer  from '../../assets/explorer.svg'
import { useAuth} from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

export function SingIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { singIn } = useAuth()
 
 
  function handleSignIn(){
    singIn({email, password}) 
  }
return (
  <Container>
    <div className='logo'>
      <img src={explorer} alt="logo food explorer" />
      <h1>food explorer</h1>
    </div>
    <Form>
      <div className='form'>
      <h2>Faça login</h2>
      <label htmlFor='email'>Email</label>
        
        <Input id='email' placeholder="Exemplo: exemplo@exemplo.com.br" type="text" onChange={e => setEmail(e.target.value)}/>
      
      <label htmlFor='password'>Senha</label>
      <Input id='password' placeholder="No mínimo 6 caracteres" type="password" onChange={e => setPassword(e.target.value)}/>
      
      <Button title="Entrar" onClick={handleSignIn}/>
      <Link to='/register'>Criar uma conta</Link>
      </div>
    </Form>
  </Container>
)
}