import SevenUpImage from "../../../assets/Drinks/SoftDrink/7UP.jpg";
import CocaColaImage from "../../../assets/Drinks/SoftDrink/Coca.jpg";
import FantaImage from "../../../assets/Drinks/SoftDrink/Fanta.jpg";
import SpriteImage from "../../../assets/Drinks/SoftDrink/Sprite.jpg";

import IcedAmericanoImage from "../../../assets/Drinks/HotDrink/iced-americano.jpg";
import HotChocolateImage from "../../../assets/Drinks/HotDrink/hot-chocolate.jpg";
import MochaLatteImage from "../../../assets/Drinks/HotDrink/mocha-latte.jpg";
import EspressoImage from "../../../assets/Drinks/HotDrink/Espresso.jpg"; // Changed to Image to maintain consistency

export const products = [
  {
    id: 1,
    title: "Iced Americano",
    category: "Hot drink",
    price: 5.99,
    image: IcedAmericanoImage,
    desc: "A rich and refreshing iced Americano made with high-quality coffee.",
  },
  {
    id: 2,
    title: "Hot Chocolate",
    category: "Hot drink",
    price: 22.99,
    image: HotChocolateImage,
    desc: "A classic hot chocolate topped with whipped cream and chocolate shavings.",
  },
  {
    id: 3,
    title: "Mocha Latte",
    category: "Hot drink",
    price: 20.99,
    image: MochaLatteImage,
    desc: "A creamy mocha latte made with espresso and steamed milk.",
  },
  {
    id: 4,
    title: "Espresso",
    category: "Hot drink",
    price: 7.99,
    image: EspressoImage,
    desc: "A rich shot of espresso with a smooth finish.",
  },
  {
    id: 5,
    title: "7 UP",
    category: "Soft drink",
    price: 5,
    image: SevenUpImage,
    desc: "7-Up Soft Drink contains no caffeine and now has no artificial ingredients or preservatives.",
  },
  {
    id: 6,
    title: "Coca-Cola",
    category: "Soft drink",
    price: 5,
    image: CocaColaImage,
    desc: "Coca-Cola Original taste is the world's favourite soft drink.",
  },
  {
    id: 7,
    title: "Fanta",
    category: "Soft drink",
    price: 5,
    image: FantaImage,
    desc: "Fanta is the fruity orange drink that's great for any occasion.",
  },
  {
    id: 8,
    title: "Sprite",
    category: "Soft drink",
    price: 7.99,
    image: SpriteImage,
    desc: "Sprite is a lemon-lime flavored soft drink with a crisp, clean taste.",
  },
];
