import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { CardAdmin }from '../../components/CardAdmin'
import { ButtonText } from '../../components/ButtonText'
import pngegg from '../../assets/pngegg.png'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'




export function HomeAdmin() {
  
  const card = document.querySelectorAll("#cards cards")
  let idx = 0
  function carrosselUp(){
    console.log('chamou')
    idx++
    if(idx > card.length - 1){
      idx = 0
    }
    console.log('chegou aqui')
  }
  function carrosselDown(){
    idx--
    if(idx < 0){
      idx = card.length - 1
    }
  }
  
return (
  <Container>
   <Header />
   <div className='folder'>
    <img src={pngegg} alt="" />
    <div className='description'>
    <h1>Sabores inigualáveis</h1>
    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
    </div>
   </div>
  <div className='carousel'>
    <div className='title'>
      <h2>Refeições</h2>
    </div>
    <div className="view">
      <ButtonText className="arrow-left" onClick={carrosselDown()} icon={left}/>
      <ButtonText className="arrow-right" onClick={carrosselUp()} icon={right}/>
        <div className='cards' id='cards'>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        </div>
    </div>
  </div>
  <div className='carousel'>
    <div className='title'>
      <h2>Bebidas</h2>
    </div>
    <div className="view">
      <ButtonText className="arrow-left" onClick={carrosselDown()} icon={left}/>
      <ButtonText className="arrow-right" onClick={carrosselUp()} icon={right}/>
        <div className='cards' id='cards'>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        <CardAdmin/>
        </div>
    </div>
  </div>
   <Footer />
  </Container>
)
}