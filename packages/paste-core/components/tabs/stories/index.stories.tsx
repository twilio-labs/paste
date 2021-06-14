import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Button} from '@twilio-paste/button';
import {Heading} from '@twilio-paste/heading';
import {Anchor} from '@twilio-paste/anchor';
import {Paragraph} from '@twilio-paste/paragraph';
import {useTabState, Tabs, TabList, Tab, TabPanels, TabPanel} from '../src';
import type {TabStateReturn} from '../src';

export const HorizontalTabs: React.FC = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
      <TabList aria-label="LGBTQ+ Projects">
        <Tab>Inside Out</Tab>
        <Tab>Transgender District</Tab>
        <Tab id={selectedId}>Audre Lorde Project</Tab>
        <Tab disabled>Coming soon...</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading as="h2" variant="heading20">
            Inside Out
          </Heading>
          <Paragraph>
            Inside Out empowers, educates, and advocates for LGBTQ+ of youth from the Pikes Peak Region in Southern
            Colorado. Inside Out does this by creating safe spaces, support systems and teaching life skills to all
            youth in the community and working to make the community safer and more accepting of gender and sexual
            orientation diversity.
          </Paragraph>
          <Anchor href="https://insideoutys.org/">Support Inside Out</Anchor>
        </TabPanel>
        <TabPanel>
          <Heading as="h2" variant="heading20">
            Transgender District
          </Heading>
          <Paragraph>
            The mission of the Transgender District is to create an urban environment that fosters the rich history,
            culture, legacy, and empowerment of transgender people and its deep roots in the southeastern Tenderloin
            neighborhood. The transgender district aims to stabilize and economically empower the transgender community
            through ownership of homes, businesses, historic and cultural sites, and safe community spaces.
          </Paragraph>
          <Anchor href="https://www.transgenderdistrictsf.com/">Support The Transgender District</Anchor>
        </TabPanel>
        <TabPanel>
          <Heading as="h2" variant="heading20">
            Audre Lorde Project
          </Heading>
          <Paragraph>
            The Audre Lorde Project is a Lesbian, Gay, Bisexual, Two Spirit, Trans and Gender Non Conforming People of
            Color center for community organizing, focusing on the New York City area. Through mobilization, education
            and capacity-building, they work for community wellness and progressive social and economic justice.
            Committed to struggling across differences, they seek to responsibly reflect, represent and serve their
            various communities.
          </Paragraph>
          <Anchor href="https://alp.org/">Support The Audre Lorde Project</Anchor>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
// @ts-expect-error story
HorizontalTabs.story = {
  name: 'Horizontal Tabs',
};

export const FittedTabs: React.FC = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="fitted-tabs-example" variant="fitted">
      <TabList aria-label="LGBTQ+ Projects">
        <Tab>Inside Out</Tab>
        <Tab id={selectedId}>Transgender District</Tab>
        <Tab>Audre Lorde Project</Tab>
        <Tab disabled>Coming soon...</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading as="h2" variant="heading20">
            Inside Out
          </Heading>
          <Paragraph>
            Inside Out empowers, educates, and advocates for LGBTQ+ of youth from the Pikes Peak Region in Southern
            Colorado. Inside Out does this by creating safe spaces, support systems and teaching life skills to all
            youth in the community and working to make the community safer and more accepting of gender and sexual
            orientation diversity.
          </Paragraph>
          <Anchor href="https://insideoutys.org/">Support Inside Out</Anchor>
        </TabPanel>
        <TabPanel>
          <Heading as="h2" variant="heading20">
            Transgender District
          </Heading>
          <Paragraph>
            The mission of the Transgender District is to create an urban environment that fosters the rich history,
            culture, legacy, and empowerment of transgender people and its deep roots in the southeastern Tenderloin
            neighborhood. The transgender district aims to stabilize and economically empower the transgender community
            through ownership of homes, businesses, historic and cultural sites, and safe community spaces.
          </Paragraph>
          <Anchor href="https://www.transgenderdistrictsf.com/">Support The Transgender District</Anchor>
        </TabPanel>
        <TabPanel>
          <Heading as="h2" variant="heading20">
            Audre Lorde Project
          </Heading>
          <Paragraph>
            The Audre Lorde Project is a Lesbian, Gay, Bisexual, Two Spirit, Trans and Gender Non Conforming People of
            Color center for community organizing, focusing on the New York City area. Through mobilization, education
            and capacity-building, they work for community wellness and progressive social and economic justice.
            Committed to struggling across differences, they seek to responsibly reflect, represent and serve their
            various communities.
          </Paragraph>
          <Anchor href="https://alp.org/">Support The Audre Lorde Project</Anchor>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
