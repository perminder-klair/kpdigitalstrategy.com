export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      title: 'order',
      name: 'Order',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'logo',
      name: 'Logo',
      type: 'image',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      name: 'herotitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'herosubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    },
    {
      title: 'Product',
      name: 'product',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    },
  ],
};