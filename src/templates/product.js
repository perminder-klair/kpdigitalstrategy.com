import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';

import ContactHero from '../components/ContactHero';
import Seo from '../components/Seo';
import Portfolio from '../components/Portfolio';
import Brand from '../components/Brand';
import Feature from '../components/Feature';
import OurWork from '../components/OurWork';
import OurValue from '../components/OurValue';
import ReachUs from '../components/ReachUs';
import Layout from '../components/Layout';
import OurInformation from '../components/OurInformation';
import TestimonailData from '../components/TestimonailData';

export const productQuery = graphql`
  query product($slug: String) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      productSeoTitle
      productSeoKeywords
      productSeoMetaDescription
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
          alternativeText
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
const ProductPage = ({ data }) => {
  const product = data.sanityProduct;
  return (
    <Layout>
      <Seo
        title={product.productSeoTitle}
        description={product.productSeoMetaDescription}
        keywords={product.productSeoKeywords}
        url={config.siteUrl}
        image={config.image}
      />
      <ContactHero
        title={product.herotitle}
        subtitle={product.herosubtitle}
        textarea={false}
      />
      <OurValue data={product.ourValue} />
      <OurWork data={product} />
      <Feature data={product.features} />
      <ReachUs data={product.reachUsText} />
      <Portfolio data={product.portfolio} />
      <Brand data={product.brandIcons} />
      <TestimonailData data={product.testimonialItem} />
      <OurInformation />
    </Layout>
  );
};
export default ProductPage;
