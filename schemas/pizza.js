import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon,

  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the Pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // let's us mark a hotspot on image which is always included
      },
      description: 'Photo of the Pizza',
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
    // TODO: Toppings
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      inputComponent: PriceInput,
      description: 'Price of the Pizza in cents',
      validation: (Rule) => Rule.min(1000), // min $10
      // TODO: Add custom component
    },
  ],
  // This should show up in the CMS
  preview: {
    select: {
      name: 'name',
      image: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ name, image, ...toppings }) => ({
      title: name,
      media: image,
      subtitle: Object.values(toppings).filter(Boolean).join(', '),
    }),
  },
};
