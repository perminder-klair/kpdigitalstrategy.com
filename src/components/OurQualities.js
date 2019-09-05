import React from 'react';
import styled from 'styled-components';

import QualityItem from './QualityItem';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColorGrey};
  padding: 5rem 1.5rem;
`;

const OurQualities = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <h2 className="title size-2">Why work with KP Digital Strategy?</h2>
      <h3 className="subtitle size-3 has-text-danger">
        Expect more from your design & marketing company
      </h3>
      <div className="columns is-multiline">
        <QualityItem
          icon="far fa-lightbulb"
          title="Experienced team"
          text="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
        />
        <QualityItem
          icon="far fa-lightbulb"
          title="Experienced team"
          text="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
        />
        <QualityItem
          icon="far fa-lightbulb"
          title="Good communication"
          text="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
        />
        <QualityItem
          icon="far fa-lightbulb"
          title="Good communication"
          text="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
        />
        <QualityItem
          icon="far fa-lightbulb"
          title="Good communication"
          text="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
        />
        <QualityItem
          icon="far fa-lightbulb"
          title="Good communication"
          text="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
        />
      </div>
    </div>
  </Container>
);

export default OurQualities;
