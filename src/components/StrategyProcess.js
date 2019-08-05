import React from 'react';
import styled from 'styled-components';
import { Heading, Title} from './elements';

const Container = styled.div`
  .HeadingWrapper {
    padding: 2rem 0rem;
  }
  .title {
    margin: 0.75rem 0rem;
  }
  .columns {
    justify-content: space-evenly;
  }
  .InstructionWrapper {
    padding-top: 4rem;
  }
  .Instruction {
    border: 2px solid ${props => props.theme.SecondaryColor};
    color: ${props => props.theme.SecondaryColor};
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    strong {
      color: ${props => props.theme.SecondaryColor};
    }
  }
`;

const StrategyProcess = () => (
  <Container className="has-background-white section">
    <div className="container">
      <div className="has-text-centered HeadingWrapper">
        <Heading black>Understanding the kp Digital Strategy process</Heading>
        <Title red>
          Our step by step guides to help take your business to new heights.
        </Title>
      </div>

      <div className="columns">
        <div className="column is-2">
          <figure className="image">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
        <div className="column is-2">
          <figure className="image is-square">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
        <div className="column is-2">
          <figure className="image is-square">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
      </div>
      <div className="InstructionWrapper has-text-centered">
        <div className="Instruction">
          <strong> Dont't worry if you're a step or two ahead of us .</strong>No
          where you are with your branding and marketing, we can tailor our
          services to your project.
        </div>
      </div>
    </div>
  </Container>
);

export default StrategyProcess;
