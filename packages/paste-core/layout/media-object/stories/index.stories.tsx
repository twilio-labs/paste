import * as React from 'react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Truncate} from '@twilio-paste/truncate';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme';
import {MediaObject, MediaFigure, MediaBody} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Layout/Media Object',
  decorators: [withKnobs],
  component: MediaObject,
  subcomponents: {MediaFigure, MediaBody},
  argTypes: {verticalAlign: {defaultValue: 'top'}},
};

export const Default = (): React.ReactNode => {
  const spaceValue = select('spacing', Object.keys(DefaultTheme.space), 'space20') as keyof ThemeShape['space'];
  const marginBottomValue = select(
    'marginBottom',
    Object.keys(DefaultTheme.space),
    'space0'
  ) as keyof ThemeShape['space'];
  const marginTopValue = select('marginTop', Object.keys(DefaultTheme.space), 'space0') as keyof ThemeShape['space'];
  const verticalAlignValue = select('verticalAlign', ['center', 'top'], 'top');
  const asValue = text('as', 'span') as keyof JSX.IntrinsicElements;
  return (
    <MediaObject
      as={asValue}
      verticalAlign={verticalAlignValue}
      marginBottom={marginBottomValue}
      marginTop={marginTopValue}
    >
      <MediaFigure as={asValue} spacing={spaceValue}>
        <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
      </MediaFigure>
      <MediaBody as={asValue}>
        <Text as="p">Some media Object body text</Text>
      </MediaBody>
    </MediaObject>
  );
};

export const DoubleFigure = (): React.ReactNode => {
  const spaceValue = select('spacing', Object.keys(DefaultTheme.space), 'space20') as keyof ThemeShape['space'];
  const marginBottomValue = select(
    'marginBottom',
    Object.keys(DefaultTheme.space),
    'space0'
  ) as keyof ThemeShape['space'];
  const marginTopValue = select('marginTop', Object.keys(DefaultTheme.space), 'space0') as keyof ThemeShape['space'];
  const verticalAlignValue = select('verticalAlign', ['center', 'top'], 'top');
  const asValue = text('as', 'span') as keyof JSX.IntrinsicElements;
  return (
    <MediaObject
      as={asValue}
      verticalAlign={verticalAlignValue}
      marginBottom={marginBottomValue}
      marginTop={marginTopValue}
    >
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
};

export const ConstrainedWidth = (): React.ReactNode => {
  return (
    <Box width="size60">
      <MediaObject as="div" verticalAlign="center">
        <MediaFigure as="div" spacing="space100">
          <Box backgroundColor="colorBackgroundSuccess" size="size20" />
        </MediaFigure>
        <MediaBody as="div">
          <Text as="p">Some media Object body text</Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </MediaBody>
        <MediaFigure as="div" align="end" spacing="space70">
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </MediaFigure>
      </MediaObject>
    </Box>
  );
};

ConstrainedWidth.story = {
  name: 'Constrained width',
};
