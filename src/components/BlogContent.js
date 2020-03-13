import React from 'react';
import styled from 'styled-components';

import Share from './Share';
import BlogReference from './BlogReference';
import BlogProjectIdea from './BlogProjectIdea';
import Block from './PortableText';

const Section = styled.section`
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    .related {
      width: 0% !important;
    }
  }
  .card-image {
    background-color: 'red';
  }
  .content {
    line-height: 1.5;
  }
  .tag {
    padding: 1rem 1rem;
  }
  .content {
    padding-left: 5.4rem;
  }
  @media only screen and (max-width: 600px) {
    .content {
      padding-left: 0rem;
    }
  }
`;

const ContentWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.mainBrandColor};
  }
`;

const BlogContent = ({ data }) => (
  <Section className="section">
    <div className="columns">
      <div className="column is-1" />
      <div className="column is-1">
        <Share url="/google" quote="test" />
      </div>
      <ContentWrapper className="column is-6 content">
        <Block input={data._rawContent} />
      </ContentWrapper>
      <div className="column related">
        <p className="title is-5 has-text-danger has-text-weight-semibold">
          Related Content
        </p>
        {data.relatedcontent.map(items => (
          <BlogReference data={items} />
        ))}
        <div className="tags is-block">
          <p className="is-block  has-text-weight-semibold">Tags</p>
          {data.tags.map(items => (
            <span className="tag is-rounded is-danger has-text-weight-semibold">
              {items}
            </span>
          ))}
          <BlogProjectIdea />
        </div>
      </div>
    </div>
  </Section>
);

export default BlogContent;
