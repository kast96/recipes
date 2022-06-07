import { ImageSourcePropType } from 'react-native'
import PizzaImg from '../images/recipes/pizza.jpg'
import BiffImg from '../images/recipes/biff.jpg'
import PotatoImg from '../images/recipes/potato.jpg'
import PokeImg from '../images/recipes/poke.jpg'
import PokeDetailImg from '../images/recipes/poke-detail.jpg'

export const recipesData = [
  {
    id: 'pizza-la-peperoni',
    name: 'Pizza la peperoni',
    images: {
      medium: PizzaImg,
      large: PizzaImg,
    }
  },
  {
    id: 'biff-corn-sticks-with',
    name: 'Biff Corn Sticks with ...',
    images: {
      medium: BiffImg,
      large: BiffImg,
    }
  },
  {
    id: 'potato-sticks',
    name: 'Potato Sticks',
    images: {
      medium: PotatoImg,
      large: PotatoImg,
    }
  },
  {
    id: 'poke',
    name: 'Poke',
    images: {
      medium: PokeImg,
      large: PokeDetailImg,
    }
  },
  {
    id: 'poke2',
    name: 'Poke2',
    images: {
      medium: PokeImg,
      large: PokeDetailImg,
    }
  }
] as Array<RecipesType>

export type RecipesType = {
  id: string
  name: string
  images: {
    medium: ImageSourcePropType
    large: ImageSourcePropType
  }
}