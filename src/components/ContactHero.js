import React from 'react';

import styled from 'styled-components';

import ContactFormHero from './ContactFormHero';

const Container = styled.section`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.darkShades};
}
.columns{
  justify-content: space-between;
}
.is-two-fifths{
  margin-top:3rem;
}
.ButtonWrapper {
  margin: 2rem 0rem;
}
.button {
  padding-right: 5rem;
  padding-left: 5rem;
  border-radius: 0.8rem;
}
.title{
font-size:2.8rem;
}
.subtitle{
  line-height:1.7rem;
}
input::placeholder {
    color: ${props => props.theme.darkShades};
  }
`;

const ContactHero = props => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-two-fifths">
          <section className="hero  is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-3 is-spaced has-text-left has-text-weight-bold">
                  {props.title}
                </h1>
                <h2 className="subtitle is-6 has-text-left  has-text-danger has-text-weight-medium">
                  {props.subtitle}
                </h2>
              </div>
            </div>
          </section>
        </div>
        <div className="column is-5">
          <div className="container">
            <ContactFormHero display={props.textareaay} />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default ContactHero;
