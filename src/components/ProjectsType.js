import React from 'react';
import styled from 'styled-components';
import { Button, Subtitle } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.RedDrak};
  padding: 1rem 1.5rem;
  .subtitle {
    margin-bottom: 0.75rem;
  }
  .columns {
    justify-content: center;
  }
  .column {
    margin: 9px !important;
  }
`;
const ProjectsType = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <Subtitle>Filter By Projects Type</Subtitle>
      <div className="columns is-gapless">
        <div className="column is-one-fifth">
          <Button Black>Brading</Button>
        </div>
        <div className="column is-one-fifth">
          <Button Black>Website</Button>
        </div>
        <div className="column is-one-fifth">
          <Button Black>Marketing</Button>
        </div>
      </div>
    </div>
  </Container>
);

export default ProjectsType;
