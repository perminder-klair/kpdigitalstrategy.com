export default {
  name: 'digitalService',
  title: 'Digital Service',
  type: 'document',
  fields: [
    {
      name: 'individualDigitalSeoTitle',
      title: 'Individual Digital Seo Title',
      type: 'string',
    },
    {
      name: 'individualDigitalSeoKeywords',
      title: 'Individual Digital Seo Keywords',
      type: 'string',
    },
    {
      name: 'individualDigitalSeoMetaDescription',
      title: 'Individual Digital Seo Meta Description',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'Thumbnail',
      title: 'Thumbnail',
      type: 'image',
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
      name: 'ourValues',
      title: 'Our Values',
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
      name: 'serviceTitle',
      title: 'Service Title',
      type: 'string',
    },
    {
      name: 'serviceSubtitle',
      title: 'Service Subtitle',
      type: 'string',
    },
    {
      title: 'Slider Items',
      name: 'sliderItems',
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
      name: 'faq',
      title: 'Faq',
      type: 'faq',
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
  ],
};
