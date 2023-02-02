import { Container} from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/footer'
import { Section }from '../../components/Section'
import { FollowUp }from '../../components/FollowUp'
import { CardAdmin }from '../../components/CardAdmin'
import pngegg from '../../assets/pngegg.png'


export function HomeAdmin() {
  
return (
  <Container>
   <HeaderAdmin />
   <Section title='Sabores inigualáveis'>
    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
    <img src={pngegg} alt="" />
   </Section>
  <FollowUp title='Refeições'>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
  </FollowUp>
  <FollowUp title='Sobremesas'>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
  </FollowUp>
  <FollowUp title='Bebidas'>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
    <CardAdmin/>
  </FollowUp>
  
   <Footer />
  </Container>
)
}