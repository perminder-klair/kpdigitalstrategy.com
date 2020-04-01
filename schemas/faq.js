export default {
  title: 'Faq',
  name: 'faq',
  type: 'object',
  fields: [
    {
      name: 'faqTitle',
      title: 'Faq Title',
      type: 'string',
    },
    {
      name: 'faqSubtitle',
      title: 'Faq Subtitle',
      type: 'string',
    },
    {
      name: 'faqQuestion',
      title: 'Faq Question',
      type: 'array',
      of: [
        {
          title: 'faq Question',
          type: 'faqQuestion',
        },
      ],
    },
  ],
};
