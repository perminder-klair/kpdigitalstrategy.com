export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'autoSubtitle',
      title: 'Auto Subtitle',
      type: 'string',
    },
    {
      name: 'redSubtitle',
      title: 'Red Subtitle',
      type: 'string',
    },
    {
      name: 'brandTitle',
      title: 'Brand Title',
      type: 'string',
    },
    {
      name: 'brandIcons',
      title: 'Brand Icons',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'ourValue',
      title: 'Our Value',
      type: 'array',
      of: [{ title: 'Item', type: 'string' }],
    },
    {
      name: 'strengthTitle',
      title: 'Strength Title',
      type: 'string',
    },
    {
      name: 'strengthSubtitle',
      title: 'Strength Subtitle',
      type: 'text',
    },
    {
      name: 'serviceTitle',
      title: 'Service  Title',
      type: 'string',
    },
    {
      name: 'serviceSubtitle',
      title: 'Service  Subtitle',
      type: 'string',
    },
    {
      name: 'sliderTitle',
      title: 'Slider Title',
      type: 'string',
    },
    {
      name: 'sliderSubtitle',
      title: 'Slider Subtitle',
      type: 'string',
    },
    {
      title: 'Slider Items',
      name: 'sliderItems',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    },
    {
      name: 'reachUsText',
      title: 'ReachUs Text',
      type: 'string',
    },
    {
      name: 'portfolio',
      title: 'Portfolio',
      type: 'portfolio',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'features',
    },
    {
      name: 'faq',
      title: 'Faq',
      type: 'faq',
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
    {
      name: 'aboutPage',
      title: 'About Page',
      type: 'aboutUs',
    },
    {
      name: 'digitalMainTitle',
      title: 'Digital Main Title',
      type: 'string',
    },
    {
      name: 'digitalMainSubtitle',
      title: 'Digital Main Subtitle',
      type: 'string',
    },
    {
      name: 'digitalOurValue',
      title: 'Digital Our Value',
      type: 'array',
      of: [{ title: 'Item', type: 'string' }],
    },
    {
      name: 'blogMainTitle',
      title: 'Blog Main Title',
      type: 'string',
    },
    {
      name: 'blogMainSubtitle',
      title: 'Blog Main Subtitle',
      type: 'string',
    },
    {
      name: 'blogOurValue',
      title: 'Blog Our Value',
      type: 'array',
      of: [{ title: 'Item', type: 'string' }],
    },
    {
      name: 'blogFaq',
      title: 'Blog Faq',
      type: 'faq',
    },
    {
      name: 'blogReachUsText',
      title: 'Blog ReachUs Text',
      type: 'string',
    },
    {
      name: 'blogBrandIdentity',
      title: 'Blog Brand Identity',
      type: 'brandIdentity',
    },
    {
      name: 'caseMainTitle',
      title: 'Case Main Title',
      type: 'string',
    },
    {
      name: 'caseMainSubtitle',
      title: 'Case Main Subtitle',
      type: 'string',
    },
    {
      name: 'caseOurValue',
      title: 'Case Our Value',
      type: 'array',
      of: [{ title: 'Item', type: 'string' }],
    },
    {
      name: 'CaseBrandIdentity',
      title: 'Case Brand Identity',
      type: 'brandIdentity',
    },
    {
      name: 'CaseReachUsText',
      title: 'Case ReachUs Text',
      type: 'string',
    },
  ],
};
