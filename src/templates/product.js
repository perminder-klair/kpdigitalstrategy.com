import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';

import ContactHero from '../components/ContactHero';
import Seo from '../components/Seo';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import StrengthData from '../components/StrengthData';
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
      ourValue
      strengthTitle
      strengthSubtitle
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
      brandIcons {
        asset {
          url
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
        <OurValue data={product.ourValue} />
        <ServiceItem data={product} />
        <StrengthData data={product.features} />
        <ReachUs data={product.reachUsText} />
        <Portfolio data={product.portfolio} />
        <Brand data={product.brandIcons} />
        <TestimonailData data={product.testimonialItem} />
        <GetInTouch />
      </Layout>
    );
  }
}
