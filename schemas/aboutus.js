export default {
  name: 'aboutUs',
  title: 'About Us',
  type: 'object',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    },
    {
      name: 'ourValues',
      title: 'Our Values',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'team',
        },
      ],
    },
    {
      name: 'reachUsText',
      title: 'Reach Us Text',
      type: 'string',
    },
  ],
};
