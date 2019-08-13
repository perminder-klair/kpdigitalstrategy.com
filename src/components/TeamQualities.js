import React from 'react';
import styled from 'styled-components';
import HorizontalCard from './HorizontalCard';
import { Heading, Title } from './elements';

const Container = styled.div`
  background: ${props => props.theme.darkGrey};
  border-left: 1px solid ${props => props.theme.primaryColor};
  .columns {
    justify-content: center;
  }
  .cards {
    margin-top: 4%;
  }
`;
const TeamQualities = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <Heading>Why work with KP Digital Strategy?</Heading>
      <Title red>Expect more from your design & marketing company</Title>
      <div className="cards">
        <div className="columns">
          <div className="column is-two-fifths">
            <HorizontalCard
              width="7rem"
              icon="far fa-lightbulb"
              title="Experienced team"
              subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit, 
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
            />
          </div>
          <div className="column is-two-fifths">
            <HorizontalCard
              icon="far fa-lightbulb"
              title="Experienced team"
              subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit, 
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-two-fifths">
            <HorizontalCard
              width="7rem"
              icon="far fa-lightbulb"
              title="Good communication"
              subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit, 
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
            />
          </div>
          <div className="column is-two-fifths">
            <HorizontalCard
              icon="far fa-lightbulb"
              title="Good communication"
              subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit, 
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-two-fifths">
            <HorizontalCard
              width="7rem"
              icon="far fa-lightbulb"
              title="Good communication"
              subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit, 
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
            />
          </div>
          <div className="column is-two-fifths">
            <HorizontalCard
              icon="far fa-lightbulb"
              title="Good communication"
              subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit, 
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default TeamQualities;
