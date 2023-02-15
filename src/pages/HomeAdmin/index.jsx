import { Container} from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/footer'
import { CardAdmin }from '../../components/CardAdmin'
import pngegg from '../../assets/pngegg.png'


export function HomeAdmin() {
  
return (
  <Container>
   <HeaderAdmin />
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
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
    </div>
  </div>
  <div className='carousel'>
    <div className='title'>
      <h2>Sobremesas</h2>
    </div>
    <div className='cards'>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
    </div>
  </div>
  <div className='carousel'>
    <div className='title'>
      <h2>Bebidas</h2>
    </div>
    <div className='cards'>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
    </div>
  </div>
  
   <Footer />
  </Container>
)
}