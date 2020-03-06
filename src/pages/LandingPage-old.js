import React from 'react';
import config from '../utils/config';

import ContactHero from '../components/ContactHero';
import Seo from '../components/Seo';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import Features from '../components/Features';
import Slider from '../components/Slider';
import ReachUs from '../components/ReachUs';
import Strengths from '../components/Strengths';
import ServiceItem from '../components/ServiceItem-old';
import Faq from '../components/Faq';
import OurValue from '../components/OurValue';
import Layout from '../components/Layout';
import Testimonail from '../components/TestimonailData';
import TestimonailData from '../components/TestimonailData';

export default class LandingPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <ContactHero
          title="Digital Design
          Agency"
          subtitle="We align design, marketing and sales to empower business growth."
          textarea={false}
        />
        <OurValue />
        <ServiceItem />
        <Features />
        <Slider />
        <ReachUs />
        <Portfolio />
        <Strengths />
        <Faq />
        <TestimonailData />
        <Brand />
      </Layout>
    );
  }
}
