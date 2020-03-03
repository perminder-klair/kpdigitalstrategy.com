import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .card {
    width: 24rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .card-image {
    padding: 1rem 1rem;
    background-color: ${props => props.theme.mainBrandColor};
    height: 13.5rem;
  }
  .card-content {
    height: 6rem;
  }
`;

const BlogProjectIdea = () => (
  <Section>
    <div>
      <div className="card has-text-centered">
        <div className="card-image">
          <h3 className="title is-3 is-spaced">Do you have project in mind?</h3>
          <h3 className="subtitle is-5">
            Complete our quick-fill enquiry form today and receive a quote
            within 48 hours
          </h3>
        </div>
        <div className="card-content ">
          <a className="button is-danger is-rounded has-text-weight-semibold">
            Get an instant quote
          </a>
        </div>
      </div>
    </div>
  </Section>
);
export default BlogProjectIdea;
