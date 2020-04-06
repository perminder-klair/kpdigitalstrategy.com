import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  background-color: ${props => props.theme.mainBrandColor};
  p {
    margin-top: 0.75rem;
  }
`;

const LinkStyled = styled(Link)`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const ReachUs = ({ data }) => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-8 has-text-centered">
          <p className="is-size-5 has-text-weight-medium">{data.reachUsText}</p>
        </div>
        <div className="column is-2 ">
          <LinkStyled
            className="button  is-medium has-text-weight-bold is-fullwidth is-black"
            to="/"
          >
            Contact Us
          </LinkStyled>
        </div>
      </div>
    </div>
  </Section>
);
export default ReachUs;
