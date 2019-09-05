import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 2.4rem;
  img {
    width: 200px;
    max-width: 100%;
    height: auto;
  }
`;

const FeatureItem = ({ title, subtitle, button, icon }) => (
  <Container className="column">
    <img src={icon} title={title} alt={title} />
    <div className="media-content has-text-centered">
      <h2 className="title size-2 has-text-danger">{title}</h2>
      <p>{subtitle}</p>
      <buttom className="button is-primary">{button}</buttom>
    </div>
  </Container>
);

export default FeatureItem;
