import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  margin-top: 1rem;
  .card {
    border-radius: 1rem;
  }
  .title {
    line-height: 0.5;
    @media screen and (max-width: 600px) {
      line-height: 1;
    }
  }
  img {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  .image.is-3by1 {
    padding-top: 45%;
  }
  .media-content {
    padding: 3rem 2rem;
  }
  .button {
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;

const KnowlegeCard = props => (
  <Container className="column is-half">
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by1">
          <img src={props.src} alt="Placeholder image" />
          <button className={props.buttonclass} type="button">
            {props.buttontitle}
          </button>
        </figure>
      </div>
      <div className="media-content has-text-centered">
        <h2 className="title is-5 has-text-black">
          Understanding our logo design process
        </h2>
        <p className="has-text-black">
          Our step by step guides talks you through the process of team take
          when developing a logo. Whether you have an idea of the logo you would
          like to create or whether you are open to exploration we are here to
          help.
        </p>
        <Link
          to={props.link}
          className="button is-danger is-rounded has-text-weight-bold"
        >
          Read More
        </Link>
      </div>
    </div>
  </Container>
);

export default KnowlegeCard;
