import { Container } from './styles'

export function Input({ icon: Icon, ...rest}) {
  return (
    <Container>
      <input type="text" {...rest} />
      {Icon && <img src={Icon} size={19.5} alt="icon"/>}
    </Container>
  )
} 