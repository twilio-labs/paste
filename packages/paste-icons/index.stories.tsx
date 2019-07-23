import * as React from 'react';
import {storiesOf} from '@storybook/react';

import {withKnobs, number, text, boolean} from '@storybook/addon-knobs';
import {IconList} from './__IconList';

storiesOf('Overview|Icons', module)
  .addDecorator(withKnobs)
  .add('List', () => (
    <IconList
      size={number('size', 24)}
      color={text('color', '#000')}
      title={text('title', 'Icon text')}
      decorative={boolean('decorative', true)}
    />
  ));
