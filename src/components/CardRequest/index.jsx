import { Container } from './styles'
import image1 from '../../assets/image1.png'

export function CardRequest() {
  return (
    <Container>
      <div className='img'> 
        <img src={image1} alt="prato" />
      </div>
      <div className='description'>
      <div className='name'>
        <span>1 x Torradas de Parma</span>
        <p>RS 25,97</p>
      </div>
      <div className='button'>
          <button>Excluir</button>
        </div>
      </div>
    </Container>
  )
} 