import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs';
import {IconSize, TextColor} from '@twilio-paste/style-props';
import {DefaultTheme} from '@twilio-paste/theme-tokens';
import {Spinner} from '../src';

const IconColorOptions = Object.keys(DefaultTheme.textColors);
const SizeOptions = Object.keys(DefaultTheme.iconSizes);

storiesOf('Components|Spinner', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const iconColorValue = select('iconColor', IconColorOptions, 'currentColor') as TextColor;
    const sizeValue = select('size', SizeOptions, 'sizeIcon20') as IconSize;
    const decorativeValue = boolean('decorative', false);

    return (
      <Spinner
        iconColor={iconColorValue}
        size={sizeValue}
        title={text('title', 'Now loading')}
        decorative={decorativeValue}
      />
    );
  })
  .add('Responsive', () => {
    return (
      <Spinner
        iconColor={['colorText', 'colorTextError']}
        size={['sizeIcon10', 'sizeIcon20', 'sizeIcon30', 'sizeIcon40']}
        title={text('title', 'Now loading')}
        decorative={false}
      />
    );
  });
