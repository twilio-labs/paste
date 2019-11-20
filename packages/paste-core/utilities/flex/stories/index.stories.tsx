import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Flex} from '../src';

storiesOf('Utilities|Flex', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <Flex alignContent="center" justifyContent="center" justifySelf="" order={1} flexBasis="" alignSelf>
        blah
      </Flex>
    );
  });
