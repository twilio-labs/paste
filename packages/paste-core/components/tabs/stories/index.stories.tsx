import * as React from 'react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useUID} from '@twilio-paste/uid-library';
import {Button} from '@twilio-paste/button';
import {Heading} from '@twilio-paste/heading';
import {Anchor} from '@twilio-paste/anchor';
import {Paragraph} from '@twilio-paste/paragraph';
import {useTheme} from '@twilio-paste/theme';
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

export const CustomHorizontalTabs: React.FC = () => {
  const currentTheme = useTheme();
  const selectedId = useUID();

  return (
    <CustomizationProvider
      theme={currentTheme}
      elements={{
        HORIZONTAL_TABS: {
          margin: 'space100',
          padding: 'space100',
          borderStyle: 'solid',
          borderWidth: 'borderWidth30',
          borderColor: 'colorBorderPrimary',
        },
        HORIZONTAL_TAB: {
          fontFamily: 'fontFamilyCode',
          paddingLeft: 'space0',
        },
        HORIZONTAL_TAB_LIST: {
          borderColor: 'colorBorderDestructive',
          marginY: 'space100',
        },
        HORIZONTAL_TAB_LIST_CHILD: {
          borderColor: 'colorBorderDestructive',
        },
        HORIZONTAL_TAB_PANELS: {
          marginX: 'space100',
          borderStyle: 'solid',
          borderWidth: 'borderWidth30',
          borderColor: 'colorBorderPrimaryWeak',
        },
        HORIZONTAL_TAB_PANEL: {
          borderStyle: 'solid',
          borderWidth: 'borderWidth30',
          borderColor: 'colorBorderDestructiveWeak',
          marginY: 'space20',
        },
        HORIZONTAL_CUSTOM_TAB: {
          paddingLeft: 'space40',
          color: 'colorTextWarning',
          fontSize: 'fontSize10',
          borderBottomStyle: 'solid',
          borderBottomWidth: 'borderWidth30',
          borderBottomColor: 'colorBorderPrimary',
        },
        HORIZONTAL_OTHER_TAB: {
          paddingLeft: 'space100',
          color: 'colorText',
          backgroundColor: 'colorBackgroundNeutralWeakest',
        },
        HORIZONTAL_DIFFERENT_PANEL: {
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
        <TabList aria-label="LGBTQ+ Projects">
          <Tab element="HORIZONTAL_CUSTOM_TAB">Inside Out</Tab>
          <Tab>Transgender District</Tab>
          <Tab element="HORIZONTAL_OTHER_TAB" id={selectedId}>
            Audre Lorde Project
          </Tab>
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
          <TabPanel element="HORIZONTAL_DIFFERENT_PANEL">
            <Heading as="h2" variant="heading20">
              Transgender District
            </Heading>
            <Paragraph>
              The mission of the Transgender District is to create an urban environment that fosters the rich history,
              culture, legacy, and empowerment of transgender people and its deep roots in the southeastern Tenderloin
              neighborhood. The transgender district aims to stabilize and economically empower the transgender
              community through ownership of homes, businesses, historic and cultural sites, and safe community spaces.
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
    </CustomizationProvider>
  );
};

export const CustomVerticalTabs: React.FC = () => {
  const currentTheme = useTheme();
  const selectedId = useUID();

  return (
    <CustomizationProvider
      theme={currentTheme}
      elements={{
        VERTICAL_TABS: {
          margin: 'space100',
          padding: 'space100',
          borderStyle: 'solid',
          borderWidth: 'borderWidth30',
          borderColor: 'colorBorderPrimary',
        },
        VERTICAL_TAB: {
          fontFamily: 'fontFamilyCode',
          paddingTop: 'space10',
          fontSize: 'fontSize10',
        },
        VERTICAL_CUSTOM_TAB: {
          backgroundColor: 'colorBackgroundNeutralWeakest',
        },
        VERTICAL_OTHER_TAB: {
          color: 'colorText',
          paddingTop: 'space100',
          borderBottomStyle: 'solid',
          borderBottomWidth: 'borderWidth30',
          borderBottomColor: 'colorBorderPrimary',
        },
        VERTICAL_TAB_LIST: {
          borderColor: 'colorBorderDestructive',
          marginY: 'space100',
        },
        VERTICAL_TAB_LIST_CHILD: {
          borderColor: 'colorBorderDestructive',
        },
        VERTICAL_DIFFERENT_PANEL: {
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <Tabs orientation="vertical" selectedId={selectedId} baseId="vertical-tabs-example">
        <TabList aria-label="LGBTQ+ Projects">
          <Tab id={selectedId}>Inside Out</Tab>
          <Tab element="VERTICAL_CUSTOM_TAB">Transgender District</Tab>
          <Tab>Audre Lorde Project</Tab>
          <Tab element="VERTICAL_OTHER_TAB" disabled>
            Coming soon...
          </Tab>
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
              neighborhood. The transgender district aims to stabilize and economically empower the transgender
              community through ownership of homes, businesses, historic and cultural sites, and safe community spaces.
            </Paragraph>
            <Anchor href="https://www.transgenderdistrictsf.com/">Support The Transgender District</Anchor>
          </TabPanel>
          <TabPanel element="VERTICAL_DIFFERENT_PANEL">
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
    </CustomizationProvider>
  );
};

// @TODO
export const CustomFittedTabs: React.FC = () => {
  const currentTheme = useTheme();
  const selectedId = useUID();

  return (
    <CustomizationProvider
      theme={currentTheme}
      elements={{
        HORIZONTAL_TABS: {
          margin: 'space100',
          padding: 'space100',
          borderStyle: 'dashed',
          borderWidth: 'borderWidth10',
          borderColor: 'colorBorderPrimary',
        },
        HORIZONTAL_TAB: {
          paddingTop: 'space10',
          fontSize: 'fontSize10',
        },
        HORIZONTAL_CUSTOM_TAB: {
          backgroundColor: 'colorBackgroundNeutralWeakest',
          fontFamily: 'fontFamilyCode',
        },
        HORIZONTAL_OTHER_TAB: {
          borderBottomStyle: 'dotted',
          borderBottomWidth: 'borderWidth20',
          borderBottomColor: 'colorBorderPrimary',
        },
        HORIZONTAL_TAB_LIST: {
          borderColor: 'colorBorderDestructive',
          marginY: 'space100',
        },
        HORIZONTAL_TAB_LIST_CHILD: {
          borderColor: 'colorBorderDestructive',
        },
        HORIZONTAL_DIFFERENT_PANEL: {
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <Tabs selectedId={selectedId} baseId="fitted-tabs-example" variant="fitted">
        <TabList aria-label="LGBTQ+ Projects">
          <Tab element="HORIZONTAL_CUSTOM_TAB">Inside Out</Tab>
          <Tab id={selectedId}>Transgender District</Tab>
          <Tab element="HORIZONTAL_OTHER_TAB">Audre Lorde Project</Tab>
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
              neighborhood. The transgender district aims to stabilize and economically empower the transgender
              community through ownership of homes, businesses, historic and cultural sites, and safe community spaces.
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
    </CustomizationProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Tabs',
  component: Tabs,
};
