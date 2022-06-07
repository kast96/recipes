import { svgDrumstickBite } from "../images/categories/svgDrumstickBite";
import { SvgHamburger } from "../images/categories/SvgHamburger";
import { svgIceCream } from "../images/categories/svgIceCream";
import { svgPepperHot } from "../images/categories/svgPepperHot";
import { svgPizzaSlice } from "../images/categories/svgPizzaSlice";

export const categoriesData = [
  {
    id: 'burgers',
    name: 'Burgers',
    icon: SvgHamburger,
  },
  {
    id: 'meat',
    name: 'Meat',
    icon: svgDrumstickBite,
  },
  {
    id: 'pepper',
    name: 'Pepper',
    icon: svgPepperHot,
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: svgPizzaSlice,
  },
  {
    id: 'ice',
    name: 'Ice',
    icon: svgIceCream,
  }
] as Array<CategoryType>

export type CategoryType = {
  id: string
  name: string
  icon: (props: any) => JSX.Element
}