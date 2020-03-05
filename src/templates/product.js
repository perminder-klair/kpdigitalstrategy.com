import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';

import ContactHero from '../components/ContactHero';
import Seo from '../components/Seo';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import Strengths from '../components/Strengths';
import ServiceItem from '../components/ServiceItem-old';
import OurValue from '../components/OurValue';
import ReachUs from '../components/ReachUs';
import Layout from '../components/Layout';
import GetInTouch from '../components/GetInTouch';
import TestimonailData from '../components/TestimonailData';

export const productQuery = graphql`
  query product($slug: String) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      herotitle
      herosubtitle
    }
  }
`;

export default class ProductPage extends React.Component {
  render() {
    const {
      data: { sanityProduct: product },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <ContactHero
          title={product.herotitle}
          subtitle={product.herosubtitle}
          textarea={false}
        />
        <OurValue />
        <ServiceItem />
        <Strengths />
        <ReachUs />
        <Portfolio />
        <Brand />
        <TestimonailData />

        <GetInTouch />
      </Layout>
    );
  }
}
