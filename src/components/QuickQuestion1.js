// import React from 'react';
// import styled from 'styled-components';

// import QuickHero from './QuickHero';
// import PageHero from './PageHero';

// const Hr = styled.hr`
//   border: 1px solid ${props => props.theme.mainBrandColor};
//   margin: 1.5rem 6.5rem;
// `;

// const QuickQuestion1 = () => (
//   <section className="section">
//     <div className="container">
//       <PageHero title="Quick quote form" subtitle="(3 minutes)" />
//       <Hr />
//       <PageHero
//         title="Let’s talk about your project"
//         subtitle="Question 1/5"
//         paragraph="
// What type of project are you looking to start?
// Select all that apply"
//       />
//       <div className="columns is-centered is-multiline">
//         <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
//         <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
//         <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
//       </div>
//     </div>

//     <Hr />
//   </section>
// );

// export default QuickQuestion1;
import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import QuickHero from './QuickHero';
import PageHero from './PageHero';

import 'react-tabs/style/react-tabs.css';

const Section = styled.div`
ul, li {
    background: transparent;
    border: none;
    color: black;
    text-align: center;
    :focus {
      background: transparent;
      box-shadow: none;
      outline: none;
  }
}
.react-tabs__tab--selected {
  background: transparent;
  }
  .react-tabs__tab:focus:after {
    background: transparent;
  }
}
.tabs-border {
    border-bottom: 2px solid ${props => props.theme.mainBrandColor};
}
.pannels {
  border-bottom: 2px solid ${props => props.theme.mainBrandColor};
  padding-bottom: 1.5rem;
}
`;
const QuickQuestion1 = () => (
  <Section className="section">
    <div className="container">
      <PageHero title="Quick quote form" subtitle="(3 minutes)" />
      <PageHero
        title="Let’s talk about your project"
        subtitle="Question 1/5"
        paragraph="
 What type of project are you looking to start?
 Select all that apply"
      />
      <Tabs>
        <div className="tabs-border">
          <TabList>
            <Tab>
              <QuickHero image="/images/icons/branding-icon.png" text="a" />
            </Tab>

            <Tab>
              <QuickHero image="/images/icons/branding-icon.png" text="B" />
            </Tab>
            <Tab>
              <QuickHero image="/images/icons/branding-icon.png" text="c" />
            </Tab>
          </TabList>
        </div>
        <PageHero
          title="Let’s talk about your project"
          subtitle="Question 2/5"
          paragraph=" What do you need help with? Select all that apply"
        />
        <div className="pannels">
          <TabPanel>
            {' '}
            <div className="columns is-centered is-multiline">
              <QuickHero image="/images/icons/branding-icon.png" text="a1" />{' '}
              <QuickHero image="/images/icons/branding-icon.png" text="a1" />{' '}
              <QuickHero image="/images/icons/branding-icon.png" text="a1" />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="columns is-centered is-multiline">
              <QuickHero image="/images/icons/branding-icon.png" text="b1" />{' '}
              <QuickHero image="/images/icons/branding-icon.png" text="b1" />{' '}
              <QuickHero image="/images/icons/branding-icon.png" text="b1" />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="columns is-centered is-multiline">
              <QuickHero image="/images/icons/branding-icon.png" text="c1" />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  </Section>
);

export default QuickQuestion1;
