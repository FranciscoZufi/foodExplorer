import { Container } from './styles'
import { Button } from '../Button'
import image1 from '../../assets/image1.png'
import edit from '../../assets/edit.svg'
import { Contador } from '../Contador'
import { Price } from '../Price'

export function CardAdmin() {
  return (
    <Container>
      <div className='button'><button type='button'><img src={edit} alt="favorito" /></button></div>
      
      <div className='description'> 
        <img src={image1} alt="prato" />
        <h1>Torradas de Parma</h1>
        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
        <Price title={'R$ 79,97'}/>
      </div>
      
    </Container>
  )
}
