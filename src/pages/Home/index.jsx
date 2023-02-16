import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { Card }from '../../components/Card'
import pngegg from '../../assets/pngegg.png'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'


export function Home() {
  function handleCLick(){
    const controls = document.querySelectorAll(".control");
    let currentItem = 0;
    const items = document.querySelectorAll(".item");
    const maxItems = items.length;

    controls.forEach((control) => {
      control.addEventListener("click", (e) => {
        const isLeft = e.target.classList.contains("arrow-left");
        console.log(isLeft)
        if (isLeft) {
          currentItem -= 1;
        } else {
          currentItem += 1;
        }
        if (currentItem >= maxItems) {
          currentItem = 0;
        }
        if (currentItem < 0) {
          currentItem = maxItems - 1;
        }
        items.forEach((item) => item.classList.remove("current-item"));
        items[currentItem].classList.add("current-item");
      });
    });
  }

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
    <div className="view">
      <button className="arrow-left control" onClick={handleCLick} aria-label="Previous image"><img src={left} alt="seta esquerda" /></button>
      <button className="arrow-right control" onClick={handleCLick} aria-label="Next Image"><img src={right} alt="seta direita" /></button>
      <div className="gallery-wrapper">
        <div className='cards'>
        <Card class='item current-item'/>
        <Card class='item current-item'/>
        <Card class='item current-item'/>
        <Card class='item current-item'/>
        <Card class='item current-item'/>
        <Card class='item current-item'/>
        <Card class='item current-item'/>
        <Card class='item current-item'/>
        </div>
      </div>
    </div>
  </div>
  
   <Footer />
  </Container>
)
}