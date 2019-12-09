import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, boolean} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Flex, DisplayOptions, vAlignOptions, hAlignOptions} from '../src';

const flexDisplayOptions = ['flex', 'inline-flex'];
const flexVerticalAlignOptions = ['top', 'center', 'bottom', 'stretch'];
const flexHorizontalAlignOptions = ['left', 'center', 'right', 'around', 'between'];

storiesOf('Utilities|Flex', module)
  .addDecorator(withKnobs)
  .add('Alignment Options', () => {
    const flexDisplayValue = select('display', flexDisplayOptions, 'flex') as DisplayOptions;
    const flexVerticalAlignValue = select('vAlignContent', flexVerticalAlignOptions, 'top') as vAlignOptions;
    const flexHorizontalAlignValue = select('hAlignContent', flexHorizontalAlignOptions, 'left') as hAlignOptions;
    return (
      <Flex
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
        <Flex display="flex">
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
  });
