import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.mainBrandColor};
  p {
    margin-top: 1rem;
    font-size: 15px;
  }
`;

const OurValue = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column  has-text-centered">
          <p className=" has-text-weight-medium has-text-white">
            CREATIVE THINKERS
          </p>
        </div>
        <div className="column  has-text-centered">
          <p className=" has-text-weight-medium has-text-white">
            PROBLEM SOLVERS
          </p>
        </div>
        <div className="column  has-text-centered">
          <p className=" has-text-weight-medium has-text-white">
            ALIGN DESIGN, MARKETING & SALES
          </p>
        </div>
        <div className="column  has-text-centered">
          <p className="has-text-weight-medium has-text-white">
            TRANSFORM BUSINESS
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default OurValue;
