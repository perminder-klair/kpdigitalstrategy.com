import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';
import ContactHero from '../components/ContactHero';
import Seo from '../components/Seo';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import Services from '../components/ServiceItems';
import Slider from '../components/Slider';
import ReachUs from '../components/ReachUs';
import StrengthData from '../components/StrengthData';
import ServiceItem from '../components/ServiceItem-old';
import Faq from '../components/Faq';
import OurValue from '../components/OurValue';
import Layout from '../components/Layout';
import TestimonailData from '../components/TestimonailData';

export const digitalPageQuery = graphql`
  query digitalPageQuery($slug: String) {
    sanityDigitalService(slug: { current: { eq: $slug } }) {
      individualDigitalSeoTitle
      individualDigitalSeoKeywords
      individualDigitalSeoMetaDescription
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
      sliderHeading
      sliderTitle
      sliderItems {
        slug {
          current
        }
        sliderItem {
          image {
            asset {
              url
            }
          }
          title
        }
      }
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

export default class digitalService extends React.Component {
  render() {
    const {
      data: { allSanityService: page, sanityDigitalService: digital },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={digital.individualDigitalSeoTitle}
          description={digital.individualDigitalSeoMetaDescription}
          keywords={digital.individualDigitalSeoKeywords}
          url={config.siteUrl}
          image={config.image}
        />
        <ContactHero
          title={digital.herotitle}
          subtitle={digital.herosubtitle}
          textarea={false}
        />
        <OurValue data={digital.ourValues} />
        <ServiceItem data={digital} />
        <Services
          data={page.edges}
          serviceHeading={digital.serviceTitle}
          serviceTitle={digital.serviceSubtitle}
        />
        <Slider
          data={digital.sliderItems}
          sliderHeading={digital.sliderHeading}
          sliderTitle={digital.sliderTitle}
        />
        <ReachUs data={digital.reachUsText} />
        <Portfolio data={digital.portfolio} />
        <StrengthData data={digital.features} />
        <Faq data={digital.faq} />
        <TestimonailData data={digital.testimonialItem} />
        <Brand data={digital.brandIcons} />
      </Layout>
    );
  }
}
