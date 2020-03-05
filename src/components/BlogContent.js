import React from 'react';
import styled from 'styled-components';

import Share from './Share';
import BlogContentcard from './BlogContentcard';
import BlogProjectIdea from './BlogProjectIdea';

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
`;

class BlogContent extends React.Component {
  render() {
    return (
      <Section className="section">
        <div className="columns">
          <div className="column is-1" />
          <div className="column is-2">
            <Share url="/google" quote="test" />
          </div>
          <div className="column is-5">
            <div className="content">
              <h1 className="title is-5 has-text-danger">10reasons</h1>
              <p>i am subtitle</p>
            </div>
          </div>
          <div className="column">
            <p className="title is-5 has-text-danger has-text-weight-semibold">
              Related Content
            </p>
            <BlogContentcard text="Create a killer Google Ads campaign with these 5 top tips" />
            <BlogContentcard text="5 essential steps to create your content marketing strategy" />
            <BlogContentcard text="How to attract people to your website" />
            <div className="tags is-block">
              <p className="is-block  has-text-weight-semibold">Tags</p>
              <span className="tag is-rounded is-danger has-text-weight-semibold">
                Google Analytics
              </span>
              <span className="tag is-rounded is-danger has-text-weight-semibold">
                Maketing
              </span>
              <span className="tag is-rounded is-danger has-text-weight-semibold">
                Data
              </span>
              <BlogProjectIdea />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
export default BlogContent;
