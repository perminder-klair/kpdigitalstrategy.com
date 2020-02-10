import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
}
.ButtonWrapper {
  margin: 2rem 0rem;
}
.button {
  padding-right: 4rem;
  padding-left: 4rem;
}
.text{
  margin-top:1.5rem;
padding-inline-end: 0rem;}
`;

const GetInTouch = () => (
  <Section className="section">
    <div className="container">
      <div className="columns ">
        <div className="column text is-half">
          <div className="text">
            <p className="subtitle is-3 is-spaced ">
              Purposeful design and marketing services for aspirational
              companies
            </p>

            <p className="subtitle is-6 is-spaced has-text-danger">
              We align design, marketing and sales to empower business growth.
            </p>

            <p className="title is-6 is-spaced has-text-weight-normal">
              We are passionate problem solvers who define objectives, pinpoint
              challenges and above all else are on your side celebrating your
              every win.
            </p>

            <p className="subtitle is-6 is-spaced">
              No matter the size of your project, or if you are just starting
              out, KP Digital Strategy has everything you need to unlock your
              brand’s potential.
            </p>
            <p className="title is-6 is-spaced has-text-weight-normal">
              You can send us a message or you can fill in our quick enquiry
              form.
            </p>
          </div>
        </div>

        <div className="column is-half">
          <p className="subtitle is-6 is-spaced has-text-danger has-text-centered">
            We will be in touch within 24 hours.
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
          <div className="field">
            <textarea className="textarea" placeholder="Enter Your Message" />
          </div>
          <div className="text">
            <p className="subtitle is-6 is-spaced">
              By submitting you agree to our contact terms and conditions.
            </p>
          </div>
          <div className="ButtonWrapper has-text-centered">
            <button
              className="button is-danger is-rounded has-text-weight-bold"
              type="button"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default GetInTouch;
