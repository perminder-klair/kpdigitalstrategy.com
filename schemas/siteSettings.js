export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'autoSubtitle',
      title: 'Auto Subtitle',
      type: 'string',
    },
    {
      name: 'redSubtitle',
      title: 'Red Subtitle',
      type: 'string',
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
      name: 'serviceTitle',
      title: 'Service  Title',
      type: 'string',
    },
    {
      name: 'serviceSubtitle',
      title: 'Service  Subtitle',
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
