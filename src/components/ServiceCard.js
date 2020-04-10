/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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

const ServiceCard = ({ data }) => (
  <Container bgImage={data.Thumbnail.asset.url}>
    <div className="columns is-gapless">
      <div className="column is-7">
        <section className="section">
          <div className="container">
            <h1 className="title is-5 is-spaced has-text-white">
              {data.title}
            </h1>
            <h2 className="subtitle is-6 has-text-danger has-text-weight-bold">
              {data.title}
            </h2>
            <p className="text">{data.description}</p>
            {/* <p className="text">{props.secondpara}</p> */}
            <Link
              className="button is-rounded has-text-weight-bold"
              to={`digitalService/${data.slug.current}`}>
              Learn more
            </Link>
          </div>
        </section>
      </div>
      <div className="column  second" />
    </div>
  </Container>
);

export default ServiceCard;
