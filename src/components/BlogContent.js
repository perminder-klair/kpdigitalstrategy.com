import React from 'react';
import styled from 'styled-components';

import ProcessItems from './ProcessItems';

const Section = styled.section`
  .color {
    background-color: ${props => props.theme.mainBrandColor};
  }
  .icon {
    margin-top: 1rem;
  }
  .test {
    background: yellow;
  }
`;

const BlogContent = () => (
  <Section>
    <div className="columns">
      <div className="column is-1 color" />
      <div className="column is-1">
        <section className="section">
          <p className="is-block">Share:</p>
          <span className="icon has-text-danger is-block is-size-3">
            <i className="fab fa-linkedin" />
          </span>
          <span className="icon has-text-danger is-block is-size-3">
            <i className="fab fa-instagram" />
          </span>
          <span className="icon has-text-danger is-block is-size-3">
            <i className="fab fa-facebook-square" />
          </span>
          <span className="icon has-text-danger is-block is-size-3">
            <i className="fab fa-whatsapp-square" />
          </span>
          <span className="icon has-text-danger is-block is-size-3">
            <i className="fab fa-pinterest-square" />
          </span>
        </section>
      </div>
      <div className="column">
        <section className="section">
          <div className="container">
            Hello World Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius
            lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui.
            Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
            Second level Curabitur accumsan turpis pharetra augue tincidunt
            blandit. Quisque condimentum maximus mi, sit amet commodo arcu
            rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse
            potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at
            dignissim dui. Ut et neque nisl. In fermentum leo eu lectus mollis,
            quis dictum mi aliquet. Morbi eu nulla lobortis, lobortis est in,
            fringilla felis. Aliquam nec felis in sapien venenatis viverra
            fermentum nec lectus. Ut non enim metus.
          </div>
        </section>
      </div>
      <div className="column" />
    </div>
  </Section>
);

export default BlogContent;
