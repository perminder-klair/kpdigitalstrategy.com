import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';

import styled from 'styled-components';

const Container = styled.div`
  margin-top: -2rem;
`;

const Text = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Container>
      {count ? (
        <Typist
          className="title is-1 is-size-3-mobile has-text-weight-bold"
          avgTypingDelay={50}
          onTypingDone={() => setCount(0)}
        >
          <Typist.Delay ms={500} />
          <span> a new website?</span>
          <Typist.Backspace count={18} delay={1500} />
          <span>a new logo?</span>
          <Typist.Backspace count={18} delay={1500} />
          <span>a brand refresh?</span>
          <Typist.Backspace count={18} delay={1500} />
        </Typist>
      ) : (
        ''
      )}
    </Container>
  );
};

export default Text;
