import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { Section }from '../../components/Section'
import { FollowUp }from '../../components/FollowUp'
import { Card }from '../../components/Card'
import pngegg from '../../assets/pngegg.png'


export function Home() {
  
return (
  <Container>
   <Header />
   <Section title='Sabores inigualáveis'>
    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
    <img src={pngegg} alt="" />
   </Section>
   <FollowUp title='Refeições'>
    
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   </FollowUp>
   <FollowUp title='Sobremesas'>
   <Card/>
    <Card/>
    <Card/>
    <Card/>
   </FollowUp>
   <FollowUp title='Bebidas'>
   <Card/>
    <Card/>
    <Card/>
    <Card/>
  </FollowUp>
  
   <Footer />
  </Container>
)
}