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
    ],
    steps: []
  },
  {
    id: 'biff-corn-sticks-with',
    name: 'Biff Corn Sticks with Biff Corn Sticks',
    categories: ['meat'],
    images: {
      medium: BiffImg,
      large: BiffImg,
    },
    compound: [],
    steps: []
  },
  {
    id: 'potato-sticks',
    name: 'Potato Sticks',
    categories: ['meat'],
    images: {
      medium: PotatoImg,
      large: PotatoImg,
    },
    compound: [],
    steps: []
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
    ],
    steps: [
      {title: 'Clear food', description: 'Clear food and wash'},
      {title: 'Clear food', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis.'},
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
  steps: Array<StepType>
}

export type CompoundType = {
  name: string
  weight: string
}

export type StepType = {
  title: string
  description: string
}