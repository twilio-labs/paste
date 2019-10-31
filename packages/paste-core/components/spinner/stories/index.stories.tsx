import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme-tokens';
import {Spinner} from '../src';

const IconColorOptions = Object.keys(DefaultTheme.textColors);
const SizeOptions = Object.keys(DefaultTheme.iconSizes);

storiesOf('Components|Spinner', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const iconColorValue = select('iconColor', IconColorOptions, 'currentColor') as keyof ThemeShape['textColors'];
    const sizeValue = select('size', SizeOptions, 'sizeIcon20') as keyof ThemeShape['iconSizes'];

    return <Spinner iconColor={iconColorValue} size={sizeValue} title={text('title', 'Now loading')} />;
  })
  .add('Responsive', () => {
    return (
      <Spinner
        iconColor={['colorText', 'colorTextError']}
        size={['sizeIcon10', 'sizeIcon20', 'sizeIcon30']}
        title={text('title', 'Now loading')}
      />
    );
  });
