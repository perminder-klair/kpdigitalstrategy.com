import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import FeaturedLogos from '../components/FeaturedLogos';
import SeviceItem from '../components/SeviceItem';
import BookCall from '../components/BookCall';
import Features from '../components/Features';
import OurQualities from '../components/OurQualities';
import BrandIdentity from '../components/BrandIdentity';
import CustomerReviews from '../components/CustomerReviews';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <HomeHero />
        <FeaturedLogos />
        <SeviceItem />
        <BookCall />
        <Features />
        <OurQualities />
        <BrandIdentity />
        <CustomerReviews />
      </Layout>
    );
  }
}
