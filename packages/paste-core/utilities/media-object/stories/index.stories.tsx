import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme-tokens';
import {MediaObject, MediaFigure, MediaBody} from '../src';

storiesOf('Utilities|Media Object', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const spaceValue = select('spacing', Object.keys(DefaultTheme.space), 'space20') as keyof ThemeShape['space'];
    const verticalAlignValue = select('verticalAlign', ['center', 'top'], 'top');
    return (
      <MediaObject verticalAlign={verticalAlignValue}>
        <MediaFigure spacing={spaceValue}>
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </MediaFigure>
        <MediaBody>
          <Text as="p">Some media Object body text</Text>
        </MediaBody>
      </MediaObject>
    );
  })
  .add('Double Figure', () => {
    const spaceValue = select('spacing', Object.keys(DefaultTheme.space), 'space20') as keyof ThemeShape['space'];
    const verticalAlignValue = select('verticalAlign', ['center', 'top'], 'top');
    return (
      <MediaObject verticalAlign={verticalAlignValue}>
        <MediaFigure spacing={spaceValue}>
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </MediaFigure>
        <MediaBody>
          <Text as="p">Some media Object body text</Text>
        </MediaBody>
        <MediaFigure align="end" spacing={spaceValue}>
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </MediaFigure>
      </MediaObject>
    );
  });
