import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: url('https://econ70.com/wp-content/uploads/2019/05/working-women.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  .is-10 {
    margin-top: 17rem;
    background-color: ${props => props.theme.mainBrandColor};
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

const CategoryHero = () => (
  <Section>
    <div className="columns is-mobile">
      <div className="column is-10">
        <div className="columns is-mobile">
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
            <p>Brading</p>
            <h3 className="title is-3">Who is Kp Digital Strategy?</h3>
            <h3 className="title is-6 has-text-weight-medium">
              Last Updated Friday 20th September 2019
            </h3>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default CategoryHero;
