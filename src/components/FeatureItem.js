import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 4rem;
  img {
    width: 150px;
    max-width: 100%;
    height: auto;
  }
  .title {
    margin-top: 1rem;
  }
  .button {
    padding: 1rem 3rem 1rem 3rem;
  }
`;

const FeatureItem = ({ title, subtitle, button, icon }) => (
  <Container className="column">
    <img src={icon} title={title} alt={title} />
    <div className="media-content has-text-centered">
      <h2 className="title is-4  has-text-danger">{title}</h2>
      <p>{subtitle}</p>
      <buttom className="button is-danger is-rounded has-text-weight-bold">
        {button}
      </buttom>
    </div>
  </Container>
);

export default FeatureItem;
