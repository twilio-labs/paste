import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean, select} from '@storybook/addon-knobs';
import {Text} from '@paste/text';
import {Box} from '@paste/box';
import {Media} from '../src';

storiesOf('Utilities|Media Object', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const spaceValue = select('spacing', ['space20', 'space30'], 'space20');
    return (
      <Media.Object isCentered={boolean('isCentered', false)}>
        <Media.Figure spacing={spaceValue}>
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </Media.Figure>
        <Media.Body>
          <Text>Some media Object body text</Text>
        </Media.Body>
      </Media.Object>
    );
  })
  .add('Double Figure', () => {
    const spaceValue = select('spacing', ['space20', 'space30'], 'space20');
    return (
      <Media.Object isCentered={boolean('isCentered', false)}>
        <Media.Figure spacing={spaceValue}>
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </Media.Figure>
        <Media.Body>
          <Text>Some media Object body text</Text>
        </Media.Body>
        <Media.Figure align="end" spacing={spaceValue}>
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </Media.Figure>
      </Media.Object>
    );
  });
