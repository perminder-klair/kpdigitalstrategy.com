import React from 'react';

import PageHero from './PageHero';

const Thanku = () => (
  <div className="container">
    <section className="section">
      <div className="columns">
        <div className="column has-text-centered">
          <div className="pic">
            <img src="/images/team/thank-you-page-image.png" alt="you" />
          </div>

          <PageHero
            title="Thank you for contacting us"
            subtitle="   A member of our team will be in touch with you within 24 hours os
              submitting your request."
            paragraph="
        We look forward to learning more about your enquiry."
          />

          <div className="ButtonWrapper has-text-centered">
            <button
              className="button is-danger is-rounded has-text-weight-bold"
              type="button"
            >
              See our FAQ’s
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Thanku;
