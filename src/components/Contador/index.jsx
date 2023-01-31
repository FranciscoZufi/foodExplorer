import { Container } from './styles'
import { Button } from '../Button'

export function Contador() {
  return (
    <Container>
      <Button title='-'/>
      <span> 01 </span>
      <Button title='+'/>
    </Container>
  )
}
