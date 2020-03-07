import React from 'react';
import styled from 'styled-components';

import Share from './Share';
import BlogContentCard from './BlogContentCard';
import BlogProjectIdea from './BlogProjectIdea';
import Block from './PortableText';

const Section = styled.section`
  .card-image {
    background-color: 'red';
  }
  .content {
    line-height: 1.5;
  }
  .tag {
    padding: 1rem 1rem;
  }
  .is-2 {
    width: 14% !important;
  }
  .content {
    width: 45% !important;
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
      <div className="column is-2">
        <Share url="/google" quote="test" />
      </div>
      <ContentWrapper className="column is-6 content">
        <Block input={data._rawContent} />
      </ContentWrapper>
      <div className="column">
        <p className="title is-5 has-text-danger has-text-weight-semibold">
          Related Content
        </p>
        {data.relatedcontent.map(items => (
          <BlogContentCard data={items} />
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
