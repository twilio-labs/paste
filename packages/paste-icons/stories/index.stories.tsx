import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {IconSize, TextColor} from '@twilio-paste/style-props';
import {DefaultTheme} from '@twilio-paste/theme';

import {withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import {IconList} from './__IconList';

const ColorOptions = Object.keys(DefaultTheme.textColors);
const SizeOptions = Object.keys(DefaultTheme.iconSizes);

storiesOf('Overview|Icons', module)
  .addDecorator(withKnobs)
  .add('List', () => {
    const sizeValue = select('size', SizeOptions, 'sizeIcon30') as IconSize;
    const colorValue = select('color', ColorOptions, 'currentColor') as TextColor;

    return (
      <IconList
        size={sizeValue}
        color={colorValue}
        title={text('title', 'Icon text')}
        decorative={boolean('decorative', true)}
      />
    );
  });
