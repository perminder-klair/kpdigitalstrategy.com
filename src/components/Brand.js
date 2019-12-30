import React from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.backgroundColorLite};
  h3 {
    margin-top: 1rem;
  }
`;

const Brand = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-3 has-text-centered">
          <h3 className="title is-4 has-text-black">Trusted by</h3>
        </div>
        <div className="column is-3 has-text-centered">
          <img
            src="/images/icons/official-epic-risk-management-landscape-logo@2x.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
        <div className="column is-3 has-text-centered">
          <img
            src="/images/icons/dom-logo-colour.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
        <div className="column is-3 has-text-centered">
          <img
            src="/images/icons/commbus-official-logo-no-tagline@2x.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
      </div>
    </div>
  </Container>
);

export default Brand;
