import React, { useState } from 'react';

import styled from 'styled-components';
import PageHero from './PageHero';

const Section = styled.div`
  .hero-body {
    padding-top: 0rem;
  }
  .columns {
    padding-bottom: 2rem;
    border-bottom: 2px solid ${props => props.theme.mainBrandColor};
  }
  .textarea {
    background-color: ${props => props.theme.backgroundColor};
    border: 2px solid ${props => props.theme.mainBrandColor};
    color: ${props => props.theme.mainBrandColor};
    ::placeholder {
      text-align: center;
      font-size: 1.2rem;
      color: #7d7e80;
    }
  }
`;

const QuickQuestionThree = () => {
  const [count, UpdateCount] = useState(0);
  return (
    <Section>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-three-quarters">
                <PageHero
                  subtitle=" Question 3/5"
                  paragraph="Did you find everything you were looking for above ?"
                  text="Please use the space below to tell us more about your project"
                />
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Tell us more about your project here"
                      rows="8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-three-quarters">
              <PageHero
                subtitle=" Question 4/5"
                paragraph="How many years has the company been operating ?"
              />
              <div>
                <h1 className="title is-3 is-inline">{count}</h1>
                <div className="is-flex">
                  <button type="button" onClick={() => UpdateCount(count + 1)}>
                    <span className="icon has-text-danger is-size-3">
                      <i className="fas fa-caret-up" />
                    </span>
                  </button>
                  <button type="button" onClick={() => UpdateCount(count - 1)}>
                    <span className="icon has-text-danger is-size-3">
                      <i className="fas fa-sort-down" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default QuickQuestionThree;
