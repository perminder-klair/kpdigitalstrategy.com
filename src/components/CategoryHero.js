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
    background-color: ${props => props.color};
    width: 71%;
    position: relative;
    margin-top: -12rem;
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
`;
``;

class CategoryHero extends React.Component {
  render() {
    const { page } = this.props;
    return (
      <Section color={page.color}>
        <img className="background-image" src="/images/blog/background.jpg" />
        <div className="blog-heading">
          <div className="columns">
            <div className="column is-4 has-text-right">
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Branding"
                />
                <p>Written by Kelly</p>
              </figure>
            </div>
            <div className="column">
              <p>{page.title}</p>
              <h3 className="title is-3">Who is Kp Digital Strategy?</h3>
              <h3 className="title is-6 has-text-weight-medium">
                Last Updated Friday 20th September 2019
              </h3>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default CategoryHero;
