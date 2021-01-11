import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {HelpText} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Help Text',
};

export const Default = (): React.ReactNode => {
  return (
    <>
      <HelpText>Info that helps a user with this field.</HelpText>
      <HelpText variant="error">Info that helps a user with this field.</HelpText>
    </>
  );
};

Default.story = {
  name: 'default',
};

export const Inverse = (): React.ReactNode => {
  return (
    <Box padding="space70" backgroundColor="colorBackgroundBodyInverse">
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      <HelpText variant="error_inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

Inverse.story = {
  name: 'inverse',
};
