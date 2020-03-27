import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, boolean, number, text} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Paragraph} from '@twilio-paste/paragraph';
import {Truncate} from '@twilio-paste/truncate';
import {Flex} from '../src';
import {Display, VerticalAlign, HorizontalAlign} from '../src/types';

const flexDisplayOptions = ['flex', 'inline-flex'];
const flexVerticalAlignOptions = ['top', 'center', 'bottom', 'stretch'];
const flexHorizontalAlignOptions = ['left', 'center', 'right', 'around', 'between'];

storiesOf('Layout|Flex', module)
  .addDecorator(withKnobs)
  .add('Flex Alignment Options', () => {
    const asValue = text('as', 'div') as keyof JSX.IntrinsicElements;
    const flexDisplayValue = select('display', flexDisplayOptions, 'flex') as Display;
    const flexVerticalAlignValue = select('vAlignContent', flexVerticalAlignOptions, 'top') as VerticalAlign;
    const flexHorizontalAlignValue = select('hAlignContent', flexHorizontalAlignOptions, 'left') as HorizontalAlign;
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex
          as={asValue}
          display={flexDisplayValue}
          vertical={boolean('vertical', false)}
          hAlignContent={flexHorizontalAlignValue}
          vAlignContent={flexVerticalAlignValue}
          wrap={boolean('wrap', false)}
        >
          <Flex shrink>
            <Box margin="space20" padding="space20" backgroundColor="colorBackgroundBrand" minWidth="size30">
              <Text textColor="colorTextInverse" textAlign="center">
                Item 1
              </Text>
            </Box>
          </Flex>
          <Flex grow>
            <Box margin="space20" padding="space20" backgroundColor="colorBackgroundBrandHighlight">
              <Text textColor="colorTextInverse" textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nunc mi. Duis faucibus, quam id tempus
                porta, libero sem faucibus odio, ut egestas massa dolor quis mi.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Flex Options', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex">
          <Flex grow={number('grow', 0)} shrink={number('shrink', 1)} basis={number('basis', 100)}>
            <Box backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Flex Grow', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex">
          <Flex grow>
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10">
              <Text textColor="colorTextInverse">I will grow and shrink</Text>
            </Box>
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Flex Shrink', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex">
          <Flex grow shrink={0}>
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="size40" minHeight="size10">
              <Text textColor="colorTextInverse">I won&apos;t shrink</Text>
            </Box>
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Flex Basis', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex">
          <Flex basis={400}>
            <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10">
              <Text textColor="colorTextInverse">I will always be 400px</Text>
            </Box>
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Row', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Column', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex" vertical>
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Wrap', () => {
    return (
      <Box width="size50" padding="space30" borderStyle="solid">
        <Flex display="flex" wrap>
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Nowrap', () => {
    return (
      <Box width="size50" padding="space30" borderStyle="solid">
        <Flex display="flex">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Vertical Align Top', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex" vAlignContent="top">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size20" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size30" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Vertical Align Center', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex" vAlignContent="center">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size20" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size30" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Vertical Align Bottom', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex" vAlignContent="bottom">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size20" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size30" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Vertical Align Stretch', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex" vAlignContent="stretch">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" height="100%" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size20" height="100%" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size30" height="100%" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Horizontal Align Left', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex" hAlignContent="left">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Horizontal Align Center', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex" hAlignContent="center">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Horizontal Align Right', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex" hAlignContent="right">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Horizontal Align Space Around', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex" hAlignContent="around">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Horizontal Align Space Between', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Flex display="flex" hAlignContent="between">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Responsive', () => {
    return (
      <Box padding="space30" borderStyle="solid">
        <Paragraph>Boxes will be vertical on mobile and desktop browser sizes.</Paragraph>
        <Flex display="flex" vertical={[true, false, true]}>
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
    );
  })
  .add('Contained width', () => {
    return (
      <Box padding="space30" borderStyle="solid" size="size70">
        <Paragraph>Text should not cause the flex boxes to break out of their containers when too long.</Paragraph>
        <Flex>
          <Flex>
            <Truncate>http://www.extremelylongurlthatmightbreakthelayout.com</Truncate>
          </Flex>
          <Flex>
            <Truncate>http://www.extremelylongurlthatmightbreakthelayout.com</Truncate>
          </Flex>
        </Flex>
      </Box>
    );
  });
