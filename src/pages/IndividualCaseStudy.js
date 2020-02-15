import React from 'react';
import Seo from '../components/Seo';
import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import HeroCase from '../components/HeroCase';
import Solution from '../components/Solution';

export default class IndividualCaseStudy extends React.Component {
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
          title="Branding.Web design.UX"
          subtitle="EPIC Risk Management"
        />
        <HeroCase />
        <Solution />
      </Layout>
    );
  }
}
