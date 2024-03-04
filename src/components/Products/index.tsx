import {
  Card,
  ProductsContainer,
  Title,
  Rate,
  Description,
  TitleContainer,
  About,
  Infos
} from './styles'
import Tag from '../Tag'

import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  description: string
  rate: number
  info: string[]
  image: string
}

const Products = ({ title, description, info, image, rate }: Props) => (
  <ProductsContainer>
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {info.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <TitleContainer>
        <Title>{title}</Title>
        <Rate>
          <Title>{rate}</Title>
          <img src={estrela} />
        </Rate>
      </TitleContainer>
      <Description>{description}</Description>
      <About href="#">
        <Tag size="big">Saiba mais</Tag>
      </About>
    </Card>
  </ProductsContainer>
)

export default Products
