export default {
  name: 'ourTeam',
  title: 'Our Team',
  type: 'document',
  fields: [
    {
      name: 'homeHeroTitle',
      title: 'Home Hero title',
      type: 'string',
    },
    {
      name: 'homeHeroSubtitle',
      title: 'Home Hero Subtitle',
      type: 'text',
    },
    {
      name: 'ourValue',
      title: 'Our Value',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'teamInformation',
      title: 'Team Information',
      type: 'teamInformation',
    },
    {
      name: 'reachUsText',
      title: 'ReachUs Text',
      type: 'string',
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
