import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import OurValue from '../components/OurValue';
import ServiceHero from '../components/ServiceHero';

export const overViewQuery = graphql`
  query overView {
    sanitySiteSettings {
      digitalMainTitle
      digitalMainSubtitle
      digitalOurValue
    }
    allSanityDigitalService {
      edges {
        node {
          slug {
            current
          }
          category
          title
          description
          Thumbnail {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const OverViewPage = ({ data }) => {
  const digitalService = data.sanitySiteSettings;
  const page = data.allSanityDigitalService.edges;
  return (
    <Layout>
      <Seo
        title="Manchester Digital Marketing Agency"
        description="KP Digital Strategy"
        url={config.siteUrl}
        image={config.image}
      />
      <PageHero
        title={digitalService.digitalMainTitle}
        subtitle={digitalService.digitalMainSubtitle}
      />
      <ServiceHero data={page} />
      <OurValue data={digitalService.digitalOurValue} />
    </Layout>
  );
};
export default OverViewPage;
