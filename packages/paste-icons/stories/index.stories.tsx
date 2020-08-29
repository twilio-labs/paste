import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {IconSizeOptions, TextColorOptions} from '@twilio-paste/style-props';
import {DefaultTheme} from '@twilio-paste/theme';
import {Stack} from '@twilio-paste/stack';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import {CopyIcon} from '../src/CopyIcon';

const ColorOptions = Object.keys(DefaultTheme.textColors) as TextColorOptions[];
const SizeOptions = Object.keys(DefaultTheme.iconSizes) as IconSizeOptions[];

storiesOf('Components|Icon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const sizeValue = select('size', SizeOptions, 'sizeIcon30');
    const colorValue = select('color', ColorOptions, 'currentColor');

    return (
      <CopyIcon
        size={sizeValue}
        color={colorValue}
        title={text('title', 'Icon text')}
        decorative={boolean('decorative', true)}
      />
    );
  })
  .add('sizes', () => {
    return (
      <Stack orientation="horizontal" spacing="space40">
        {SizeOptions.map((size: IconSizeOptions) => (
          <CopyIcon size={size} decorative />
        ))}
      </Stack>
    );
  });
