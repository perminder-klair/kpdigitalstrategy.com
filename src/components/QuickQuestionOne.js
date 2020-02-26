import React, { useState } from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import QuickTabOptions from './QuickTabOptions';
import QuickCheckBox from './QuickCheckBox';
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
.panels {
  border-bottom: 2px solid ${props => props.theme.mainBrandColor};
  padding-bottom: 1.5rem;
}
`;
const QuickQuestionOne = () => {
  const [tab, tabSelected] = useState('zero');
  return (
    <Section className="section">
      <div className="container">
        <PageHero title="Quick quote form" subtitle="(3 minutes)" />
        <PageHero
          title="Let’s talk about your project"
          subtitle="Question 1/5"
          paragraph="What type of project are you looking to start ? Select all that apply"
        />
        <Tabs>
          <div className="tabs-border">
            <TabList>
              <Tab>
                <QuickTabOptions
                  selected={tab === 'first'}
                  onPress={() => tabSelected('first')}
                  redIcon="/images/icons/branding-icon.png"
                  whiteIcon="/images/icons/target-icon.png"
                  text="Branding"
                />
              </Tab>
              <Tab>
                <QuickTabOptions
                  selected={tab === 'second'}
                  onPress={() => tabSelected('second')}
                  redIcon="/images/icons/website-icon.png"
                  whiteIcon="/images/icons/target-icon.png"
                  text="Website"
                />
              </Tab>
              <Tab>
                <QuickTabOptions
                  selected={tab === 'third'}
                  onPress={() => tabSelected('third')}
                  redIcon="/images/icons/marketing-icon.png"
                  whiteIcon="/images/icons/target-icon.png"
                  text="Marketing"
                />
              </Tab>
            </TabList>
          </div>
          <PageHero
            title="Let’s talk about your project"
            subtitle="Question 2/5"
            paragraph=" What do you need help with? Select all that apply"
          />
          <div className="panels">
            <TabPanel>
              {' '}
              <div className="columns is-centered is-multiline">
                <QuickCheckBox id="1" value="1" />
                <QuickCheckBox id="2" value="2" />
                <QuickCheckBox id="3" value="3" />
              </div>
            </TabPanel>

            <TabPanel>
              <div className="columns is-centered is-multiline">
                <QuickCheckBox id="1" value="1" />
                <QuickCheckBox id="2" value="2" />
                <QuickCheckBox id="3" value="3" />
                <QuickCheckBox id="4" value="4" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="columns is-centered is-multiline">
                <QuickCheckBox id="1" value="1" />
                <QuickCheckBox id="2" value="2" />
                <QuickCheckBox id="3" value="3" />
                <QuickCheckBox id="4" value="4" />
                <QuickCheckBox id="5" value="5" />
                <QuickCheckBox id="6" value="6" />
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </Section>
  );
};
export default QuickQuestionOne;
