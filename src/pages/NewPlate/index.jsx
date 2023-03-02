import { Container} from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/footer'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import back from '../../assets/back.svg'
import { Ingredients } from '../../components/Ingredients'
import { ButtonSave } from '../../components/ButtonSave'
import file from '../../assets/file.svg'
import { useNavigate} from 'react-router-dom'




export function NewPlate() {
  const navigate = useNavigate()
  function navigateToHomeAdmin(){
    navigate('/')
  }
return (

  <Container>
    <HeaderAdmin />
    <div className='page'>
    <ButtonText icon={back} title='Voltar' onClick={navigateToHomeAdmin}/>
    <Section title='Adicionar prato'>
      <div className='category'>
        <div className='file'>
        <label htmlFor='file'>Imagem do prato </label>
        <div className='inputFile'>
          <img src={file} alt="file" />
          <h3>Selecione imagem</h3>
          <Input placeholder='Selecione imagem' id='file'  type='file'/>
        </div>
        
        </div>
        <div className='name'>
        <label htmlFor='name'>Nome</label> 
        <Input id='name' type='text' placeholder='Salada Ceasar'/>
        </div>
        <div className='select'>
        <label htmlFor='select'>Categoria</label>
          <select id='select'>
            <option value='refeicao'>Refeição</option>
            <option value='bebida'>Bebida</option>
            <option value='sopa'>Sopa</option>
          </select>
         </div>
      </div>
      <div className='priceIngredients'> 
      <div className='ingredients'>
        <label htmlFor='ingredients'>Ingredientes</label>
        <div className='tags'>
          <Ingredients placeholder='pão'/>
          <Ingredients id='ingredients' placeholder='Novo Ingrediente' isNew/>
        </div>
        </div>
        <div className='price'>
        <label htmlFor='price'>Preço</label>
        <Input id='price' type='text' placeholder='R$ 00,00'/> 
        </div>
      </div>
     <div className='description'>
        <label htmlFor='description'>Descrição</label>
        <Textarea id='description' placeholder='A Salada César é uma opção refrescante para o verão.'></Textarea>
     </div>
      <div className='buttons'>
        <ButtonSave title='Salvar Alterações'/>
      </div>
      
    </Section>
    </div>
   <Footer />
  </Container>
)
}