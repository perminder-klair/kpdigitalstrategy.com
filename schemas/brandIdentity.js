export default {
  title: 'Brand Identity',
  name: 'brandIdentity',
  type: 'object',
  fields: [
    {
      name: 'brandIdentityTitle',
      title: 'Brand Identity Title',
      type: 'string',
    },
    {
      name: 'brandIdentitySubtitle',
      title: 'Brand Identity Subtitle',
      type: 'string',
    },
    {
      name: 'brandIdentityItem',
      title: 'Brand Identity Item',
      type: 'array',
      of: [
        {
          type: 'brandIdentityItem',
        },
      ],
    },
  ],
};
