import FoodList from '../../components/FoodList'
import Banner from '../../components/Banner'

export const restaurants: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    desciption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    info: ['Destaque da semana', 'Japonesa'],
    rate: 4.9
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    desciption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: dolce,
    info: ['Italiana'],
    rate: 4.6
  },
  {
    id: 3,
    title: 'Hioki Sushi ',
    desciption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    info: ['Japonesa'],
    rate: 4.9
  },
  {
    id: 4,
    title: 'Hioki Sushi ',
    desciption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    info: ['Japonesa'],
    rate: 4.9
  },
  {
    id: 5,
    title: 'Hioki Sushi ',
    desciption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    info: ['Japonesa'],
    rate: 4.9
  },
  {
    id: 6,
    title: 'Hioki Sushi ',
    desciption:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    info: ['Japonesa'],
    rate: 4.9
  }
]

const Ladolce = () => (
  <>
    <Banner />
    <FoodList foods={restaurants} background="white" />
  </>
)

export default Ladolce
