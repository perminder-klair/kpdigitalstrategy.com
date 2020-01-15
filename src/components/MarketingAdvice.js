import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Section = styled.section`
  p {
    background-color: ${props => props.theme.backgroundColorGrey};
  }
  .button {
    width: 100%;
    @media screen and (max-width: 600px) {
      width: 70%;
    }
  }
  .input {
    height: 100%;
  }
`;
const NavItems = [
  {
    id: 1,
    name: "Branding",
    url: "/page/Branding",
    class: "button is-rounded is-danger has-text-weight-bold"
  },
  {
    id: 1,
    name: "Digital Marketing",
    url: "/page/Digital-Marketing",
    class: "button is-rounded is-link has-text-weight-bold"
  },
  {
    id: 1,
    name: "Website Development",
    url: "page/Website-Development",
    class: "button is-rounded is-secondary has-text-weight-bold"
  },
  {
    id: 1,
    name: "Social Media",
    url: "/page/Social-Media",
    class: "button is-rounded is-primary has-text-weight-bold"
  },
  {
    id: 1,
    name: "Business Advice",
    url: "/page/Business-Advice",
    class: "button is-rounded is-info has-text-weight-bold"
  }
];

const FeaturesArticles = () => (
  <Section>
    <div className="columns is-centered">
      <div className="column  has-text-centered">
        <p className="has-text-weight-light">
          KP Digital Home Design & Marketing Advice Centre
        </p>
      </div>
    </div>
    <div className="container">
      <div className="columns has-text-centered">
        {NavItems.map(item => (
          <div className="column">
            <Link to={item.url} className={item.class}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="columns">
        <div className="column is-11">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Search by keyword"
          />
        </div>
        <div className="column  has-text-centered">
          <button
            className="button is-rounded is-danger has-text-weight-bold"
            type="button"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default FeaturesArticles;
