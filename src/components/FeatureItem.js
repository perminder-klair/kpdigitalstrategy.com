import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  section {
    border: 2px solid ${props => props.theme.mainBrandColor};
    height: 33rem;
    transition: transform 0.3s;
  }
  section:hover {
    transform: scale(1.05);
  }
  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  img {
    margin: 2rem 0rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;

const FeatureItem = ({ title, subtitle, button, icon, to }) => (
  <Container className="column is-4">
    <Link to={to}>
      <section className="section">
        <div className="container">
          <img src={icon} title={title} alt={title} />
          <div className="media-content has-text-centered">
            <h2 className="title is-4  has-text-white">{title}</h2>
            <p>{subtitle}</p>
            <Link className="is-size-6 has-text-weight-bold" to={to}>
              {button}
            </Link>
          </div>
        </div>
      </section>
    </Link>
  </Container>
);

export default FeatureItem;
