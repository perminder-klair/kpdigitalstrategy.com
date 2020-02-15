/* eslint-disable prettier/prettier */
import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.mainBrandColor};
  p {
    margin-top: 1rem;
  }
  h3 {
    margin-bottom: 3rem;
  }
`;

const Strengths = () => (
  <Container className="section">
    <div className="container">
      <h3 className="title is-5 has-text-centered">
        Reliable, efficient & transparent service, every time
      </h3>
      <div className="columns">
        <div className="column is-4 has-text-centered">
          <img
            src="/images/icons/team-icon.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
          <p className="is-size-6 has-text-weight-medium has-text-white">
            Talented team
          </p>
          <p className="is-size-7 has-text-weight-medium has-text-white has-text-weight-light">
            Talented team Dedicated team made up of verified super talent from
            around the world.
          </p>
        </div>
        <div className="column is-4 has-text-centered">
          <img
            src="/images/icons/target-icon.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
          <p className="is-size-6 has-text-weight-medium has-text-white">
            On-brand solutions
          </p>
          <p className="is-size-7 has-text-weight-medium has-text-white has-text-weight-light">
            We work to the highest of standards, delivering solutions that align
            with your audience and objectives.
          </p>
        </div>
        <div className="column is-4 has-text-centered">
          <img
            src="/images/icons/clock-icon.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
          <p className="is-size-6 has-text-weight-medium has-text-white">
            Fast turn arounds
          </p>
          <p className="is-size-7 has-text-weight-medium has-text-white has-text-weight-light">
            We’re always-on with the ability to do 12- or 24-hour turnarounds.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default Strengths;
