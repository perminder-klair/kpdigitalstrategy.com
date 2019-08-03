import React from 'react';
import styled from 'styled-components';
import { Title } from './elements';

const Container = styled.div`
  background-color: #1e2126;
  .Icon {
    font-size: 2rem;
    margin: 0rem 2rem;
    color: ${props => props.theme.SecondaryColor};
  }
`;
const TitleWrapper = styled.div`
  margin: 0rem 3rem;
`;

const CardQuestions = ({ Questions }) => (
  <Container className="container">
    <div className="columns">
      <div className="column is-7">
        <TitleWrapper>
          <Title>{Questions}</Title>
        </TitleWrapper>
      </div>
      <div className="column">
        <i className="Icon fas fa-chevron-circle-down is-pulled-right" />
      </div>
    </div>
  </Container>
);

export default CardQuestions;
