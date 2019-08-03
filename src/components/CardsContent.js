import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundDark};
  padding: 3rem 0rem;
  .columns {
    justify-content: space-evenly;
  }
`;
const CardsContent = () => (
  <Container className="has-text-centered-mobile">
    <div className="section">
      <div className="columns">
        <div className="column is-2">
          <Card
            icon="fas fa-pen"
            title="Brand Identity"
            subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
             conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
              magna aliquam erat volutpat."
            button="learn more"
          />
        </div>
        <div className="column is-2">
          <Card
            icon="fas fa-laptop-code"
            title="Website development"
            subtitle="Protect excerpt. Lorem ipsum dolor sit amet, 
            conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
             sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
            button="learn more"
          />
        </div>
        <div className="column is-2">
          <Card
            icon="fas fa-bullhorn"
            title="Strategic marketing"
            subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
             conselorem ipsum dolor sit amet, consectetuer adipiscing alit, 
             sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
            button="learn more"
          />
        </div>
      </div>
    </div>
  </Container>
);

export default CardsContent;
