export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'serviceSeoTitle',
      title: 'Service Seo Title',
      type: 'string',
    },
    {
      name: 'serviceSeoKeywords',
      title: 'Service Seo Keywords',
      type: 'string',
    },
    {
      name: 'serviceSeoMetaDescription',
      title: 'Service Seo Meta Description',
      type: 'text',
    },
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
      name: 'features',
      title: 'Features',
      type: 'features',
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
