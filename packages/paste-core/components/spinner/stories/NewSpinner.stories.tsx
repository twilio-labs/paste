import * as React from 'react';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs';
import {IconSize, TextColor} from '@twilio-paste/style-props';
import {DefaultTheme} from '@twilio-paste/theme';
import {Spinner} from '../src/v2';

const ColorOptions = Object.keys(DefaultTheme.textColors);
const SizeOptions = Object.keys(DefaultTheme.iconSizes);

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/New Spinner',
  decorators: [withKnobs],
  component: Spinner,
};

export const Default = (): React.ReactNode => {
  const colorValue = select('color', ColorOptions, 'currentColor') as TextColor;
  const sizeValue = select('size', SizeOptions, 'sizeIcon20') as IconSize;
  const decorativeValue = boolean('decorative', false);

  return (
    <Spinner
      color={colorValue as string}
      size={sizeValue as string}
      title={text('title', 'Now loading')}
      decorative={decorativeValue}
    />
  );
};

export const Responsive = (): React.ReactNode => {
  return <Spinner color="colorTextIcon" title={text('title', 'Now loading')} decorative={false} />;
};
