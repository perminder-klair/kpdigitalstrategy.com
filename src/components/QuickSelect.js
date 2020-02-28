import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .panel {
    background-color: ${props => props.theme.backgroundColor};
    display: inline-flex;
    padding: 5px 30px 5px 30px;
    margin: 1rem;

    border: 2px solid ${props => props.theme.mainBrandColor};
  }
  .card-input-element {
    display: none;
  }

  .card-input-element:checked + .card-input {
    background-color: ${props => props.theme.mainBrandColor};
  }
  .card-input:hover {
    cursor: pointer;
  }
`;

const QuickSelect = ({ text }) => {
  return (
    <Section>
      <div className="container">
        <label>
          <input type="radio" name="product" className="card-input-element" />
          <div className="panel panel-default card-input">
            <div className="column  has-text-centered">
              <h5 className="title is-5 has-text-centered">{text}</h5>
            </div>
          </div>
        </label>
      </div>
    </Section>
  );
};

export default QuickSelect;
