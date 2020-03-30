export default {
  title: 'Features',
  name: 'features',
  type: 'object',
  fields: [
    {
      name: 'featureHeading',
      title: 'Feature Heading',
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
