import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'
import { explorer } from '../../assets/explorer.svg'

export function Header() {
  const navigate = useNavigate()
  function handleSignOut() {
    navigate('/')
    signOut()
  }
  return (
    <Container>
      <img src={explorer} alt="logo food explorer" />
      <div>
        <span>Welcome,</span>
        <strong>{user.name}</strong>
      </div>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
