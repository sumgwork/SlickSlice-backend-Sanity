import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: `Topping's Name`,
      type: 'string',
      description: 'Name of the Topping',
    },
    {
      name: 'vegetarian',
      title: `Vegetarian`,
      type: 'boolean',
      description: 'Is this topping suitable for vegetarians?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  // This should show up in the CMS
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''} `,
    }),
  },
};
