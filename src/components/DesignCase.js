/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Title, Subtitle } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.BlackTer};
  padding: 3rem 0rem;
  .title {
    margin-bottom: 0.35rem;
  }
`;
const DesignCase = () => (
  <Container className="has-text-Left section">
    <div className="container">
      <Title red>Design Case studies </Title>
      <Subtitle>
        At a look of at our recent design and marketing projects.
      </Subtitle>
    </div>
  </Container>
);

export default DesignCase;
