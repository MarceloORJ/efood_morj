import Products from '../Products'
import { Container, List } from './styles'

export type Props = {
  background: 'white' | 'red'
  foods: Food[]
}

const ProductsList = ({ background, foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Products
            key={food.id}
            title={food.title}
            description={food.desciption}
            image={food.image}
            info={food.info}
            rate={food.rate}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
