import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import BrandHeaderCase from '../components/BrandHeaderCase';
import SectionCase from '../components/SectionCase';
import PortfolioShowCase from '../components/PortfolioShowCase';

export const individualCaseQuery = graphql`
  query individualPageQuery($slug: String) {
    sanityCaseStudy(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      adddetails {
        title
        subtitle
      }
      images {
        asset {
          url
        }
      }
      solutionParagraph
      gallery {
        isLarge
        image {
          asset {
            url
          }
        }
      }
      ContactUsText
    }
  }
`;

export default class IndividualCaseStudy extends React.Component {
  render() {
    const {
      data: { sanityCaseStudy: individual },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <PageHero
          title="Branding.Web design.UX"
          subtitle="EPIC Risk Management"
        />
        <BrandHeaderCase data={individual} />
        <SectionCase data={individual} />
        <PortfolioShowCase data={individual} />
      </Layout>
    );
  }
}
