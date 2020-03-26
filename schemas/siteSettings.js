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
      title: 'Brand Icons',
      name: 'brandIcons',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      title: 'Our Value',
      name: 'ourValue',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'designPurposeTitle',
      title: 'Design Purpose Item Title',
      type: 'string',
    },
    {
      name: 'designPurposeSubtitle',
      title: 'Design Purpose Subtitle',
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
      title: 'Slider',
      name: 'slider',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'slider' }],
        },
      ],
    },
    {
      name: 'reachUsText',
      title: 'ReachUs Text',
      type: 'string',
    },
    {
      name: 'Portfolio',
      title: 'Portfolio',
      type: 'siteSettingPortfolio',
    },
  ],
};
