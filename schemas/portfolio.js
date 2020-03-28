export default {
  title: 'Portfolio',
  name: 'portfolio',
  type: 'object',
  fields: [
    {
      name: 'portfolioTitle',
      title: 'Portfolio Title',
      type: 'string',
    },
    {
      name: 'portfolioSubtitle',
      title: 'Portfolio Subtitle',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Image',
      type: 'array',
      of: [
        {
          title: 'Items',
          type: 'portfolioItemImage',
        },
      ],
    },
  ],
};
