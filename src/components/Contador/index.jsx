import { Container } from './styles'
import up from '../../assets/up.svg'
import down from '../../assets/down.svg'


export function Contador() {
  return (
    <Container>
      <button><img src={down} alt="" /></button>
      <span> 01 </span>
      <button><img src={up} alt="" /></button>
    </Container>
  )
}
