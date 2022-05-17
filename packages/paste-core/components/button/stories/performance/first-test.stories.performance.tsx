import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {Title, Description, Primary} from '@storybook/addon-docs';
import type {ButtonProps, ButtonStates} from '../../src/types';

import {PrimaryButton} from '../../src/PrimaryButton';

const getButtonState = (disabled?: boolean, loading?: boolean): ButtonStates => {
  if (disabled) {
    return 'disabled';
  }
  if (loading) {
    return 'loading';
  }
  return 'default';
};

const variantsWithoutBoundingBox = new Set(['link', 'destructive_link', 'inverse_link', 'reset']);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({element = 'BUTTON', size, variant, children, disabled, loading, ...props}, ref) => {
    const buttonState = getButtonState(disabled, loading);

    return (
      <PrimaryButton
        {...props}
        buttonState={buttonState}
        disabled={buttonState !== 'default'}
        element={element}
        variant={variant}
        size="default"
        aria-busy={buttonState === 'loading' ? 'true' : 'false'}
        className={undefined}
        style={undefined}
        ref={ref}
      >
        <Box
          as="span"
          display="flex"
          textDecoration="inherit"
          opacity={buttonState === 'loading' ? '0' : '1'}
          justifyContent={variant && variantsWithoutBoundingBox.has(variant) ? null : 'center'}
          columnGap="space20"
          alignItems="center"
        >
          {children}
        </Box>
      </PrimaryButton>
    );
  }
);

Button.displayName = 'Button';

// ========================== Stories ============================

const CODE = `const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({element = 'BUTTON', size, variant, children, disabled, loading, ...props}, ref) => {
    const buttonState = getButtonState(disabled, loading);

    return (
      <PrimaryButton
        {...props}
        buttonState={buttonState}
        disabled={buttonState !== 'default'}
        element={element}
        variant={variant}
        size="default"
        aria-busy={buttonState === 'loading' ? 'true' : 'false'}
        className={undefined}
        style={undefined}
        ref={ref}
      >
        <Box
          as="span"
          display="flex"
          textDecoration="inherit"
          opacity={buttonState === 'loading' ? '0' : '1'}
          justifyContent={variant && variantsWithoutBoundingBox.has(variant) ? null : 'center'}
          columnGap="space20"
          alignItems="center"
        >
          {children}
        </Box>
      </PrimaryButton>
    );
  }
);
`;

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Button-Performance/Tests',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Simplified Button component that removes all conditional renders and effects (e.g. without animation, state management, flattened render)',
      },
      source: {
        state: 'open',
        code: CODE,
        language: 'jsx',
      },
      page: () => (
        <>
          <Title>Test 1: Simplified Button component</Title>
          <Description />
          <Primary />
        </>
      ),
    },
  },
};

export const First: StoryFn = () => <Button variant="primary">Test</Button>;
First.storyName = 'First test';
(First as React.FC).displayName = 'TESTING AGINA';
