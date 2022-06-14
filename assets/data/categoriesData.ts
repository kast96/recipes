import { SvgDrumstickBite } from "../images/categories/SvgDrumstickBite";
import { SvgHamburger } from "../images/categories/SvgHamburger";
import { SvgIceCream } from "../images/categories/SvgIceCream";
import { SvgBeer } from "../images/categories/SvgBeer";
import { SvgSoup } from "../images/categories/SvgSoup";
import { SvgUtensils } from "../images/categories/SvgUtensils";
import { SvgSeedling } from "../images/categories/SvgSeedling";
import { SvgGlassMartiniAlt } from "../images/categories/SvgGlassMartiniAlt";

export const categoriesData = [
  {
    id: 'soup',
    name: 'Супы',
    icon: SvgSoup,
  },
  {
    id: 'secound',
    name: 'Втрое',
    icon: SvgUtensils,
  },
  {
    id: 'salad',
    name: 'Салаты',
    icon: SvgSeedling,
  },
  {
    id: 'drink',
    name: 'Напитки',
    icon: SvgGlassMartiniAlt,
  },
  {
    id: 'burgers',
    name: 'Фастфуд',
    icon: SvgHamburger,
  },
  {
    id: 'beer',
    name: 'Пивная',
    icon: SvgBeer,
  },
  {
    id: 'meat',
    name: 'Мясные',
    icon: SvgDrumstickBite,
  },
  {
    id: 'ice',
    name: 'Десерты',
    icon: SvgIceCream,
  }
] as Array<CategoryType>

export type CategoryType = {
  id: string
  name: string
  icon: (props: any) => JSX.Element
}