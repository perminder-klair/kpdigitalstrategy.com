import React, { useState } from 'react';

import styled from 'styled-components';
import PageHero from './PageHero';

const Section = styled.div`
}
.ButtonWrapper {
  margin: 2rem 0rem;
}
.button {
  padding-right: 4rem;
  padding-left: 4rem;
}
.input {
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.mainBrandColor};
  color: ${props => props.theme.mainBrandColor};
  ::placeholder {
    text-align: center;
    font-size: 1.2rem;
    color: #ffffff;
  }`;

const QuickFeild = () => {
  return (
    <Section>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <PageHero
              subtitle=" Your information"
              paragraph="
        How can we contact you?"
            />
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder=" Enter your full name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="ButtonWrapper has-text-centered">
                  <button
                    className="button is-danger is-rounded has-text-weight-bold"
                    type="button"
                  >
                    Submit
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

export default QuickFeild;
