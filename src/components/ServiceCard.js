/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColorGrey};
  border-radius: 1rem;
  margin-top: 2rem;
  .text {
    margin-bottom: 1.5rem;
  }
  .button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .second {
    border-radius: 1rem;
    background-image: url(${props => props.bgImage});
    background-size: cover;
  }
`;

const ServiceCard = props => (
  <Container bgImage={props.bgImage}>
    <div className="columns is-gapless">
      <div className="column is-7">
        <section className="section">
          <div className="container">
            <h1 className="title is-5 is-spaced has-text-white">
              {props.title}
            </h1>
            <h2 className="subtitle is-6 has-text-danger has-text-weight-bold">
              {props.subtitle}
            </h2>
            <p className="text">{props.firstpara}</p>
            <p className="text">{props.secondpara}</p>
            <button
              className="button is-rounded has-text-weight-bold"
              type="button"
            >
              Learn more
            </button>
          </div>
        </section>
      </div>
      <div className="column  second" />
    </div>
  </Container>
);

export default ServiceCard;
