module.exports = {
  DEBUG: process.env.NODE_ENV === 'development',

  siteName: 'KP Digital Strategy',
  author: 'KP Digital',
  description: 'Manchester Digital Marketing Agency',
  siteUrl: 'https://www.kpdigitalstrategy.com/',
  image: '/images/poster.png',

  twitter: '',
  facebook: '',
  instagram: '',
  linkedin: '',

  type: 'website',
  googleAnalytics: '',
  backgroundColor: '#e0e0e0',
  themeColor: '#FB3640',

  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || 'v4zuhgl8',
    dataset: process.env.GATSBY_SANITY_DATASET || 'production',
  },
};
