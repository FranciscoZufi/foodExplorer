import {Container} from './styles'

export function Button({ title, icon: Icon, onClick,  ...rest}) {

  return(
  <Container type='button' onClick={onClick} {...rest}>
    {Icon && <img src={Icon} alt="icon"/>}
    {title}
  </Container>
  );
}