import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AboutHomeHero from '../components/AboutHomeHero';
import OurValue from '../components/OurValue';
import InformationAbout from '../components/InformationAbout';
import ReachUs from '../components/ReachUs';
import TestimonailData from '../components/TestimonailData';
import OurInformation from '../components/OurInformation';

export const aboutQuery = graphql`
  query about {
    sanitySiteSettings {
      aboutPage {
        aboutSeoTitle
        aboutSeoKeywords
        aboutSeoMetaDescription
        heroTitle
        heroSubtitle
        ourValues
        teamMembers {
          teamMemberImage {
            asset {
              url
            }
          }
          personName
          designation
          firstParagraph
          secondParagraph
          linkedInLink {
            asset {
              url
            }
          }
        }
        reachUsText
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
  }
`;
const AboutUs = ({ data }) => {
  const page = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={page.aboutPage.aboutSeoTitle}
        description={page.aboutPage.aboutSeoMetaDescription}
        keywords={page.aboutPage.aboutSeoKeywords}
        url={config.siteUrl}
        image={config.image}
      />
      <AboutHomeHero data={page.aboutPage} />
      <OurValue data={page.aboutPage.ourValues} />
      {page.aboutPage.teamMembers.map(items => (
        <InformationAbout
          personImage={items.teamMemberImage.asset.url}
          title={items.personName}
          subtitle={items.designation}
          DescriptionOne={items.firstParagraph}
          DescriptionTwo={items.secondParagraph}
          linkedImg={items.linkedInLink.asset.url}
        />
      ))}
      <ReachUs data={page.aboutPage.reachUsText} />
      <TestimonailData data={page.aboutPage.testimonialItem} />
      <OurInformation />
    </Layout>
  );
};
export default AboutUs;
