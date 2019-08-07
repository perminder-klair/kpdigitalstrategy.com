import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import SpkerIcon from '../../static/images/spker.png';
import BoardIcon from '../../static/images/board.png';
import PancilIcon from '../../static/images/pancil.png';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundDark};
  padding: 3rem 0rem;
  .columns {
    justify-content: space-evenly;
  }
`;
const CardsContent = () => (
  <Container className="has-text-centered-mobile section">
    <div className="container">
      <div className="columns">
        <div className="column is-2">
          <Card
            Icon={PancilIcon}
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
            Icon={BoardIcon}
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
            Icon={SpkerIcon}
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
