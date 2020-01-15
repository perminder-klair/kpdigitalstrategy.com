import React from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.mainBrandColor};
  p {
    margin-top: 1rem;
  }
`;

const OurValue = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-3 has-text-centered">
          <p className="is-size-6 has-text-weight-medium has-text-white">
            CREATIVE THINKERS
          </p>
        </div>
        <div className="column is-3 has-text-centered">
          <p className="is-size-6 has-text-weight-medium has-text-white">
            PROBLEM SOLVERS
          </p>
        </div>
        <div className="column is-3 has-text-centered">
          <p className="is-size-6 has-text-weight-medium has-text-white">
            ALIGN DESIGN, MARKETING & SALES
          </p>
        </div>
        <div className="column is-3 has-text-centered">
          <p className="is-size-6 has-text-weight-medium has-text-white">
            TRANSFORM BUSINESS
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default OurValue;
