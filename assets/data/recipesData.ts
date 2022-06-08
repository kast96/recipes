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
    categories: ['pizza'],
    images: {
      medium: PizzaImg,
      large: PizzaImg,
    },
    compound: [
      {name: 'Dough', weight: '300g'},
      {name: 'Mayonnaise', weight: '2 spoon'},
      {name: 'Tomato sauce', weight: '2 spoon'},
      {name: 'Peperoni', weight: '50g'},
      {name: 'Cheese', weight: '100g'},
    ]
  },
  {
    id: 'biff-corn-sticks-with',
    name: 'Biff Corn Sticks with Biff Corn Sticks',
    categories: ['meat'],
    images: {
      medium: BiffImg,
      large: BiffImg,
    },
    compound: []
  },
  {
    id: 'potato-sticks',
    name: 'Potato Sticks',
    categories: ['meat'],
    images: {
      medium: PotatoImg,
      large: PotatoImg,
    },
    compound: []
  },
  {
    id: 'poke',
    name: 'Poke',
    categories: ['burgers', 'meat'],
    images: {
      medium: PokeImg,
      large: PokeDetailImg,
    },
    compound: [
      {name: 'Dough', weight: '300g'},
      {name: 'Mayonnaise', weight: '2 spoon'},
      {name: 'Tomato sauce', weight: '2 spoon'},
      {name: 'Peperoni', weight: '50g'},
      {name: 'Cheese', weight: '100g'},
    ]
  }
] as Array<RecipesType>

export type RecipesType = {
  id: string
  name: string
  categories?: Array<string>
  images: {
    medium: ImageSourcePropType
    large: ImageSourcePropType
  },
  compound: Array<CompoundType>
}

export type CompoundType = {
  name: string
  weight: string
}