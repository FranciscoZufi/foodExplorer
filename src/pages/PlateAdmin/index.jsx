import { Container} from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/footer'

import { ButtonText } from '../../components/ButtonText'
import { Ingredients } from '../../components/Ingredients'
import { Contador } from '../../components/Contador'
import { Button } from '../../components/Button'
import image1 from '../../assets/image1.png'
import back from '../../assets/back.svg'

export function PlateAdmin() {
  
return (
  <Container>
   <HeaderAdmin/>
   <div className='back'><ButtonText icon={back} title='Voltar'/></div>
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
        <Button  title='Editar prato'/>
      </div>
    </div>
   </div>
   <Footer />
  </Container>
)
}