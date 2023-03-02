import { Container } from './styles'
import  explorer  from '../../assets/explorer.svg'
import { Input } from '../Input'
import  logOut  from '../../assets/logOut.svg'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import pedido from '../../assets/pedido.svg'
import menu from '../../assets/menu.svg'
import {  useAuth } from '../../hooks/auth'
import { useNavigate} from 'react-router-dom'





export function Header() {
  const { signOut } = useAuth() 
  const navigate = useNavigate()
  function handleSignOut(){
    signOut()
    navigate('/')
  }
  function navigateToHome(){
    navigate('/')
  }
  function navigateToMyFavorites(){
    navigate('/myFavorites')
  }
  function navigateToOrderHistory(){
    navigate('/orderHistory')
  }
  function navigateToMyRequests(){
    navigate('/myRequests')
  }
  return (
    <Container>
      <div className='desktop'>
        <button id='button' onClick={navigateToHome}>
        <img src={explorer} alt="logo food explorer" />
        <h1> food explorer</h1></button>
        <Input type="search" placeholder=' Busque por pratos ou ingredientes'/>
        <ButtonText title='Meus favoritos' onClick={navigateToMyFavorites}/>
        <ButtonText title='Histórico de pedidos' onClick={navigateToOrderHistory}/>
        <Button icon={pedido} title="Pedidos(0)" onClick={navigateToMyRequests}/>
        <ButtonText icon={logOut} onClick={handleSignOut}/> 
      </div>
      <div className='mobile'>
        <ButtonText icon={menu}/>
      <div className='soon'>
      <button id='button' onClick={navigateToHome}>
        <img src={explorer} alt="logo food explorer" />
        <h1> food explorer</h1>
        </button>
      </div>
      <div className='request'>
        <ButtonText icon={pedido}/>
        <div className='number'><span>0</span></div>
      </div>
      </div>
    </Container>
  )
  }
