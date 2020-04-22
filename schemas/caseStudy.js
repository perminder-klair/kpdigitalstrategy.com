export default {
  name: 'caseStudy',
  title: 'Case',
  type: 'document',
  fields: [
    {
      name: 'caseName',
      title: 'Case Name',
      type: 'string',
    },
    {
      name: 'Subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'caseName',
        maxLength: 96,
      },
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail ',
      type: 'image',
    },
    {
      name: 'ourValue',
      title: 'Our Value',
      type: 'array',
      of: [{ title: 'Item', type: 'string' }],
    },
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
      name: 'reachUsText',
      title: 'ReachUs Text',
      type: 'string',
    },
    {
      name: 'adddetails',
      title: 'Add Details',
      type: 'array',
      of: [{ type: 'details' }],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'solutionParagraph',
      title: 'Solution Paragraph',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'gallery' }],
    },
    {
      name: 'ContactUsText',
      title: 'Contact Us Text',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'Thumbnail',
    },
  },
};
