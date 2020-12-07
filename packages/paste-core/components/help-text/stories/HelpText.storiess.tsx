import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {HelpText, HelpTextVariants} from '../src';

/* eslint-disable-next-line import/no-default-export */
export default {
  title: 'Components/HelpText',
  component: HelpText,
};

const Template: React.FC<{variant: HelpTextVariants}> = ({variant}) => (
  <Box padding="space70" backgroundColor={variant && variant.includes('inverse') ? 'colorBackgroundBodyInverse' : null}>
    <HelpText variant={variant}>Info that helps a user with this field.</HelpText>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  variant: null,
};
export const Error = Template.bind({});
Error.args = {
  variant: 'error',
};
export const Inverse = Template.bind({});
Inverse.args = {
  variant: 'inverse',
};
export const ErrorInverse = Template.bind({});
ErrorInverse.args = {
  variant: 'error_inverse',
};
