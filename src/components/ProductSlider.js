import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  section {
    border: 1px solid ${props => props.theme.lightShades};
    width: 20rem;
  }
  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  img {
    margin: 2rem 0rem;
  }
`;
const Color = styled.div`
  background-color: ${props => props.theme.mainBrandColor};
`;

const ProductSlider = () => (
  <Container className="">
    <section className="section">
      <Color />
      <div className="container">
        <img
          src="/images/team/website-epic-risk-management.png"
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
        <div className="media-content has-text-centered">
          <h2 className="title is-4  has-text-white">
            Website Design & Development
          </h2>
          <button
            className="button is-medium is-danger is-rounded has-text-weight-semibold"
            type="button"
          >
            Explore this product
          </button>
        </div>
      </div>
    </section>
  </Container>
);

export default ProductSlider;
