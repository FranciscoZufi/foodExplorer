import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'

import { ButtonText } from '../../components/ButtonText'
import { Ingredients } from '../../components/Ingredients'
import { Contador } from '../../components/Contador'
import { Button } from '../../components/Button'
import back from '../../assets/back.svg'
import image1 from '../../assets/image1.png'

export function Plate() {
  
return (
  <Container>
   <Header />
   <ButtonText Img={back} title='Voltar'/>
   <div className='plates'>
    <img src={image1} alt="Prato" />
    <div className='description'>
      <h2>Salada Ravanello</h2>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
      <div className='ingredients'>
        <Ingredients title='alface'/>
        <Ingredients title='cebola'/>
        <Ingredients title='pão naan'/>
        <Ingredients title='pepino'/>
        <Ingredients title='rabanete'/>
        <Ingredients title='tomate'/>
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