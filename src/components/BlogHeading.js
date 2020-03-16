import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .background-image {
    width: 100%;
    height: 30rem;
  }
  .blog-heading {
    background-color: ${props => props.theme.backgroundColor};
    width: 67%;
    position: relative;
    margin-top: -12rem;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
  .image {
    display: block;
    margin-left: auto;
    margin-right: 3rem;
    height: auto;
    @media screen and (max-width: 600px) {
      margin-right: auto;
    }
  }
  .columns {
    margin-right: 0;
  }
  .left {
    padding-left: 1.2rem;
  }
`;

const BlogHeading = ({ data }) => (
  <Section>
    <img
      className="background-image"
      src="/images/service/top-image-block@2x.png"
      alt="backimage"
    />{' '}
    <section className="">
      <div className="blog-heading">
        <div className="columns">
          <div className="column is-4 has-text-right">
            <figure className="image is-128x128">
              <img
                className="is-rounded"
                src="/images/service/kelly-pierduta-photo.png"
                alt="Branding"
              />
              <p>Written by Kelly</p>
            </figure>
          </div>
          <div className="column left has-text-centered-touch">
            <h3 className="title is-3"> {data.title}</h3>
            <h3 className="title is-6 has-text-weight-medium has-text-danger">
              Last Updated {data.publishedAt}
            </h3>
          </div>
        </div>
      </div>
    </section>
  </Section>
);

export default BlogHeading;
