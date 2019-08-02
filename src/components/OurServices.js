import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundDark};
  .ListTitle {
    padding: 1rem 0rem;
  }
`;
const OurServices = () => (
  <Container className="section">
    <div className="container">
      <p className="is-size-6">OUR SERVICES</p>
      <div className="columns">
        <div className="column">
          <div>
            <h4 className="ListTitle has-text-white has-text-weight-normal">
              CREATIVE & DESIGN
            </h4>
          </div>
          <ul className="has-text-weight-light">
            <li className="has-text-white">Design Direction</li>
            <li className="has-text-white">Creative Conepts & Ideas</li>
            <li className="has-text-white">Brading & identity</li>
            <li className="has-text-white">Illustration & infographics</li>
            <li className="has-text-white">App Design</li>
            <li className="has-text-white">User Experience</li>
            <li className="has-text-white">Wireframing & Protyping</li>
            <li className="has-text-white">Printing</li>
          </ul>
        </div>
        <div className="column">
          <div>
            <h4 className="ListTitle has-text-white has-text-weight-normal">
              MARKETING STARTEGY
            </h4>
          </div>
          <ul className="has-text-weight-light">
            <li className="has-text-white">Strategic planning</li>
            <li className="has-text-white">Content Strategy</li>
            <li className="has-text-white">Brand experience</li>
            <li className="has-text-white">PPC advertsing</li>
            <li className="has-text-white">Google Merchant Centre</li>
            <li className="has-text-white">Amzone Seller Central</li>
            <li className="has-text-white">Account based marketing</li>
            <li className="has-text-white">Email marketing</li>
            <li className="has-text-white">Data & analytics</li>
            <li className="has-text-white">Social media</li>
          </ul>
        </div>
        <div className="column">
          <div>
            <h4 className="ListTitle has-text-white has-text-weight-normal">
              Web Design
            </h4>
          </div>
          <ul className="has-text-weight-light">
            <li className="has-text-white">Website design</li>
            <li className="has-text-white">Word website development</li>
            <li className="has-text-white">CMS</li>
            <li className="has-text-white">Technical support</li>
            <li className="has-text-white">Hosting</li>
            <li className="has-text-white">eCommerce</li>
            <li className="has-text-white">Mobile website</li>
            <li className="has-text-white">Web and Mobile UI</li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
);

export default OurServices;
