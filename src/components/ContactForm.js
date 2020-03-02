import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.darkShades};
}
`;

const ContactForm = ({ display }) => (
  <Container>
    <section className="section">
      <h2 className="subtitle is-6 has-text-left is has-text-danger">
        We will be in touch within 24 hours.
      </h2>
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
      <div className={display ? 'field' : 'is-hidden'}>
        <textarea className="textarea" placeholder="Enter Your Message" />
      </div>
      <div className="text">
        <p className="subtitle is-6 is-spaced has-text-left">
          By submitting you agree to our contact terms and conditions.
        </p>
      </div>
      <button
        className="button is-danger is-rounded has-text-weight-bold"
        type="button"
      >
        Get Started
      </button>
    </section>
  </Container>
);

export default ContactForm;
