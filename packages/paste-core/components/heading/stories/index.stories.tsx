import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {Heading, HeadingStyle, asTags} from '../src';

const headingStyleOptions = [
  'headingStyle10',
  'headingStyle20',
  'headingStyle30',
  'headingStyle40',
  'headingStyle50',
  'headingStyle60',
];

storiesOf('Components|Heading', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const asOptions = text('as', 'h2') as asTags;
    const headingStyleValue = select('headingStyle', headingStyleOptions, 'headingStyle60') as HeadingStyle;
    return (
      <Heading as={asOptions} headingStyle={headingStyleValue}>
        I am a Very Large Heading
      </Heading>
    );
  });
