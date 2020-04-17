import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import CaseStudyFeatures from '../components/CaseStudyFeatures';
// import OurValue from '../components/OurValue';
import BrandIdentity from '../components/BrandIdentity';
// import ContactUs from '../components/ReachUs';
import Layout from '../components/Layout';

export const caseStudyQuery = graphql`
  query caseQuery {
    allSanityCaseStudy {
      edges {
        node {
          slug {
            current
          }
          caseName
          Subtitle
          ourValue
          brandTitle
          brandSubtitle
          reachUsText
          thumbnail {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const CaseStudiesPage = ({ data }) => {
  const casePage = data.allSanityCaseStudy.edges;
  return (
    <Layout>
      <PageHero
        title="Our Case Studies"
        subtitle="Here is Some Of Our Latest Work"
      />
      <CaseStudyFeatures data={casePage} />
      <Seo
        title="Manchester Digital Marketing Agency"
        description="KP Digital Strategy"
        url={config.siteUrl}
        image={config.image}
      />
      {/* <OurValue data={casePage.ourValue} /> */}
      <BrandIdentity data={casePage} />
      {/* <ContactUs /> */}
    </Layout>
  );
};
export default CaseStudiesPage;