// @ts-expect-error story
FittedTabs.story = {
  name: 'Fitted Tabs',
};

export const VerticalTabs: React.FC = () => {
  const selectedId = useUID();
  return (
    <Tabs orientation="vertical" selectedId={selectedId} baseId="vertical-tabs-example">
      <TabList aria-label="LGBTQ+ Projects">
        <Tab id={selectedId}>Inside Out</Tab>
        <Tab>Transgender District</Tab>
        <Tab>Audre Lorde Project</Tab>
        <Tab disabled>Coming soon...</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading as="h2" variant="heading20">
            Inside Out
          </Heading>
          <Paragraph>
            Inside Out empowers, educates, and advocates for LGBTQ+ of youth from the Pikes Peak Region in Southern
            Colorado. Inside Out does this by creating safe spaces, support systems and teaching life skills to all
            youth in the community and working to make the community safer and more accepting of gender and sexual
            orientation diversity.
          </Paragraph>
          <Anchor href="https://insideoutys.org/">Support Inside Out</Anchor>
        </TabPanel>
        <TabPanel>
          <Heading as="h2" variant="heading20">
            Transgender District
          </Heading>
          <Paragraph>
            The mission of the Transgender District is to create an urban environment that fosters the rich history,
            culture, legacy, and empowerment of transgender people and its deep roots in the southeastern Tenderloin
            neighborhood. The transgender district aims to stabilize and economically empower the transgender community
            through ownership of homes, businesses, historic and cultural sites, and safe community spaces.
          </Paragraph>
          <Anchor href="https://www.transgenderdistrictsf.com/">Support The Transgender District</Anchor>
        </TabPanel>
        <TabPanel>
          <Heading as="h2" variant="heading20">
            Audre Lorde Project
          </Heading>
          <Paragraph>
            The Audre Lorde Project is a Lesbian, Gay, Bisexual, Two Spirit, Trans and Gender Non Conforming People of
            Color center for community organizing, focusing on the New York City area. Through mobilization, education
            and capacity-building, they work for community wellness and progressive social and economic justice.
            Committed to struggling across differences, they seek to responsibly reflect, represent and serve their
            various communities.
          </Paragraph>
          <Anchor href="https://alp.org/">Support The Audre Lorde Project</Anchor>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
// @ts-expect-error story
VerticalTabs.story = {
  name: 'Vertical Tabs',
};

const useButtonClickTabState = (): TabStateReturn => {
  const tab = useTabState();
  return {
    ...tab,
    baseId: 'state-hook-tab-example',
  };
};

export const StateHookTabs: React.FC = () => {
  const {...tab} = useButtonClickTabState();
  return (
    <Tabs state={tab}>
      <TabList aria-label="Tabs to test programmatic state handling">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Paragraph>Tab 1</Paragraph>
          <Button variant="primary" onClick={() => tab.select('state-hook-tab-example-2')}>
            Go to tab 2
          </Button>
        </TabPanel>
        <TabPanel>
          <Paragraph>Tab 2</Paragraph>
          <Button variant="primary" onClick={() => tab.select('state-hook-tab-example-1')}>
            Go back to tab 1
          </Button>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
// @ts-expect-error story
StateHookTabs.story = {
  name: 'State hook example',
};

export const CenterAlignTabTest: React.FC = () => {
  return (
    <Tabs>
      <TabList aria-label="Testing horizontal alignment on small Tabs">
        <Tab>1</Tab>
        <Tab>Normal</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Paragraph>The above tab label should be center aligned.</Paragraph>
        </TabPanel>
        <TabPanel>
          <Paragraph>
            This tab label has longer text that takes up the full width of the tab. The text-alignment cannot be seen.
          </Paragraph>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
// @ts-expect-error story
CenterAlignTabTest.story = {
  name: 'Testing Center Alignment',
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Tabs',
  component: Tabs,
};
