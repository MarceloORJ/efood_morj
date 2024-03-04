import { Title, Container, Logo, Hero, Imagem } from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const Header = () => (
  <Hero>
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </Container>
    </Imagem>
  </Hero>
)

export default Header
