import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem 0rem;
  background-color: ${props => props.theme.backgroundColorGrey};
  border-radius: 2rem;
  .Icon {
    font-size: 27px;
    margin: 0rem 2rem;
    @media only screen and (max-width: 600px) {
      margin: 0rem 7rem;
    }
  }
  h1 {
    font-size: 18px;
  }
`;

const TitleWrapper = styled.div`
  margin: 4px 3rem;
`;

const AnswerContainer = styled.div`
  padding: 1rem 3rem;
`;

class FaqItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { questions } = this.props;
    const { show } = this.state;

    return (
      <Container className="container">
        <div className="columns is-9">
          <div className="column is-four-fifths">
            <TitleWrapper>
              <h1 className="has-text-weight-medium">{questions}</h1>
            </TitleWrapper>
          </div>
          <div className="column">
            <a onClick={this.toggleDiv}>
              <i className="Icon fas fa-chevron-circle-down is-pulled-right" />
            </a>
          </div>
        </div>
        {show && (
          <AnswerContainer>
            <p>
              Below is a sample of “Lorem ipsum dolor sit” dummy copy text often
              used to show font face samples, for page layout and design as
              sample layout text by printers, graphic designers, Web designers,
              people creating Microsoft Word templates, and many other uses. It
              mimics the look of real text quite well as you design and set up
              your page layouts.
            </p>
          </AnswerContainer>
        )}
      </Container>
    );
  }
}

export default FaqItem;
