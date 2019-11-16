import React from "react";
import styled from "styled-components";

const Section = styled.section`
  .text {
    margin-bottom: 1.5rem;
  }
  .button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .first {
    align-self: center;
    padding-right: 3.75rem;
    @media screen and (max-width: 600px) {
      padding: 3rem 1rem;
    }
  }
`;

const ServiceItem = () => (
  <Section>
    <div className="container">
      <div className="columns">
        <div className="column first">
          <h1 className="title is-4 has-text-white">
            Purposeful design and marketing services for aspirational companies
          </h1>
          <h2 className="subtitle is-5 has-text-danger has-text-weight-bold">
            We align design, marketing and sales to make it easier than ever to
            reach new business heights.
          </h2>
          <p className="text">
            we are an experienced team of desigenrs and marketeers who are ready
            to create brand identities, devise informed marketing strategues,
            create competlling email nurture track campaigns, and develop
            pixel-perfect websites-to name just a few of services.
          </p>
          <p>
            we are unfarid of data & analytics our results are transparent. We
            are passionate probelm solves who define objectives, pinpoint
            challenges and abovw all else are on your side celebrating your
            every win
          </p>
          <p className="text">
            No matter the size of your project, or if you are just starting out,
            KP Digital Strategy has
          </p>
          <button
            className="button is-danger is-rounded has-text-weight-semibold"
            type="button"
          >
            View our portfolio
          </button>
        </div>
        <div className="column">
          <img src="/images/dummy/image5.png" alt="service image" />
        </div>
      </div>
    </div>
  </Section>
);

export default ServiceItem;