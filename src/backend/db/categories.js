import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Thịt, trứng',
    imageSrc: ['/Assets/Egg.jpg'],
  },
  {
    _id: uuid(),
    categoryName: 'Ngũ cốc',
    imageSrc: ['/Assets/Grain.jpg'],
  },
  {
    _id: uuid(),
    categoryName: 'Rau',
    imageSrc: ['/Assets/vegetable (2).jpg'],
  },
  {
    _id: uuid(),
    categoryName: 'Trái cây',
    imageSrc: ['/Assets/Apple.jpg'],
  },
];
