import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';

import ContactHero from '../components/ContactHero';
import Seo from '../components/Seo';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import Products from '../components/Products';
import Feature from '../components/Feature';
import OurWork from '../components/OurWork';
import OurValue from '../components/OurValue';
import ReachUs from '../components/ReachUs';
import Layout from '../components/Layout';
import OurInformation from '../components/OurInformation';
import TestimonailData from '../components/TestimonailData';

export const serviceQuery = graphql`
  query service($slug: String) {
    sanitySiteSettings {
      productHeading
      productTitle
    }
    sanityService(slug: { current: { eq: $slug } }) {
      serviceSeoTitle
      serviceSeoKeywords
      serviceSeoMetaDescription
      slug {
        current
      }
      herotitle
      herosubtitle
      ourValue
      strengthTitle
      strengthSubtitle
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
      testimonialItem {
        logo {
          asset {
            url
          }
        }
        title
        subtitle
      }
      brandTitle
      brandIcons {
        asset {
          url
        }
      }
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

const ServicePage = ({ data }) => {
  const page = data.sanitySiteSettings;
  const service = data.sanityService;
  return (
    <Layout>
      <Seo
        title={service.serviceSeoTitle}
        description={service.serviceSeoMetaDescription}
        keywords={service.serviceSeoKeywords}
        url={config.siteUrl}
        image={config.image}
      />
      <ContactHero
        title={service.herotitle}
        subtitle={service.herosubtitle}
        textarea={false}
      />
      <OurValue data={service.ourValue} />
      <OurWork data={service} />
      <Products
        data={service.product}
        heading={page.productHeading}
        title={page.productTitle}
      />
      <ReachUs data={service.reachUsText} />
      <Portfolio data={service.portfolio} />
      <Feature data={service.features} />
      <TestimonailData data={service.testimonialItem} />
      <Brand data={service.brandIcons} />
      <OurInformation />
    </Layout>
  );
};
export default ServicePage;
