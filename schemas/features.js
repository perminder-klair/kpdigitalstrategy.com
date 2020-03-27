export default {
  title: 'Features',
  name: 'features',
  type: 'object',
  fields: [
    {
      name: 'featureTitle',
      title: 'Feature Title',
      type: 'string',
    },
    {
      name: 'featureSubtitle',
      title: 'Feature Subtitle',
      type: 'string',
    },
    {
      title: 'Features Items',
      name: 'featuresItems',
      type: 'array',
      of: [
        {
          title: 'features Item',
          name: 'features Item',
          type: 'object',
          fields: [
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'SubTitle',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
