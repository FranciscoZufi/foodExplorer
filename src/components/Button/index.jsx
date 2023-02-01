import {Container} from './styles'

export function Button({ title, icon,  ...rest}) {

  return(
  <Container type='button' {...rest}>
    <img src={icon} alt="icon"/>
    {title}
  </Container>
  );
}