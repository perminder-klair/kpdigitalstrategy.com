import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .columns .column.is-two-thirds {
    background-color: ${props => props.theme.backgroundColor};
    height: 54rem;
    margin-bottom: 2rem;
    margin-top: -10rem;
  }
  .main {
    justify-content: center;
    display: grid;
  }
  h3 {
    margin-top: 24px;
  }
`;

const Reason = () => (
  <Section >
    <div className="columns">
      <div className="column is-two-thirds">
        <div className="section">
          <div className="columns  is-vcentered">
            <div className="column is-one-fifth has-text-centered">
              <div className="main">
                <img
                  className="is-rounded image is-101x102 is-spaced"
                  src="/images/service/kelly-pierduta-photo.png"
                  alt="BkImage"
                />
                <div>
                  <h3>Written by Kelly</h3>
                </div>
              </div>
            </div>
            <div className="column is-half is-block">
              <p className="title is-2 is-spaced is-size-4">
                10 reasons Why you should use infographics in marketing
              </p>
              <p className="subtitle is-6 has-text-danger is-size-6">
                Last updated Friday 22 November 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Section>
);
export default Reason;
