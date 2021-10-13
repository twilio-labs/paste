import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Column, Grid} from '@twilio-paste/grid';
import {Card} from '@twilio-paste/card';
import {Paragraph} from '@twilio-paste/paragraph';
import {Anchor} from '@twilio-paste/anchor';

import {LandingPageSection, LandingPageSectionContent} from './LandingPageLayoutUtils';

export const ReadyToGetStarted: React.FC = () => {
  return (
    <LandingPageSection marginTop="space200" paddingTop={['space200', 'space200', 'space200']}>
      <LandingPageSectionContent variant="default">
        <Heading as="h2" variant="heading20">
          Ready to get started?
        </Heading>
        <Grid
          gutter={['space0', 'space40', 'space40', 'space40']}
          vertical={[true, true, true, false]}
          equalColumnHeights
        >
          <Column span={[12, 12, 12, 6]}>
            <Grid gutter={['space40', 'space40', 'space40']} vertical={[true, false, false]} equalColumnHeights>
              <Column span={[12, 6, 6]}>
                <Card>
                  <Heading as="h3" variant="heading30">
                    Customization provider docs
                  </Heading>
                  <Paragraph>
                    Learn how to install the Customization Provider to your Twilio and Paste-powered app.
                  </Paragraph>
                  <Anchor href="/customization/customization-provider">Read the Provider docs</Anchor>
                </Card>
              </Column>
              <Column span={[12, 6, 6]}>
                <Card>
                  <Heading as="h3" variant="heading30">
                    Creating a custom theme
                  </Heading>
                  <Paragraph>Tips on how to create the best custom theme for your Paste-powered app.</Paragraph>
                  <Anchor href="/customization/creating-a-custom-theme">Read the theming docs</Anchor>
                </Card>
              </Column>
            </Grid>
          </Column>
          <Column span={[12, 12, 12, 6]}>
            <Grid gutter={['space40', 'space40', 'space40']} vertical={[true, false, false]} equalColumnHeights>
              <Column span={[12, 6, 6]}>
                <Card>
                  <Heading as="h3" variant="heading30">
                    Customizing components
                  </Heading>
                  <Paragraph>Guidance on extending or customizing Paste components to suit your needs.</Paragraph>
                  <Anchor href="/customization/customizing-component-elements">
                    Read the component customization docs
                  </Anchor>
                </Card>
              </Column>
              <Column span={[12, 6, 6]}>
                <Card>
                  <Heading as="h3" variant="heading30">
                    Creating custom components
                  </Heading>
                  <Paragraph>Use the base system to create new, custom components on top of Paste.</Paragraph>
                  <Anchor href="/customization/composing-custom-components-with-design-tokens">
                    Read the custom component docs
                  </Anchor>
                </Card>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </LandingPageSectionContent>
    </LandingPageSection>
  );
};
