import {Container} from './styles'

export function ButtonSave({ title, icon: Icon,  ...rest}) {

  return(
  <Container type='button' {...rest}>
    {Icon && <img src={Icon} alt="icon"/>}
    {title}
  </Container>
  );
}