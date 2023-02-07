import { Container} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/footer'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import back from '../../assets/back.svg'
import { Ingredients } from '../../components/Ingredients'
import { Button } from '../../components/Button'





export function EditPlate() {
  
return (
  <Container>
   <Header />
    <div className='page'>
    <ButtonText icon={back} title='Voltar'/>
    <Section title='Editar prato'>
      <div className='category'>
        <label>Imagem do prato <Input type='file'/></label>
      <label>Nome <Input type='text' placeholder='Salada Ceasar'/></label>
      <label>Categoria 
        <select>
          <option value='refeicao'>Refeição</option>
          <option value='bebida'>Bebida</option>
          <option value='sopa'>Sopa</option>
        </select>
      </label>
      </div>
      <div className='price'> 
        <label>Ingredientes
          <Ingredients placeholder='pão'/>
          <Ingredients placeholder='Novo Ingrediente' isNew/>
        </label>
        <label>Preço
          <Input type='text' placeholder='R$ 00,00'/> 
        </label>
      </div>
     <div className='description'>
        <label>Descrição
        <Textarea placeholder='A Salada César é uma opção refrescante para o verão.'></Textarea>
      </label>
     </div>
      <div className='buttons'>
        <ButtonText title='Excluir prato'/>
        <Button title='Salvar Alterações'/>
      </div>
      
    </Section>
    </div>
   <Footer />
  </Container>
)
}