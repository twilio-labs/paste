import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from '@twilio-paste/button';
import {Paragraph} from '@twilio-paste/typography';
import {Stack} from '@twilio-paste/stack';
import {useUID} from '@twilio-paste/uid-library';
import {useTabPrimitiveState, TabPrimitive, TabPrimitiveList, TabPrimitivePanel, TabPrimitiveStateReturn} from '../src';

const HorizontalTabsExample: React.FC = () => {
  const selectedId = useUID();
  const tab = useTabPrimitiveState({selectedId});
  return (
    <>
      <TabPrimitiveList {...tab} aria-label="My tabs">
        <Stack orientation="horizontal" spacing="space20">
          <TabPrimitive {...tab} id={selectedId}>
            {(props: TabPrimitiveStateReturn) => (
              <Button {...props} variant="primary" size="small">
                Tab 1
              </Button>
            )}
          </TabPrimitive>
          <TabPrimitive {...tab}>
            {(props: TabPrimitiveStateReturn) => (
              <Button {...props} variant="primary" size="small" disabled>
                Tab 2 (disabled)
              </Button>
            )}
          </TabPrimitive>
          <TabPrimitive {...tab}>
            {(props: TabPrimitiveStateReturn) => (
              <Button {...props} variant="primary" size="small">
                Tab 3
              </Button>
            )}
          </TabPrimitive>
        </Stack>
      </TabPrimitiveList>
      <TabPrimitivePanel {...tab}>Tab 1</TabPrimitivePanel>
      <TabPrimitivePanel {...tab}>Tab 2</TabPrimitivePanel>
      <TabPrimitivePanel {...tab}>Tab 3</TabPrimitivePanel>
    </>
  );
};

const VerticalTabsExample: React.FC = () => {
  const selectedId = useUID();
  const tab = useTabPrimitiveState({orientation: 'vertical', selectedId});
  return (
    <>
      <Paragraph>This changes the keys to jump between tabs from left/right arrow to up/down arrow</Paragraph>
      <div style={{display: 'flex'}}>
        <TabPrimitiveList
          {...tab}
          aria-label="My tabs"
          style={{borderRight: '1px solid black', paddingRight: 10, marginRight: 10}}
        >
          <Stack orientation="vertical" spacing="space20">
            <TabPrimitive {...tab} id={selectedId}>
              {(props: TabPrimitiveStateReturn) => (
                <Button {...props} variant="primary" size="small">
                  Tab 1
                </Button>
              )}
            </TabPrimitive>
            <TabPrimitive {...tab}>
              {(props: TabPrimitiveStateReturn) => (
                <Button {...props} variant="primary" size="small">
                  Tab 2
                </Button>
              )}
            </TabPrimitive>
            <TabPrimitive {...tab}>
              {(props: TabPrimitiveStateReturn) => (
                <Button {...props} variant="primary" size="small">
                  Tab 3
                </Button>
              )}
            </TabPrimitive>
          </Stack>
        </TabPrimitiveList>
        <TabPrimitivePanel {...tab}>Tab 1</TabPrimitivePanel>
        <TabPrimitivePanel {...tab}>Tab 2</TabPrimitivePanel>
        <TabPrimitivePanel {...tab}>Tab 3</TabPrimitivePanel>
      </div>
    </>
  );
};

storiesOf('Primitives|Tabs', module)
  .add('Horizontal Tabs', () => {
    return <HorizontalTabsExample />;
  })
  .add('Vertical Tabs', () => {
    return <VerticalTabsExample />;
  });
