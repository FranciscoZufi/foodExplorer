import { Container } from './styles'

import image1 from '../../assets/image1.png'
import edit from '../../assets/edit.svg'

import { Price } from '../Price'
import { useNavigate } from 'react-router-dom';

export function CardAdmin() {
  const navigate = useNavigate()
  function navigateToPlateAdmin(){
    navigate('/plateAdmin')
  }
  return (
    <Container>
      <div className='button'><button type='button'><img src={edit} alt="favorito" /></button></div>
      
      <div className='description'> 
      <button id='button' onClick={navigateToPlateAdmin}>
        <img src={image1} alt="prato" /></button>
        <h1>Torradas de Parma</h1>
        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
        <Price title={'R$ 79,97'}/>
      </div>
      
    </Container>
  )
}
