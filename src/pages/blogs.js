import React from 'react';
import { graphql } from 'gatsby';
import config from '../utils/config';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Faq from '../components/Faq';
import SearchBar from '../components/SearchBar';
import FeaturesArticles from '../components/FeaturesArticles';
import BrandIdentity from '../components/BrandIdentity';
import OurValue from '../components/OurValue';
import ReachUs from '../components/ReachUs';
import Block from '../components/PortableText';

export const blogQuery = graphql`
  query blogQuery {
    allSanityBlog {
      edges {
        node {
          categorie
          title
          Thumbnail {
            asset {
              url
            }
          }
          _rawBody
        }
      }
    }
  }
`;

export default class Blog extends React.Component {
  render() {
    const {
      data: { allSanityBlog: blog },
    } = this.props;

    console.log('hello world');

    blog.edges.map(item => console.log(item.node._rawBody));

    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <PageHero
          title="Our design & marketing advice centre"
          subtitle="A collection of resources to support your business growth"
        />
        <SearchBar />
        <FeaturesArticles data={blog.edges} />
        <BrandIdentity />
        <OurValue />
        <Faq />
        <ReachUs />
      </Layout>
    );
  }
}
