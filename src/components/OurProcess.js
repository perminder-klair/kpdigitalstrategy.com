import React from 'react';
import styled from 'styled-components';

import ProcessItems from './ProcessItems';

const Container = styled.div`
  background-color: #ffff;
  padding: 5rem 1.5rem;
  .columns {
    margin-top: 1rem;
  }
  .bottom-section {
    background-color: ${props => props.theme.backgroundColorLite};
    margin-top: 2.75rem;
  }
`;

const OurProcess = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <h2 className="title size-2 has-text-black">
        Understanding the KP Digital Strategy process
      </h2>
      <h3 className="subtitle size-3 has-text-danger has-text-weight-bold">
        Our step by step guide to help take your business to new heights.
      </h3>
      <div className="columns is-variable is-5 is-multiline">
        <ProcessItems
          title="Lead genertation"
          text="Poect excerpt,Loreum ipsum dolor siteamet, onseLorem ipsum dolor
          sitamnet, maygvolutpat."
          button="View our portfolio"
        />
        <ProcessItems
          title="Lead genertation"
          text="Poect excerpt,Loreum ipsum dolor siteamet, onseLorem ipsum dolor
          sitamnet, maygvolutpat."
          button="View our portfolio"
        />
        <ProcessItems
          title="Lead genertation"
          text="Poect excerpt,Loreum ipsum dolor siteamet, onseLorem ipsum dolor
          sitamnet, maygvolutpat."
          button="View our portfolio"
        />
        <ProcessItems
          title="Lead genertation"
          text="Poect excerpt,Loreum ipsum dolor siteamet, onseLorem ipsum dolor
          sitamnet, maygvolutpat."
          button="View our portfolio"
        />
        <ProcessItems
          title="Lead genertation"
          text="Poect excerpt,Loreum ipsum dolor siteamet, onseLorem ipsum dolor
          sitamnet, maygvolutpat."
          button="View our portfolio"
        />
        <ProcessItems
          title="Lead genertation"
          text="Poect excerpt,Loreum ipsum dolor siteamet, onseLorem ipsum dolor
          sitamnet, maygvolutpat."
          button="View our portfolio"
        />
      </div>
      <div className="columns is-centered">
        <div className="column is-three-quarters bottom-section">
          <h2 className="title is-5  has-text-black has-text-weight-bold">
            Dont' worry if you're a step or two ahead of us.
          </h2>
          <h3 className="subtitle is-6 has-text-black">
            No matter where you are with your branding and marketing, we can
            tailor our services to your project
          </h3>
        </div>
      </div>
    </div>
  </Container>
);

export default OurProcess;
