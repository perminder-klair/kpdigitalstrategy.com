import React from 'react';
import config from '../utils/config';

import Seo from '../components/Seo';
import OurValue from '../components/OurValue';
import BrandIdentity from '../components/BrandIdentity';
import ContactUs from '../components/ReachUs';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import BlogHeader from '../components/BlogHeader';
import BlogContent from '../components/BlogContent';

export default class IndividualPage extends React.Component {
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
        <img
          src="/images/service/top-image-block@2x.png"
          alt="backgroundImage"
        />
        <BlogHeader />
        <BlogContent />
        <OurValue />
        <BrandIdentity />
        <ContactUs />
      </Layout>
    );
  }
}
