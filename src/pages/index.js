import { cartOutline, heartOutline, homeOutline } from "ionicons/icons";

import Home from "./Home";
import Cart from "./Cart";
import Favourites from "./Favourites";

export const pages = [
  {
    href: "/home",
    icon: homeOutline,
    component: Home,
    default: true
  },
  {
    href: "/cart",
    icon: cartOutline,
    component: Cart,
    default: false
  },
  {
    href: "/favourites",
    icon: heartOutline,
    component: Favourites,
    default: false
  }
];