export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'individualCaseSeoTitle',
      title: 'Individual Case Seo Title',
      type: 'string',
    },
    {
      name: 'individualCaseSeoKeywords',
      title: 'Individual Case Seo Keywords',
      type: 'string',
    },
    {
      name: 'individualCaseSeoMetaDescription',
      title: 'Individual Case Seo Meta Description',
      type: 'text',
    },
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
      title: 'individualCaseSeoTitle',
      subtitle: 'slug.current',
      media: 'thumbnail',
    },
  },
};
