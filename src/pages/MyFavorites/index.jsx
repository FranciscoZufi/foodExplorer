import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { CardFav } from '../../components/CardFav'



export function MyFavorites() {
  
return (
  <Container>
   <Header />
   <div className='page'>
    <h1>Meus Favoritos</h1>
    <div className='cards'>
      <CardFav />
      <CardFav />
      <CardFav />
      <CardFav />
      <CardFav />
      <CardFav />
      <CardFav />
      <CardFav />
    </div>
    </div>
   <Footer />
  </Container>
)
}