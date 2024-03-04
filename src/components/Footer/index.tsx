import logo from '../../assets/images/logo.png'
import media from '../../assets/images/redes sociais.png'
import { Description, Container, Social, FooterContainer, Logo } from './styles'

const Footer = () => (
  <FooterContainer>
    <Container>
      <Logo>
        <img src={logo} alt="efood" />
      </Logo>
      <Social>
        <img src={media} alt="social media" />
      </Social>
      <Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Description>
    </Container>
  </FooterContainer>
)

export default Footer
