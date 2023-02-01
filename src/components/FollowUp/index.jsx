import { Container} from './styles'

export function FollowUp({title, children}) {
  return (
    <Container>
      <h2>{title}</h2> 
      {children}
    </Container>
  )
}