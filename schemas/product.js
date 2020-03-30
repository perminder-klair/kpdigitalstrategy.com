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
    {
      name: 'ourValue',
      title: 'Our Value',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'strengthTitle',
      title: 'Strength Title',
      type: 'string',
    },
    {
      name: 'strengthSubtitle',
      title: 'Strength Subtitle',
      type: 'text',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'features',
    },
    {
      name: 'reachUsText',
      title: 'ReachUs Text',
      type: 'string',
    },
    {
      name: 'portfolio',
      title: 'Portfolio',
      type: 'portfolio',
    },
    {
      name: 'brandTitle',
      title: 'Brand Title',
      type: 'string',
    },
    {
      name: 'brandIcons',
      title: 'Brand Icons',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'testimonialItem',
      title: 'Testimonial Item',
      type: 'testimonialItem',
    },
    {
      name: 'ourGrowthTitle',
      title: 'Our Growth Title',
      type: 'string',
    },
    {
      name: 'ourGrowthSubtitle',
      title: 'Our Growth Subtitle',
      type: 'string',
    },
    {
      name: 'ourGrowthdescription',
      title: 'Our Growth Description',
      type: 'text',
    },
  ],
};
