import React from 'react';
import styled from 'styled-components';

import BlogContentcard from './BlogContentcard';
import BlogProjectIdea from './BlogProjectIdea';

const Section = styled.section`
  .card-image {
    background-color: 'red';
  }
  .icon {
    margin-left: 1.25rem;
    margin-top: 1rem;
  }
  .test {
    background: yellow;
  }
  .content {
    line-height: 1.5;
  }
  .tag {
    padding: 1rem 1rem;
  }
  span,
  .has-text-danger {
    color: ${props => props.color} !important;
  }
  .is-danger {
    background-color: ${props => props.color} !important;
    color: #fff !important;
  }
`;

class BlogContent extends React.Component {
  render() {
    // const { page } = this.props;
    return (
      <Section>
        <div className="columns">
          <div className="column is-1" />
          <div className="column is-2">
            <p className="is-block">Share:</p>
            <span className="icon is-block-desktop is-size-3 has-text-danger">
              <i className="fab fa-linkedin" />
            </span>
            <span className="icon is-block-desktop is-size-3 has-text-danger">
              <i className="fab fa-instagram " />
            </span>
            <span className="icon is-block-desktop is-size-3 has-text-danger">
              <i className="fab fa-facebook-square" />
            </span>
            <span className="icon is-block-desktop is-size-3 has-text-danger">
              <i className="fab fa-whatsapp-square" />
            </span>
            <span className="icon is-block-desktop is-size-3 has-text-danger">
              <i className="fab fa-pinterest-square" />
            </span>
          </div>
          <div className="column is-5">
            <div className="content">
              <h1 className="title is-5 has-text-danger">10reasons</h1>
              <p>i am subtitle</p>
            </div>
          </div>
          <div className="column">
            <p className="has-text-danger has-text-weight-semibold">
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
