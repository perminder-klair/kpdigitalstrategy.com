import React from 'react';
import config from '../utils/config';

import Seo from '../components/Seo';
import OurValue from '../components/OurValue';
// import ImageCard from "../components/ImageCard";
import BrandIdentity from '../components/BrandIdentity';
import ContactUs from '../components/ReachUs';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

export default class CaseStudiesPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHero
          title="Our Case Studies"
          subtitle="Here is Some Of Our Latest Work"
        />
        <section className="columns is-gapless is-0 is-multiline">
          {/*
          <ImageCard image="/images/dummy/case-study-image.png" alt="test" />
          <ImageCard
            image="/images/dummy/steven-shaw-website@3x.png"
            alt="test"
          />
          <ImageCard
            image="/images/dummy/commbus-website-mockup@2x.png"
            alt="test"
          />
          <ImageCard
            image="/images/dummy/learn-realm-website-design.png"
            alt="test"
          />
        */}
        </section>

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
