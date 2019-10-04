import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BlogHero from '../components/BlogHero';
import MarketingAdvice from '../components/MarketingAdvice';
import FeaturesArticles from '../components/FeaturesArticles';
import KnowlegeCenter from '../components/KnowlegeCenter';
import BrandIdentity from '../components/BrandIdentity';
import BookCall from '../components/BookCall';

export default class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <BlogHero />
        <MarketingAdvice />
        <FeaturesArticles />
        <KnowlegeCenter />
        <BrandIdentity />
        <BookCall />
      </Layout>
    );
  }
}
