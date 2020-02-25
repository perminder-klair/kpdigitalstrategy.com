import React, { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  .card-content {
    background-color: ${props => props.theme.backgroundColor};
    border: 2px solid ${props => props.theme.mainBrandColor};
    padding: 2.5rem 3.5rem;
    margin: 1rem;
    * {
      cursor: pointer;
    }
  }

  .c-card {
    visibility: hidden;
    ~ .card-content {
      /* transition: all 500ms ease-out; */

      &:before {
        position: absolute;
        top: 1px;
        right: 1px;
        content: '';
        width: 0;
        height: 0;
      }
      &:after {
        position: absolute;
        top: 1px;
        right: 1px;
        content: '';
        width: 0;
        height: 0;
      }
      &:hover {
        border: 2px solid #ffff;
      }
    }

    &:checked ~ .card-content {
      background-color: ${props => props.theme.mainBrandColor};
      border: 2px solid ${props => props.theme.mainBrandColor};
    }
  }

  img {
    margin-bottom: 1rem;
  }
`;

const QuickCheckBox = ({ id, value }) => {
  const [checked, changeChecked] = useState(false);
  return (
    <Container className="column is-3 has-text-centered">
      <div className="card-wrapper">
        <input
          className="c-card"
          type="checkbox"
          id={id}
          value={value}
          onClick={() => changeChecked(!checked)}
        />
        <div className="card-content">
          <label htmlFor={value}>
            {checked ? (
              <img src="/images/icons/target-icon.png" alt="daily-mails-logo" />
            ) : (
              <img
                src="/images/icons/branding-icon.png"
                alt="daily-mails-logo"
              />
            )}
            <h4 className="subtitle is-5 has-text-centered">test</h4>
          </label>
        </div>
      </div>
    </Container>
  );
};

export default QuickCheckBox;
