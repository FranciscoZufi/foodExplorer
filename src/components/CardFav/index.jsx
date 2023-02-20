import { Container } from './styles'
import { ButtonText } from '../ButtonText'

import image1 from '../../assets/image1.png'

export function CardFav() {
  return (
    <Container>
      <div className='img'> 
        <img src={image1} alt="prato" />
      </div>
      <div className='name'>
        <h1>Torradas de Parma</h1>
        <div className='button'>
          <ButtonText title='Remover dos Favoritos' />
        </div>
      </div>
        
    </Container>
  )
} 