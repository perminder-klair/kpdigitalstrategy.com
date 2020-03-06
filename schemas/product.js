export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
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
      type: 'string',
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
  ],
};