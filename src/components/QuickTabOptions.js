import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props =>
    props.focus ? props.theme.mainBrandColor : props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.mainBrandColor};
  padding: 2.5rem 3.5rem;
  margin: 1rem;
  :active {
    background-color: ${props => props.theme.mainBrandColor}!important;
    color: #ffffff;
  }

  .subtitle {
    margin-top: 2rem;
  }
`;

const QuickTabOptions = ({ redIcon, whiteIcon, text, onPress, selected }) => {
  return (
    <Container focus={selected} className="has-text-centered" onClick={onPress}>
      {selected ? (
        <img src={whiteIcon} alt="logo" />
      ) : (
        <img src={redIcon} alt="logo" />
      )}

      <h4 className="subtitle is-5 has-text-centered">{text}</h4>
    </Container>
  );
};

export default QuickTabOptions;
