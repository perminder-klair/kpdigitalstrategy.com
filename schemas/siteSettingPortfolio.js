export default {
  title: 'Site Setting Portfolio',
  name: 'siteSettingPortfolio',
  type: 'object',
  fields: [
    {
      name: 'portfolioTitle',
      title: 'Portfolio Title',
      type: 'string',
    },
    {
      name: 'portfolioSubtitle',
      title: 'Portfolio Subtitle',
      type: 'string',
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Items',
          type: 'siteSettingPortfolioItem',
        },
      ],
    },
  ],
};
