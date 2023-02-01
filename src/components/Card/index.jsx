import { Container } from './styles'
import { Button } from '../Button'
import image1 from '../../assets/image1.png'
import fav from '../../assets/fav.svg'
import { Contador } from '../Contador'

export function Card() {
  return (
    <Container>
      <button type='button'><img src={fav} alt="favorito" /></button>
      <div> 
        <img src={image1} alt="prato" />
        <h1>Torradas de Parma</h1>
        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
      </div>
      <div>   
        <Contador />
        <Button title='Incluir'/>
      </div>
    </Container>
  )
}
