import React from 'react';
import { useState, useEffect, useRef } from 'react';
import useTypewriter from 'react-typewriter-hook';
import styled from 'styled-components';
import { random } from 'lodash';

const Container = styled.div`
  height: 51px;
  h1 {
    color: ${props => props.theme.SecondaryColor};
  }
  .cursor {
    display: inline-block;
    position: relative;
  }
  .cursor::after {
    content: '';
    margin: auto;
    position: absolute;
    right: -4px;
    top: -3px;
    width: 1px;
    height: 100%;
    animation: cursor-animation 1.5s step-end infinite;
  }
  @keyframes cursor-animation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const MagicOcean = [
  'A New WebSite?',
  'A Rebrand?',
  'A Marketing Strategy',
  'A Logo Design',
];
let index = 0;

const TypingAnimation = () => {
  const [magicName, setMagicName] = useState('magic is going to happen');
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);
  return (
    <Container>
      <h1 className="cursor is-capitalized is-size-1 has-text-weight-bold">
        {name}
      </h1>
    </Container>
  );
};

export default TypingAnimation;
