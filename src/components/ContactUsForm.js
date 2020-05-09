import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .ButtonWrapper {
    margin: 2rem 0rem;
  }
  .button {
    padding-right: 4rem;
    padding-left: 4rem;
    border-radius: 0.8rem;
  }

  .line {
    line-height: 1.8rem;
  }
  input,
  textarea {
    border-radius: 0px;
    font-size: 1.2rem;
  }
  input::placeholder {
    color: ${props => props.theme.darkShades};
  }
  textarea::placeholder {
    color: ${props => props.theme.darkShades};
  }
`;

const ContactUsForm = () => (
  <Container>
    <div>
      <p className="subtitle is-6 is-spaced has-text-danger has-text-left has-text-weight-normal">
        We will be in touch within 24 hours.
      </p>
      <div className="field">
        <div className="control">
          <input
            className="input is-medium has-text-black "
            type="email"
            placeholder="Enter Your Name"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="input is-medium has-text-black"
            type="email"
            placeholder="Enter Your Email-Address"
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input
            className="input is-medium has-text-black"
            type="email"
            placeholder="Enter Your Phone Number"
          />
        </div>
      </div>
      <div className="field">
        <textarea
          className="textarea is-medium has-text-black"
          placeholder="Enter Your Message"
        />
      </div>
      <div className="text">
        <p className="subtitle is-6 is-spaced has-text-weight-light line">
          By submitting you agree to our contact terms and conditions.
        </p>
      </div>
      <div className="ButtonWrapper has-text-left">
        <button
          className="button is-danger is-rounded has-text-weight-medium"
          type="button"
        >
          Get started
        </button>
      </div>
    </div>
  </Container>
);
export default ContactUsForm;
