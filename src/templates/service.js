import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';

import ContactHero from '../components/ContactHero';
import Seo from '../components/Seo';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import Products from '../components/Products';
import StrengthData from '../components/StrengthData';
import ServiceItem from '../components/ServiceItem-old';
import OurValue from '../components/OurValue';
import ReachUs from '../components/ReachUs';
import Layout from '../components/Layout';
import GetInTouch from '../components/GetInTouch';
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

export default class ServicePage extends React.Component {
  render() {
    const {
      data: { sanityService: service },
    } = this.props;
    const {
      data: { sanitySiteSettings: page },
    } = this.props;
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
        <ServiceItem data={service} />
        <Products
          data={service.product}
          heading={page.productHeading}
          title={page.productTitle}
        />
        <ReachUs data={service.reachUsText} />
        <Portfolio data={service.portfolio} />
        <StrengthData data={service.features} />
        <TestimonailData data={service.testimonialItem} />
        <Brand data={service.brandIcons} />
        <GetInTouch />
      </Layout>
    );
  }
}
