import React from 'react';
import styled from 'styled-components';
import AnswerModal from './AnswerModal';

const Container = styled.div`
  padding: 1rem 0rem;
  background-color: #1e2126;
  .Icon {
    font-size: 23px;
    margin: 0rem 2rem;
    color: ${props => props.theme.SecondaryColor};
  }
  h1 {
    color: ${props => props.theme.primaryColor};
  }
`;

const TitleWrapper = styled.div`
  margin: 0rem 3rem;
`;

class CardQuestions extends React.Component {
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
    const { Questions } = this.props;

    return (
      <Container className="container">
        <div className="columns is-9">
          <div className="column is-four-fifths">
            <TitleWrapper>
              <h1 className="has-text-weight-medium ">{Questions}</h1>
            </TitleWrapper>
          </div>
          <div className="column">
            <a onClick={this.toggleDiv}>
              <i className="Icon fas fa-chevron-circle-down is-pulled-right" />
            </a>
          </div>
        </div>
        {this.state.show && <AnswerModal />}
      </Container>
    );
  }
}

export default CardQuestions;
