import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  text-align-last: center;
  .panel {
    background-color: ${props => props.theme.backgroundColor};
    display: inline-flex;
    padding: 25px 82px 25px 82px;

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
  .title {
    padding-top: 1rem;
  }
`;

const QuickSelect = ({ text }) => {
  return (
    <Container>
      <label>
        <input type="radio" name="product" className="card-input-element" />
        <div className="panel panel-default card-input">
          <div className="column  has-text-centered">
            <h5 className="title is-5 has-text-centered">{text}</h5>
          </div>
        </div>
      </label>
    </Container>
  );
};

export default QuickSelect;
