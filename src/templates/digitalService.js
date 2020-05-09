import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';
import ContactHero from '../components/ContactHero';
import Seo from '../components/Seo';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import Services from '../components/Services';
import Slider from '../components/Slider';
import ReachUs from '../components/ReachUs';
import Feature from '../components/Feature';
import OurWork from '../components/OurWork';
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
          alternativeText
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

const digitalService = ({ data }) => {
  const page = data.allSanityService;
  const digital = data.sanityDigitalService;
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
      <OurWork data={digital} />
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
      <Feature data={digital.features} />
      <Faq data={digital.faq} />
      <TestimonailData data={digital.testimonialItem} />
      <Brand data={digital.brandIcons} />
    </Layout>
  );
};
export default digitalService;
