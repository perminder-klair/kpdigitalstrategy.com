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

const OurValue = ({ data }) => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        {data.ourValue.map(items => (
          <div className="column  has-text-centered">
            <p className=" has-text-weight-medium has-text-white">{items}</p>
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default OurValue;
