import React from 'react';

import styled from 'styled-components';

import ContactForm from './ContactForm';

const Container = styled.section`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.darkShades};
}
.ButtonWrapper {
  margin: 2rem 0rem;
}
.button {
  padding-right: 5rem;
  padding-left: 5rem;
}
`;

const ContactHero = props => (
  <Container className="section">
    <div className="container">
      <div className="columns is-variable is-8">
        <div className="column is-one-third">
          <section className="hero  is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-3 is-spaced has-text-left">
                  {props.title}
                </h1>
                <h2 className="subtitle is-6 has-text-left is has-text-danger">
                  {props.subtitle}
                </h2>
              </div>
            </div>
          </section>
        </div>
        <div className="column is-6">
          <div className="container">
            <ContactForm display={props.textareaay} />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default ContactHero;
