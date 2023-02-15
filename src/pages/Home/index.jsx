import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { Card }from '../../components/Card'
import pngegg from '../../assets/pngegg.png'


export function Home() {
  
return (
  <Container>
   <Header />
   <div className='folder'>
    <img src={pngegg} alt="" />
    <div>
    <h1>Sabores inigualáveis</h1>
    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
    </div>
   </div>
  <div className='carousel'>
    <div className='title'>
      <h2>Refeições</h2>
    </div>
    <div className='cards'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  </div>
  <div className='carousel'>
    <div className='title'>
      <h2>Sobremesas</h2>
    </div>
    <div className='cards'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  </div>
  <div className='carousel'>
    <div className='title'>
      <h2>Bebidas</h2>
    </div>
    <div className='cards'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  </div>
  
   <Footer />
  </Container>
)
}