import { heartOutline, homeOutline, shirtOutline } from "ionicons/icons";

import Categories from "./Categories";
import Favourites from "./Favourites";
import ProductType from "./ProductType";
import Category from "./Category";

export const pages = [

  {
    href: "/categories",
    icon: shirtOutline,
    component: Categories,
    default: true,
    isTab: true
  },
  {
    href: "/categories/:category/:type",
    component: ProductType,
    default: false,
    isTab: false
  },
  {
    href: "/categories/:category",
    icon: shirtOutline,
    component: Category,
    default: true,
    isTab: false
  },
  {
    href: "/favourites",
    icon: heartOutline,
    component: Favourites,
    default: false,
    isTab: true
  }
];