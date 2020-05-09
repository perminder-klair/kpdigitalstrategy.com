import React from 'react';
import styled from 'styled-components';
import ContactUsForm from './ContactUsForm';

const Section = styled.section`
  .ButtonWrapper {
    margin: 2rem 0rem;
  }
  .button {
    padding-right: 4rem;
    padding-left: 4rem;
    border-radius: 0.8rem;
  }
  .columns {
    justify-content: space-around;
  }
  .text {
    padding-right: 2.5rem;
  }
  .line {
    line-height: 1.8rem;
  }
`;

const OurInformation = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column text is-half">
          <p className="subtitle is-3 has-text-weight-medium is-spaced is-size-4-mobile ">
            Purposeful design and marketing services for aspirational companies
          </p>

          <p className="subtitle is-6 is-spaced has-text-danger has-text-weight-normal">
            We align design, marketing and sales to empower business growth.
          </p>

          <p className="title is-6 is-spaced has-text-weight-light line">
            We are passionate problem solvers who define objectives, pinpoint
            challenges and above all else are on your side celebrating your
            every win.
          </p>
          <p className="subtitle is-6 is-spaced has-text-weight-light line">
            No matter the size of your project, or if you are just starting out,
            KP Digital Strategy has everything you need to unlock your brand’s
            potential.
          </p>
          <p className="title is-6 is-spaced has-text-weight-normal">
            You can send us a message or you can fill in our quick enquiry form.
          </p>
        </div>

        <div className="column is-one-third">
          <ContactUsForm />
        </div>
      </div>
    </div>
  </Section>
);
export default OurInformation;
