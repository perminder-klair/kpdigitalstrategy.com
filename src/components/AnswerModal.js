import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.primaryColor};
  padding: 1rem 3rem;
`;

const AnswerModal = () => (
  <Container className="">
    <p className="has-text-weight-semibold has-text-black">
      Below is a sample of “Lorem ipsum dolor sit” dummy copy text often used to
      show font face samples, for page layout and design as sample layout text
      by printers, graphic designers, Web designers, people creating Microsoft
      Word templates, and many other uses. It mimics the look of real text quite
      well as you design and set up your page layouts.
    </p>
  </Container>
);

export default AnswerModal;
