import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { Section } from '../../components/Section'
import { Ingredients } from '../../components/Ingredients'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export function Plate() {
  
return (
  <Container>
   <Header />
    <button><ArrowBackIosIcon />Voltar</button>
   <Section>
    <img src="../../assets/image1.png" alt="Plate" />
   </Section>
   <Section>
  <h1>Salada Ravanello</h1>
  <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
  <div className='d-flex flex-row'>
    <Ingredients title='alface'/>
    <Ingredients title='cebola'/>
    <Ingredients title='pão naan'/>
    <Ingredients title='pepino'/>
    <Ingredients title='rabanete'/>
    <Ingredients title='tomate'/>
  </div>
  
   </Section>
   <Footer />
  </Container>
)
}