import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {storiesOf} from '@storybook/react';
import {HelpText} from '../src';

storiesOf('Components|Help Text', module)
  .add('default', () => {
    return (
      <>
        <HelpText>Info that helps a user with this field.</HelpText>
        <HelpText variant="error">Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('inverse', () => {
    return (
      <Box padding="space70" backgroundColor="colorBackgroundBodyInverse">
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
        <HelpText variant="error_inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  });
