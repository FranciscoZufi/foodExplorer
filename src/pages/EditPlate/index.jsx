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




export function EditPlate() {
  
return (
  <Container>
   <HeaderAdmin />
    <div className='page'>
    <ButtonText icon={back} title='Voltar'/>
    <Section title='Editar prato'>
      <div className='category'>
        <label htmlFor='file'>Imagem do prato 
        <div className='imgFile'>
          <img src={file} alt="" id='imgInput'/>
          <p>Selecione imagem</p>
          </div>
        <Input placeholder='Selecione imagem' id='file'  type='file' accept='image/*'/></label>
      <label htmlFor='name'>Nome 
      <Input id='name' type='text' placeholder='Salada Ceasar' /></label>
      <label htmlFor='select'>Categoria
        <select id='select'>
          <option value='refeicao'>Refeição</option>
          <option value='bebida'>Bebida</option>
          <option value='sopa'>Sopa</option>
        </select></label>
      </div>
      <div className='price'> 
        <label htmlFor='ingredients'>Ingredientes
        <div className='tags'>
          <Ingredients placeholder='pão'/>
          <Ingredients id='ingredients' placeholder='Novo Ingrediente' isNew/>
        </div></label>
        <label htmlFor='price'>Preço
          <Input id='price' type='text' placeholder='R$ 00,00'/> </label>
        
      </div>
     <div className='description'>
        <label htmlFor='description'>Descrição
        <Textarea id='description' placeholder='A Salada César é uma opção refrescante para o verão.'></Textarea></label>
      
     </div>
      <div className='buttons'>
        <ButtonText title='Excluir prato'/>
        <ButtonSave title='Salvar Alterações'/>
      </div>
      
    </Section>
    </div>
   <Footer />
  </Container>
)
}