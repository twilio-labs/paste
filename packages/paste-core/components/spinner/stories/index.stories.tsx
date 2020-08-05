import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs';
import {IconSize, TextColor} from '@twilio-paste/style-props';
import {DefaultTheme} from '@twilio-paste/theme';
import {Spinner} from '../src';

const ColorOptions = Object.keys(DefaultTheme.textColors);
const SizeOptions = Object.keys(DefaultTheme.iconSizes);

storiesOf('Components|Spinner', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const colorValue = select('color', ColorOptions, 'currentColor') as TextColor;
    const sizeValue = select('size', SizeOptions, 'sizeIcon20') as IconSize;
    const decorativeValue = boolean('decorative', false);

    return (
      <Spinner color={colorValue} size={sizeValue} title={text('title', 'Now loading')} decorative={decorativeValue} />
    );
  })
  .add('Responsive', () => {
    return (
      <Spinner
        color={['colorText', 'colorTextError']}
        size={['sizeIcon10', 'sizeIcon20', 'sizeIcon30', 'sizeIcon40']}
        title={text('title', 'Now loading')}
        decorative={false}
      />
    );
  });
