import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import OurValue from '../components/OurValue';
import ServiceHero from '../components/ServiceHero';

export default class OverViewPage extends React.Component {
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
          title="Our digital marketing services"
          subtitle="We align design, marketing and sales to make it easier than every to reach new business heights. "
        />
        <ServiceHero />
        <OurValue />
      </Layout>
    );
  }
}
