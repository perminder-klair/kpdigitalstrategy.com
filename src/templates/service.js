import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';

import ContactHero from '../components/ContactHero';
import Seo from '../components/Seo';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import Products from '../components/Products';
import Strengths from '../components/Strengths';
import ServiceItem from '../components/ServiceItem-old';
import OurValue from '../components/OurValue';
import ReachUs from '../components/ReachUs';
import Layout from '../components/Layout';
import GetInTouch from '../components/GetInTouch';
import TestimonailData from '../components/TestimonailData';

export const serviceQuery = graphql`
  query service($slug: String) {
    sanityService(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      herotitle
      herosubtitle
      product {
        title
        slug {
          current
        }
        Logo {
          asset {
            url
          }
        }
        description
      }
    }
  }
`;

export default class ServicePage extends React.Component {
  render() {
    const {
      data: { sanityService: service },
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
          title={service.herotitle}
          subtitle={service.herosubtitle}
          textarea={false}
        />
        <OurValue />
        <ServiceItem />
        <Products data={service.product} />
        <ReachUs />
        <Portfolio />
        <Strengths />
        <TestimonailData />
        <Brand />
        <GetInTouch />
      </Layout>
    );
  }
}
