import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { ButtonText } from '../../components/ButtonText'
import { Contador } from '../../components/Contador'
import { Button } from '../../components/Button'
import back from '../../assets/back.svg'
import image1 from '../../assets/image1.png'
import { useNavigate } from 'react-router-dom';

export function Plate() {
  const navigate = useNavigate()
  function navigateToHome(){
    navigate('/')
  }
return (
  <Container>
   <Header />
   <div className='back'><ButtonText icon={back} title='Voltar' onClick={navigateToHome}/></div>
   <div className='plates'>
    <img src={image1} alt="Prato" />
    <div className='description'>
      <h2>Salada Ravanello</h2>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
      <div className='ingredients'>
        <div className='ingredient'><p>alface</p></div>
        <div className='ingredient'><p>cebola</p></div>
        <div className='ingredient'><p>pão naan</p></div>
        <div className='ingredient'><p>pepino</p></div>
        <div className='ingredient'><p>rabanete</p></div>
        <div className='ingredient'><p>tomate</p></div>
      </div>
      <div className='pedido'>
        <Contador />
        <Button  title='incluir . R$ 25,00'/>
      </div>
    </div>
   </div>
   <Footer />
  </Container>
)
}