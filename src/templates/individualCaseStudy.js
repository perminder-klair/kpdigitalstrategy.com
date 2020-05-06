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
      individualCaseSeoTitle
      individualCaseSeoKeywords
      individualCaseSeoMetaDescription
      caseName
      Subtitle
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
        alternativeText
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

const IndividualCaseStudy = ({ data }) => {
  const individual = data.sanityCaseStudy;
  return (
    <Layout>
      <Seo
        title={individual.individualCaseSeoTitle}
        description={individual.individualCaseSeoMetaDescription}
        keywords={individual.individualCaseSeoKeywords}
        url={config.siteUrl}
        image={config.image}
      />
      <PageHero title={individual.caseName} subtitle={individual.Subtitle} />
      <BrandHeaderCase data={individual} />
      <SectionCase data={individual} />
      <PortfolioShowCase data={individual} />
    </Layout>
  );
};
export default IndividualCaseStudy;
