import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.mainBrandColor};
  padding: 5rem 1.5rem;
  img {
    padding: 0rem 2rem;
  }
  .columns {
    margin-top: 1rem;
  }
`;

const Team = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <img src="/images/team/member-one.jpg" alt="team image" />
        </div>
        <div className="column">
          <img src="/images/team.jpg" alt="team image" />
        </div>
        <div className="column">
          <img src="/images/team.jpg" alt="team image" />
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column">
          <h2 className="title is-5  has-text-black has-text-weight-bold is-spaced">
            Meet the team
          </h2>
          <h3 className="subtitle is-6">
            For help on everything you need to know about design and marketing.
          </h3>
        </div>
      </div>
    </div>
  </Container>
);

export default Team;
