import React from 'react';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

export default class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <PageHero
          title="Our design & marketing advice centre"
          subtitle="A collection of resources to support your business growth"
        />
      </Layout>
    );
  }
}
