import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {IconSize, TextColor} from '@twilio-paste/style-props';
import {DefaultTheme} from '@twilio-paste/theme-tokens';

import {withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import {IconList} from './__IconList';

const IconColorOptions = Object.keys(DefaultTheme.textColors);
const SizeOptions = Object.keys(DefaultTheme.iconSizes);

storiesOf('Overview|Icons', module)
  .addDecorator(withKnobs)
  .add('List', () => {
    const sizeValue = select('size', SizeOptions, 'sizeIcon20') as IconSize;
    const iconColorValue = select('iconColor', IconColorOptions, 'currentColor') as TextColor;

    return (
      <IconList
        size={sizeValue}
        iconColor={iconColorValue}
        title={text('title', 'Icon text')}
        decorative={boolean('decorative', true)}
      />
    );
  });
