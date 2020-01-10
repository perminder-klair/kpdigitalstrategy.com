import React from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.darkShades};
}
.ButtonWrapper {
  margin: 2rem 0rem;
}
.button {
  padding-right: 5rem;
  padding-left: 5rem;
}
`;

const FormProps = props => (
  <Container>
    <section className="section">
      <div className="columns">
        <div className="column is-half">
          <section className="hero  is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-3 is-spaced has-text-left">
                  {props.title}
                </h1>
                <h2 className="subtitle is-6 has-text-left is has-text-danger">
                  {props.subtitle}
                </h2>
              </div>
            </div>
          </section>
        </div>
        <div className="column is-half">
          <p className="subtitle is-6 is-spaced has-text-danger has-text-left">
            {props.paragraph}
          </p>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="email"
                placeholder="Enter Your Name"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="email"
                placeholder="Enter Your Email-Address"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="email"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>

          <div className="text">
            <p className="subtitle is-6 is-spaced has-text-left">
              {props.paragraph2}
            </p>
          </div>
          <div className="ButtonWrapper">
            <button
              className="button is-danger is-rounded has-text-weight-bold"
              type="button"
            >
              {props.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default FormProps;
