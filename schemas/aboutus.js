export default {
  name: 'aboutUs',
  title: 'About Us',
  type: 'object',
  fields: [
    {
      name: 'aboutSeoTitle',
      title: 'About Seo Title',
      type: 'string',
    },
    {
      name: 'aboutSeoKeywords',
      title: 'About Seo Keywords',
      type: 'string',
    },
    {
      name: 'aboutSeoMetaDescription',
      title: 'About Seo Meta Description',
      type: 'text',
    },
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
  ],
};
