import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 3rem;
  border-top: 1px solid white;
  .text {
    padding: 1rem;
  }
  p {
    background-color: ${props => props.theme.backgroundColorGrey};
  }
  .button {
    width: 100%;
    @media screen and (max-width: 600px) {
      width: 70%;
    }
  }
  .input {
    height: 100%;
  }
`;

const SearchBar = ({ onChange }) => {
  return (
    <Section className="section">
      <div className="container">
        <div className="text">
          <h2 className="subtitle is-5  has-text-weight-semibold has-text-danger">
            Search our articles
          </h2>
        </div>
        <div className="columns">
          <div className="column is-11">
            <input
              className="input is-rounded"
              type="text"
              placeholder="Search by keyword"
              onChange={event => onChange(event.target.value)}
            />
          </div>
          <div className="column  has-text-centered">
            <button
              className="button is-rounded is-danger has-text-weight-bold"
              type="button"
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SearchBar;
