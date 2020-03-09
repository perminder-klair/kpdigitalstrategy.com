import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import PageHero from './PageHero';

const Section = styled.div`
  .column {
    padding-bottom: 2rem;
    border-bottom: 2px solid ${props => props.theme.mainBrandColor};
  }

  .cover {
    border: 2px solid ${props => props.theme.mainBrandColor};
    padding: 2px 24px 2px 24px;
    background-color: ${props => props.theme.backgroundColor};
    display: inline-flex;
  }

  .wrapper {
    display: grid;
  }
  .text {
    padding: 14px 10px 0px 13px;
    margin-right: 15px;
  }
`;

const QuickQuestionFour = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  useEffect(() => {
    setCount(0);
  }, [0]);
  return (
    <Section>
      <PageHero
        subtitle=" Question 4/5"
        paragraph="How many years has the company been operating ?"
      />
      <div className="container">
        <div className="column">
          <div className=" has-text-centered">
            <div className="cover">
              <div className="text">
                <h1 className="title is-3 is-inline  has-text-centered ">
                  {count}
                </h1>
              </div>
              <div className="wrapper">
                <button type="button" onClick={add}>
                  <span className="icon has-text-danger is-size-3">
                    <i className="fas fa-caret-up" />
                  </span>
                </button>
                <button type="button" onClick={subtract}>
                  <span className="icon has-text-danger is-size-3">
                    <i className="fas fa-sort-down" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default QuickQuestionFour;
