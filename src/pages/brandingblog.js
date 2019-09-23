import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CategoryHero from '../components/CategoryHero';
import BlogContent from '../components/BlogContent';

export default class BrandingBlog extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <CategoryHero />
        <BlogContent />
      </Layout>
    );
  }
}
