import {Container} from './styles'

export function ButtonText({ title, icon,  ...rest}) {

  return(
  <Container type='button' {...rest}>
    {title}
  </Container>
  );
}