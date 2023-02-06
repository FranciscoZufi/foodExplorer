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





export function CreatePlate() {
  
return (
  <Container>
   <Header />
    <div className='page'>
    <ButtonText Img={back} title='Voltar'/>
    <Section title='Adicionar prato'>
      <label>Imagem do prato</label>
      <Input type='file'/>
      <label>Nome</label>
      <Input type='text' placeholder='Salada Ceasar'/>
      <label>Categoria</label>
      <select>
        <option value='refeicao'>Refeição</option>
        <option value='bebida'>Bebida</option>
        <option value='sopa'>Sopa</option>
      </select>
      <label>Ingredientes</label>
      <Ingredients placeholder='pão'/>
      <Ingredients placeholder='Novo Ingrediente' isNew/>
      <label>Preço</label>
      <Input type='text' placeholder='R$ 00,00'/>
      <label>Descrição</label>
      <Textarea placeholder='A Salada César é uma opção refrescante para o verão.'></Textarea>
      
      <Button title='Salvar Alterações'/>
    </Section>
    </div>
   <Footer />
  </Container>
)
}