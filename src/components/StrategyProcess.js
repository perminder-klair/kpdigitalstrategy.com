import React from 'react';
import styled from 'styled-components';
import { Heading, Title } from './elements';
import ProcessCard from './ProcessCard';

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
    font-size: 1rem;
    padding: 1rem 5rem;
    strong {
      color: ${props => props.theme.SecondaryColor};
    }
    @media only screen and (max-width: 600px) {
      padding: 1rem 1rem;
    }
  }
`;

const StrategyProcess = () => (
  <Container className="has-background-white section">
    <div className="container">
      <div className="has-text-centered HeadingWrapper">
        <Heading black>Understanding the KP Digital Strategy process</Heading>
        <Title red>
          Our step by step guides to help take your business to new heights.
        </Title>
      </div>
      <div className="columns">
        <div className="column ">
          <ProcessCard
            subtitle="Lead generation"
            discription="a step or two ahead of a step or two ahead of us No where you are with
        your branding and marketing, we can tailor our services to your project."
          />
        </div>
        <div className="column ">
          <ProcessCard
            subtitle="Lead generation"
            discription="a step or two ahead of a step or two ahead of us No where you are with
        your branding and marketing, we can tailor our services to your project."
          />
        </div>
        <div className="column">
          <ProcessCard
            subtitle="Lead generation"
            discription="a step or two ahead of a step or two ahead of us No where you are with
        your branding and marketing, we can tailor our services to your project."
          />
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
