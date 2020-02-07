import React from 'react';
import styled from 'styled-components';

const Section = styled.div`background: red;`;
const ReasonInformation = () => (
  <Section class="section">
    <div className="container">
      <h1 className="title">Section</h1>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>,
        like the one you're currently reading
      </h2>
    </div>
  </Section>
);
export default ReasonInformation;
