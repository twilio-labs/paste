import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme-tokens';
import {MediaObject, MediaFigure, MediaBody} from '../src';

storiesOf('Utilities|Media Object', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const spaceValue = select('spacing', Object.keys(DefaultTheme.space), 'space20') as keyof ThemeShape['space'];
    const verticalAlignValue = select('verticalAlign', ['center', 'top'], 'top');
    const asValue = text('as', 'span') as keyof JSX.IntrinsicElements;
    return (
      <MediaObject as={asValue} verticalAlign={verticalAlignValue}>
        <MediaFigure as={asValue} spacing={spaceValue}>
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </MediaFigure>
        <MediaBody as={asValue}>
          <Text as="p">Some media Object body text</Text>
        </MediaBody>
      </MediaObject>
    );
  })
  .add('Double Figure', () => {
    const spaceValue = select('spacing', Object.keys(DefaultTheme.space), 'space20') as keyof ThemeShape['space'];
    const verticalAlignValue = select('verticalAlign', ['center', 'top'], 'top');
    const asValue = text('as', 'span') as keyof JSX.IntrinsicElements;
    return (
      <MediaObject as={asValue} verticalAlign={verticalAlignValue}>
        <MediaFigure as={asValue} spacing={spaceValue}>
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </MediaFigure>
        <MediaBody as={asValue}>
          <Text as="p">Some media Object body text</Text>
        </MediaBody>
        <MediaFigure as={asValue} align="end" spacing={spaceValue}>
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </MediaFigure>
      </MediaObject>
    );
  });
