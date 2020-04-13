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
  query caseStudy {
    sanityCaseStudy {
      caseName
      Subtitle
      thumbnail {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
`;
export default class CaseStudiesPage extends React.Component {
  render() {
    const {
      data: { sanityCaseStudy: casePage },
    } = this.props;
    console.log('heloo', casePage);
    return (
      <Layout>
        <PageHero title={casePage.caseName} subtitle={casePage.Subtitle} />
        <CaseStudyFeatures data={casePage} />
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        {/* <OurValue /> */}
        <BrandIdentity />
        {/* <ContactUs /> */}
      </Layout>
    );
  }
}
