import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import OurWork from '../components/OurWork';
import ReachUs from '../components/ReachUs';
import Services from '../components/Services';
import Slider from '../components/Slider';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import StrengthData from '../components/StrengthData';
import Faq from '../components/Faq';
import OurValue from '../components/OurValue';
import TestimonailData from '../components/TestimonailData';
import GetInTouch from '../components/GetInTouch';

export const homeQuery = graphql`
  query homepage {
    sanitySiteSettings {
      homeSeoTitle
      homeSeoKeywords
      homeSeoMetaDescription
      homeTitle
      homeSubtitle
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

const Index = ({ data }) => {
  const home = data.sanitySiteSettings;
  const page = data.allSanityService;
  return (
    <Layout>
      <Seo
        title={home.homeSeoTitle}
        description={home.homeSeoMetaDescription}
        keywords={home.homeSeoKeywords}
        url={config.siteUrl}
        image={config.image}
      />
      <HomeHero data={home} />
      <Brand data={home.brandIcons} />
      <OurValue data={home.ourValue} />
      <OurWork data={home} />
      <Services
        data={page.edges}
        serviceHeading={home.serviceTitle}
        serviceTitle={home.serviceSubtitle}
      />
      <Slider
        data={home.sliderItems}
        sliderHeading={home.sliderHeading}
        sliderTitle={home.sliderTitle}
      />
      <ReachUs data={home.reachUsText} />
      <Portfolio data={home.portfolio} />
      <StrengthData data={home.features} />
      <Faq data={home.faq} />
      <TestimonailData data={home.testimonialItem} backgroundColor />
      <GetInTouch />
    </Layout>
  );
};
export default Index;
