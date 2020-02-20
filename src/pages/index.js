import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import ServiceItem from '../components/ServiceItem-old';
import ReachUs from '../components/ReachUs';
import Services from '../components/ServiceItems';
import ReactSlider from '../components/Slider';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import Strengths from '../components/Strengths';
import Faq from '../components/Faq';
import OurValue from '../components/OurValue';
import TestimonailData from '../components/TestimonailData';
import GetInTouch from '../components/GetInTouch';

export const homeQuery = graphql`
  query homepage {
    allSanityService(sort: { fields: Order }) {
      edges {
        node {
          Order
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
  }
`;

export default class IndexPage extends React.Component {
  render() {
    const {
      data: { allSanityService: page },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <HomeHero />
        <Brand />
        <OurValue />
        {/* change Component  name */}
        <ServiceItem />
        {/* ---------- */}
        <Services data={page.edges} />
        <ReactSlider />
        <ReachUs />
        <Portfolio />
        <Strengths />
        <Faq />
        <TestimonailData />
        <GetInTouch />
      </Layout>
    );
  }
}
