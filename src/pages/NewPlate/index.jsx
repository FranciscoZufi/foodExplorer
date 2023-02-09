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




export function NewPlate() {
  
return (
  <Container>
   <HeaderAdmin />
    <div className='page'>
    <ButtonText icon={back} title='Voltar'/>
    <Section title='Editar prato'>
      <div className='category'>
        <label htmlFor='file'>Imagem do prato</label> 
        <Input icon={file} placeholder='Selecione imagem' id='file'  type='file'/>
      <label htmlFor='name'>Nome</label> 
      <Input id='name' type='text' placeholder='Salada Ceasar'/>
      <label htmlFor='select'>Categoria</label>
        <select id='select'>
          <option value='refeicao'>Refeição</option>
          <option value='bebida'>Bebida</option>
          <option value='sopa'>Sopa</option>
        </select>
      </div>
      <div className='price'> 
        <label htmlFor='ingredients'>Ingredientes</label>
        <div className='tags'>
          <Ingredients placeholder='pão'/>
          <Ingredients id='ingredients' placeholder='Novo Ingrediente' isNew/>
        </div>
        <label htmlFor='price'>Preço</label>
          <Input id='price' type='text' placeholder='R$ 00,00'/> 
        
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