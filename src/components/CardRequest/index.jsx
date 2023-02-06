import { Container } from './styles'
import { ButtonText } from '../ButtonText'
import image1 from '../../assets/image1.png'

export function CardRequest() {
  return (
    <Container>
      <div className='img'> 
        <img src={image1} alt="prato" />
      </div>
      <div className='name'>
        <h1>Torradas de Parma</h1>
        <p>RS 25,97</p>
        <div className='button'>
          <button>Excluir</button>
        </div>
      </div>
        
    </Container>
  )
} 