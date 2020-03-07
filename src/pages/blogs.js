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

export const blogQuery = graphql`
  query blogQuery {
    allSanityBlog {
      edges {
        node {
          slug {
            current
          }
          category
          title
          excerpt
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

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: '' };
  }

  render() {
    const { searchQuery } = this.state;
    const {
      data: { allSanityBlog: blog },
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
          title="Our design & marketing advice centre"
          subtitle="A collection of resources to support your business growth"
        />
        <SearchBar onChange={value => this.setState({ searchQuery: value })} />
        <FeaturesArticles items={blog.edges} filter={searchQuery} />
        <BrandIdentity />
        <OurValue />
        <Faq />
        <ReachUs />
      </Layout>
    );
  }
}
