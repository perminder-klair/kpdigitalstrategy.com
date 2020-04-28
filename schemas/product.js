export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productSeoTitle',
      title: 'Product Seo Title',
      type: 'string',
    },
    {
      name: 'productSeoKeywords',
      title: 'Product Seo Keywords',
      type: 'string',
    },
    {
      name: 'productSeoMetaDescription',
      title: 'Product Seo Meta Description',
      type: 'text',
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
      type: 'array',
      of: [
        {
          title: 'Testimonial Item',
          type: 'testimonialItem',
        },
      ],
    },
    {
      name: 'sliderItem',
      title: 'Slider Item',
      type: 'sliderItem',
    },
  ],
};
