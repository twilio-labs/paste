import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from '@twilio-paste/button';
import {Paragraph} from '@twilio-paste/typography';
import {Stack} from '@twilio-paste/stack';
import {useUID} from 'react-uid';
import {useTabsPrimitiveState, TabsPrimitive, TabsPrimitiveList, TabsPrimitivePanel} from '../src';

const BaseExample: React.FC<{}> = () => {
  const tabId = useUID();
  const tab = useTabsPrimitiveState({selectedId: tabId});
  return (
    <>
      <TabsPrimitiveList {...tab} aria-label="My tabs">
        <Stack orientation="horizontal" spacing="space20">
          <TabsPrimitive as={Button} size="small" {...tab}>
            Tab 1
          </TabsPrimitive>
          <TabsPrimitive {...tab}>
            {(props: any) => (
              <Button {...props} variant="primary" size="small" disabled>
                Tab 2 (disabled)
              </Button>
            )}
          </TabsPrimitive>
          <TabsPrimitive as={Button} size="small" {...tab}>
            Tab 3
          </TabsPrimitive>
        </Stack>
      </TabsPrimitiveList>
      <TabsPrimitivePanel {...tab}>Tab 1</TabsPrimitivePanel>
      <TabsPrimitivePanel {...tab}>Tab 2</TabsPrimitivePanel>
      <TabsPrimitivePanel {...tab}>Tab 3</TabsPrimitivePanel>
    </>
  );
};

const NoDefaultSelected: React.FC<{}> = () => {
  const tab = useTabsPrimitiveState({selectedId: null});
  return (
    <>
      <TabsPrimitiveList {...tab} aria-label="My tabs">
        <Stack orientation="horizontal" spacing="space20">
          <TabsPrimitive as={Button} size="small" {...tab}>
            Tab 1
          </TabsPrimitive>
          <TabsPrimitive as={Button} size="small" {...tab}>
            Tab 2
          </TabsPrimitive>
          <TabsPrimitive as={Button} size="small" {...tab}>
            Tab 3
          </TabsPrimitive>
        </Stack>
      </TabsPrimitiveList>
      <TabsPrimitivePanel {...tab}>Tab 1</TabsPrimitivePanel>
      <TabsPrimitivePanel {...tab}>Tab 2</TabsPrimitivePanel>
      <TabsPrimitivePanel {...tab}>Tab 3</TabsPrimitivePanel>
    </>
  );
};

const VerticalTabsExample: React.FC<{}> = () => {
  const tab = useTabsPrimitiveState({orientation: 'vertical'});
  return (
    <>
      <Paragraph>This changes the keys to jump between tabs from left/right arrow to up/down arrow</Paragraph>
      <div style={{display: 'flex'}}>
        <TabsPrimitiveList
          {...tab}
          aria-label="My tabs"
          style={{borderRight: '1px solid black', paddingRight: 10, marginRight: 10}}
        >
          <Stack orientation="vertical" spacing="space20">
            <TabsPrimitive as={Button} size="small" {...tab}>
              Tab 1
            </TabsPrimitive>
            <TabsPrimitive as={Button} size="small" {...tab}>
              Tab 2
            </TabsPrimitive>
            <TabsPrimitive as={Button} size="small" {...tab}>
              Tab 3
            </TabsPrimitive>
          </Stack>
        </TabsPrimitiveList>
        <TabsPrimitivePanel {...tab}>Tab 1</TabsPrimitivePanel>
        <TabsPrimitivePanel {...tab}>Tab 2</TabsPrimitivePanel>
        <TabsPrimitivePanel {...tab}>Tab 3</TabsPrimitivePanel>
      </div>
    </>
  );
};

storiesOf('Primitives|Tabs', module)
  .add('Simple Tabs', () => {
    return <BaseExample />;
  })
  .add('No Default Tab Selection', () => {
    return <NoDefaultSelected />;
  })
  .add('Vertical Tabs', () => {
    return <VerticalTabsExample />;
  });
