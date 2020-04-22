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
    sanitySiteSettings {
      blogMainTitle
      blogMainSubtitle
      blogBrandIdentity {
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
      blogOurValue
      blogFaq {
        faqTitle
        faqSubtitle
        faqQuestion {
          question
          answer
        }
      }
      blogReachUsText
    }
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
    const {
      data: { sanitySiteSettings: page },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <PageHero title={page.blogMainTitle} subtitle={page.blogMainSubtitle} />
        <SearchBar onChange={value => this.setState({ searchQuery: value })} />
        <FeaturesArticles items={blog.edges} filter={searchQuery} />
        <BrandIdentity data={page.blogBrandIdentity} />
        <OurValue data={page.blogOurValue} />
        <Faq data={page.blogFaq} />
        <ReachUs data={page.blogReachUsText} />
      </Layout>
    );
  }
}
