import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { Card }from '../../components/Card'
import { ButtonText } from '../../components/ButtonText'
import pngegg from '../../assets/pngegg.png'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'
// import { api } from '../../services/api'




export function Home() {
  
  // const card = document.querySelectorAll("#cards cards")
  // const plate = api.post('/plates', {plates})
  // let plates = plate.id 
  // function carrosselUp(){
  //   plates ++
  //   if(plates > card.length - 1){
  //     plates = 0
  //   }
   
  // }
  // function carrosselDown(){
  //   plates --
  //   if(plates < 0){
  //     plates = card.length - 1
  //   }
  // }
  
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
      <ButtonText className="arrow-left"  icon={left}/>
      <ButtonText className="arrow-right"  icon={right}/>
        <div className='cards' id='cards'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  </div>
  <div className='carousel'>
    <div className='title'>
      <h2>Bebidas</h2>
    </div>
    <div className="view">
      <ButtonText className="arrow-left" icon={left}/>
      <ButtonText className="arrow-right" icon={right}/>
        <div className='cards' id='cards'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  </div>
   <Footer />
  </Container>
)
}