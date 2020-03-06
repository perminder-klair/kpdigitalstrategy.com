import React from 'react';
import Seo from '../components/Seo';
import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import BrandHeaderCase from '../components/BrandHeaderCase';
import SectionCase from '../components/SectionCase';
import PortfolioShowCase from '../components/PortfolioShowCase';

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
        <BrandHeaderCase />
        <SectionCase />
        <PortfolioShowCase />
      </Layout>
    );
  }
}
