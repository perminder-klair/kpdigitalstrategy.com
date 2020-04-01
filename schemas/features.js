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
          title: 'Features Item',
          type: 'featuresItem',
        },
      ],
    },
  ],
};
