import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'

import { Ingredients } from '../../components/Ingredients'
import { Contador } from '../../components/Contador'
import { Button } from '../../components/Button'
import image1 from '../../assets/image1.png'

import back from '../../assets/back.svg'



export function Plate() {
  
return (
  <Container>
   <Header />
   
   <div className='plate'>
    <button><img src={back} alt="voltar" /> Voltar</button>
   <div className='img'>
    <img src={image1} alt="Plate" />
   </div>
   <div className='description'>
  <h1>Salada Ravanello</h1>
  <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
  </div>
  <div className='ingredients'>
    <Ingredients title='alface'/>
    <Ingredients title='cebola'/>
    <Ingredients title='pão naan'/>
    <Ingredients title='pepino'/>
    <Ingredients title='rabanete'/>
    <Ingredients title='tomate'/>
  </div>
   
   <div className='contador'>
    <Contador />
    <Button title='Incluir . R$ 25,00'/>
   </div>
   </div>
   
   <Footer />
  </Container>
)
}