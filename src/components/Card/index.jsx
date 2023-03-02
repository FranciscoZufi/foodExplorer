import { Container } from './styles'
import { Button } from '../Button'
import image1 from '../../assets/image1.png'
import fav from '../../assets/fav.svg'
import { Contador } from '../Contador'
import { Price } from '../Price'
import { useNavigate } from 'react-router-dom';

export function Card() {
  const navigate = useNavigate()
  function navigateToPlate(){
    navigate('/plate')
  }
  return (
    <Container>
     
      <div className='button'> 
        <button type='button'><img src={fav} alt="favorito" /></button>
      </div>
      <div className='description'> 
        <button id='button' onClick={navigateToPlate}><img src={image1} alt="prato" /></button>
        <h1>Torradas de Parma</h1>
        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
        <Price title='R$ 79,97'/>
      </div>
      <div className='request'>   
        <Contador className='counter'/>
        <Button title='Incluir'/>
      </div>
    </Container>
  )
}
