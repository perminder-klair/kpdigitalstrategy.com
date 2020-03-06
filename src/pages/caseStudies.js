import React from 'react';
import config from '../utils/config';

import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import CaseStudyFeatures from '../components/CaseStudyFeatures';
import OurValue from '../components/OurValue';
import BrandIdentity from '../components/BrandIdentity';
import ContactUs from '../components/ReachUs';
import Layout from '../components/Layout';

export default class CaseStudiesPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHero
          title="Our Case Studies"
          subtitle="Here is Some Of Our Latest Work"
        />
        <CaseStudyFeatures />
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <OurValue />
        <BrandIdentity />
        <ContactUs />
      </Layout>
    );
  }
}
