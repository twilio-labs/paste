import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, boolean} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Paragraph} from '@twilio-paste/paragraph';
import {Flex, displayOptions, vAlignOptions, hAlignOptions} from '../src';

const flexDisplayOptions = ['flex', 'inline-flex'];
const flexVerticalAlignOptions = ['top', 'center', 'bottom', 'stretch'];
const flexHorizontalAlignOptions = ['left', 'center', 'right', 'around', 'between'];

storiesOf('Utilities|Flex', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const flexDisplayValue = select('display', flexDisplayOptions, 'flex') as displayOptions;
    const flexVerticalAlignValue = select('vAlignContent', flexVerticalAlignOptions, 'top') as vAlignOptions;
    const flexHorizontalAlignValue = select('hAlignContent', flexHorizontalAlignOptions, 'left') as hAlignOptions;
    return (
      <Flex
        display={flexDisplayValue}
        column={boolean('column', false)}
        hAlignContent={flexHorizontalAlignValue}
        vAlignContent={flexVerticalAlignValue}
        wrap={boolean('wrap', false)}
      >
        <Flex grow basis={200}>
          <Paragraph>Flexed left column</Paragraph>
        </Flex>
        <Flex grow>
          <Box>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit.
            </Paragraph>
          </Box>
        </Flex>
      </Flex>
    );
  });
