import { Container } from './styles'

export function Input({ icon: Icon, img: Img, ...rest}) {
  return (
    <Container>
      {Icon && <Icon size={19.5} />}
      <input type="text" {...rest} />
      {Img && <Img size={15}/>}
    </Container>
  )
} 