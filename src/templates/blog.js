import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';

import Seo from '../components/Seo';
import OurValue from '../components/OurValue';
import BrandIdentity from '../components/BrandIdentity';
import ContactUs from '../components/ReachUs';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import BlogHeading from '../components/BlogHeading';
import BlogContent from '../components/BlogContent';

export const blogPageQuery = graphql`
  query blogPageQuery($slug: String) {
    sanityBlog(slug: { current: { eq: $slug } }) {
      individualBlogSeoTitle
      individualBlogSeoKeywords
      individualBlogSeoMetaDescription
      slug {
        current
      }
      publishedAt(formatString: "dddd Do MMMM YYYY")
      title
      _rawContent
      relatedcontent {
        slug {
          current
        }
        title
        Thumbnail {
          asset {
            url
          }
        }
      }
      tags
      ourValue
      BrandIdentity {
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
      reachUsText
    }
  }
`;

export default class IndividualBlog extends React.Component {
  render() {
    const {
      data: { sanityBlog: blog },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={blog.individualBlogSeoTitle}
          description={blog.individualBlogSeoMetaDescription}
          keywords={blog.individualBlogSeoKeywords}
          url={config.siteUrl}
          image={config.image}
        />
        <PageHero
          title="Our design & marketing advice centre"
          subtitle="A collection of resources to support your business growth"
        />
        <BlogHeading data={blog} />
        <BlogContent data={blog} />
        <OurValue data={blog.ourValue} />
        <BrandIdentity data={blog.BrandIdentity} />
        <ContactUs data={blog.reachUsText} />
      </Layout>
    );
  }
}
