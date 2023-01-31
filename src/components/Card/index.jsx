import { Container } from './styles'
import { Button } from '../Button'
import plate1 from '../../assets/plate1.png'
import fav from '../../assets/fav.svg'
import { Contador } from '../Contador'

export function Card() {
  return (
    <Container>
      <Button icon={fav}title='fav'/>
      <div> 
        <img src={plate1} alt="" />
        <h1>Torradas de Parma</h1>
        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
        <div>   
          <Contador />
          <Button title='Incluir'/>
        </div>
      </div>
     
   
    </Container>
  )
}
