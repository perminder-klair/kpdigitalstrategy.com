import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import CaseStudyFeatures from '../components/CaseStudyFeatures';
import OurValue from '../components/OurValue';
import BrandIdentity from '../components/BrandIdentity';
import ContactUs from '../components/ReachUs';
import Layout from '../components/Layout';

export const caseStudyQuery = graphql`
  query caseQuery {
    sanitySiteSettings {
      caseSeoTitle
      caseSeoMetaDescription
      caseSeoKeywords
      caseMainTitle
      caseMainSubtitle
      caseOurValue
      CaseBrandIdentity {
        brandIdentityTitle
        brandIdentitySubtitle
        brandIdentityItem {
          logo {
            asset {
              url
            }
          }
          hoverLogo {
            asset {
              url
            }
          }
          title
        }
      }
      CaseReachUsText
    }
    allSanityCaseStudy {
      edges {
        node {
          slug {
            current
          }
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
  const CaseSetting = data.sanitySiteSettings;
  const casePage = data.allSanityCaseStudy.edges;
  return (
    <Layout>
      <Seo
        title={CaseSetting.caseSeoTitle}
        description={CaseSetting.caseSeoMetaDescription}
        keywords={CaseSetting.caseSeoKeywords}
        url={config.siteUrl}
        image={config.image}
      />
      <PageHero
        title={CaseSetting.caseMainTitle}
        subtitle={CaseSetting.caseMainSubtitle}
      />
      <CaseStudyFeatures data={casePage} />
      <OurValue data={CaseSetting.caseOurValue} />
      <BrandIdentity data={CaseSetting.CaseBrandIdentity} />
      <ContactUs data={CaseSetting.CaseReachUsText} />
    </Layout>
  );
};
export default CaseStudiesPage;
