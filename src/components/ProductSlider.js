import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card {
    border: 1px solid ${props => props.theme.lightShades};
    margin: 0rem 1rem;
    background: transparent;
  }
  .card-image {
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.mainBrandColor};
    padding: 2rem 1rem;
  }
  .media-content {
    padding: 1.5rem 0rem;
  }
  .button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 12.5px;
  }
`;

const ProductSlider = ({ sliderTitle }) => (
  <Container>
    <div className="card">
      <div className="card-image">
        <img
          src="/images/team/card-image.png"
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
      <div className="media-content has-text-centered">
        <h2 className="title is-6  has-text-white">{sliderTitle}</h2>
        <button
          className="button  is-danger has-text-weight-semibold"
          type="button"
        >
          Explore this product
        </button>
      </div>
    </div>
  </Container>
);

export default ProductSlider;
