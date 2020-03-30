export default {
  title: 'Testimonial Item',
  name: 'testimonialItem',
  type: 'object',
  fields: [
    {
      name: 'testimonialItem',
      title: 'Testimonial Item',
      type: 'array',
      of: [
        {
          title: 'Testimonial Item',
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
              title: 'Subtitle',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
