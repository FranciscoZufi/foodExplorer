import { Container } from './styles'
import { Button } from '../Button'
import plate1 from '../../assets/plate1.png'
import fav from '../../assets/fav.svg'
import { Contador } from '../Contador'

export function Card() {
  return (
    <Container>
      <img src={fav} alt="favorito" />
      <div> 
        <img src={plate1} alt="prato" />
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
