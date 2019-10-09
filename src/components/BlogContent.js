import React from 'react';
import styled from 'styled-components';

import BlogContentcard from './BlogContentcard';
import BlogProjectIdea from './BlogProjectIdea';

const Section = styled.section`
  .color,
  .card-image {
    background-color: ${props => props.color};
  }
  .icon {
    margin-left: 1.25rem;
    margin-top: 1rem;
  }
  .test {
    background: yellow;
  }
  .content {
    line-height: 1.5;
  }
  .tag {
    padding: 1rem 1rem;
  }

  span,
  .has-text-danger {
    color: ${props => props.color} !important;
  }
  .is-danger {
    background-color: ${props => props.color} !important;
    color: #fff !important;
  }
`;

class BlogContent extends React.Component {
  render() {
    const { page } = this.props;
    return (
      <Section color={page.color}>
        <div className="columns">
          <div className="column is-1 color" />
          <div className="column is-1">
            <section className="section">
              <p className="is-block">Share:</p>
              <span className="icon is-block-desktop is-size-3">
                <i className="fab fa-linkedin" />
              </span>
              <span className="icon is-block-desktop is-size-3">
                <i className="fab fa-instagram" />
              </span>
              <span className="icon is-block-desktop is-size-3">
                <i className="fab fa-facebook-square" />
              </span>
              <span className="icon is-block-desktop is-size-3">
                <i className="fab fa-whatsapp-square" />
              </span>
              <span className="icon is-block-desktop is-size-3">
                <i className="fab fa-pinterest-square" />
              </span>
            </section>
          </div>
          <div className="column is-6">
            <section className="section">
              <div className="container content">
                <h1 className="title is-5 has-text-danger">{page.title}</h1>
                <p>
                  Rich text is more exciting than plain text. It supports text
                  formatting, such as bold, italics, and underlining, as well as
                  different fonts, font sizes, and colored text. Rich text
                  documents can also include page formatting options, such as
                  custom page margins, line spacing, and tab widths. Most word
                  processors, such as Microsoft Word, Lotus Word Pro, and
                  AppleWorks, create rich text documents. However, if you save a
                  document in a program's native format, it may only open with
                  the program that created it. For example, Lotus Word Pro will
                  not be able to open an AppleWorks text document, even though
                  both programs are text editors. This is because each program
                  uses its own method of formatting and creating text files. The
                  good news is, most word processors allow you to save rich text
                  documents in the generic Rich Text Format. This file format,
                  which uses the .RTF extension keeps most, if not all the text
                  formatting. However, because it is a standard format, it can
                  be opened by just about any word processing program and even
                  most basic text editors.
                </p>
              </div>
            </section>
          </div>
          <div className="column">
            <section className="section">
              <div className="container">
                <p className="has-text-danger has-text-weight-semibold">
                  Related Content
                </p>
                <BlogContentcard />
                <BlogContentcard />
                <BlogContentcard />
                <div className="tags is-block">
                  <p className="is-block  has-text-weight-semibold">Tags</p>
                  <span className="tag is-rounded is-danger has-text-weight-semibold">
                    Google Analytics
                  </span>
                  <span className="tag is-rounded is-danger has-text-weight-semibold">
                    Maketing
                  </span>
                  <span className="tag is-rounded is-danger has-text-weight-semibold">
                    Data
                  </span>
                  <BlogProjectIdea />
                </div>
              </div>
            </section>
          </div>
        </div>
      </Section>
    );
  }
}
export default BlogContent;
