import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';
import ContactHero from '../components/ContactHero';
import Seo from '../components/Seo';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
// import Features from '../components/Features';
// import Slider from '../components/Slider';
import ReachUs from '../components/ReachUs';
import StrengthData from '../components/StrengthData';
import ServiceItem from '../components/ServiceItem-old';
import Faq from '../components/Faq';
// import OurValue from '../components/OurValue';
import Layout from '../components/Layout';
import TestimonailData from '../components/TestimonailData';

export const digitalPageQuery = graphql`
  query digitalPageQuery($slug: String) {
    sanityDigitalService(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      herotitle
      herosubtitle
      ourValues
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
      brandIcons {
        asset {
          url
        }
      }
    }
  }
`;

export default class LandingPage extends React.Component {
  render() {
    const {
      data: { sanityDigitalService: digital },
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
          title={digital.herotitle}
          subtitle={digital.herosubtitle}
          textarea={false}
        />
        {/* <OurValue data={digital} /> */}
        <ServiceItem data={digital} />
        {/* <Features />
        <Slider /> */}
        <ReachUs data={digital} />
        <Portfolio data={digital.portfolio} />
        <StrengthData data={digital.features} />
        <Faq data={digital.faq} />
        <TestimonailData data={digital.testimonialItem} />
        <Brand data={digital.brandIcons} />
      </Layout>
    );
  }
}
