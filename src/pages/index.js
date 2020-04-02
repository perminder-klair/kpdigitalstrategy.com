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
    sanitySiteSettings {
      title
      autoSubtitle
      redSubtitle
      brandTitle
      brandIcons {
        asset {
          url
        }
      }
      ourValue
      strengthTitle
      strengthSubtitle
      serviceTitle
      serviceSubtitle
      sliderTitle
      sliderSubtitle
      reachUsText
      portfolio {
        portfolioTitle
        portfolioSubtitle
        items {
          portfolioImage {
            asset {
              url
            }
          }
        }
      }
      features {
        featureHeading
        featuresItems {
          logo {
            asset {
              url
            }
          }
          title
          subtitle
        }
      }
      faq {
        faqTitle
        faqSubtitle
        faqQuestion {
          question
          answer
        }
      }
      testimonialItem {
        logo {
          asset {
            url
          }
        }
        title
        subtitle
      }
    }
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
      data: { allSanityService: page, sanitySiteSettings: home },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <HomeHero data={home} />
        <Brand data={home.brandIcons} />
        <OurValue data={home} />
        {/* change Component  name */}
        <ServiceItem data={home} />
        {/* ---------- */}
        <Services data={page.edges} />
        <ReactSlider data={home} />
        <ReachUs data={home} />
        <Portfolio />
        <Strengths data={home.features} />
        <Faq />
        <TestimonailData backgroundColor />
        <GetInTouch />
      </Layout>
    );
  }
}
