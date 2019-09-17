import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .first {
    background-color: ${props => props.theme.mainBrandColor};
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    @media screen and (max-width: 600px) {
      border-radius: 0rem;
    }
  }
  .second {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: ${props => props.theme.backgroundColor};
    padding: 1.15rem 0.5rem;
    @media screen and (max-width: 600px) {
      border-radius: 0rem;
    }
  }
`;

const Processitems = ({ title, text, button }) => (
  <Container className="column is-one-third">
    <div className="columns">
      <div className="column first" />
      <div className="column  has-text-centered is-9 second">
        <h3 className="title is-5 is-spaced">{title}</h3>
        <p className="subtitle is-6"> {text}</p>
        <button
          className="button is-danger is-rounded has-text-weight-semibold"
          type="button"
        >
          {button}
        </button>
      </div>
    </div>
  </Container>
);

export default Processitems;
