import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {InputBox, InputBoxProps} from '../src';

const Insert: React.FC = () => {
  return <Box padding="space20" />;
};

const Input: React.FC = () => {
  return <Box padding="space60" width="100%" />;
};

const CommonStories: React.FC<Omit<InputBoxProps, 'children'>> = ({variant, ...props}) => {
  return (
    <Stack orientation="vertical" spacing="space70">
      <InputBox variant={variant} {...props}>
        <Input />
      </InputBox>
      <InputBox variant={variant} type="hidden" {...props}>
        <Input />
      </InputBox>
      <InputBox variant={variant} insertBefore={<Insert />} {...props}>
        <Input />
      </InputBox>
      <InputBox variant={variant} insertAfter={<Insert />} {...props}>
        <Input />
      </InputBox>
      <InputBox variant={variant} insertAfter={<Insert />} insertBefore={<Insert />} {...props}>
        <Input />
      </InputBox>
    </Stack>
  );
};

storiesOf('Components|Input box', module)
  .add('default', () => {
    return <CommonStories variant="default" />;
  })
  .add('readonly', () => {
    return <CommonStories readOnly variant="default" />;
  })
  .add('disabled', () => {
    return <CommonStories disabled variant="default" />;
  })
  .add('error', () => {
    return <CommonStories hasError variant="default" />;
  })
  .add('inverse', () => {
    return (
      <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
        <CommonStories variant="inverse" />
      </Box>
    );
  })
  .add('inverse readonly', () => {
    return (
      <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
        <CommonStories readOnly variant="inverse" />
      </Box>
    );
  })
  .add('inverse disabled', () => {
    return (
      <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
        <CommonStories disabled variant="inverse" />
      </Box>
    );
  })
  .add('inverse error', () => {
    return (
      <Box padding="space40" backgroundColor="colorBackgroundBodyInverse">
        <CommonStories hasError variant="inverse" />
      </Box>
    );
  });
