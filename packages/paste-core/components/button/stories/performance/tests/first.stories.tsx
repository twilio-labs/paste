import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
import type {ButtonProps, ButtonStates} from '../../../src/types';

import {PrimaryButton} from '../../../src/PrimaryButton';
import {Wrapper} from './partials';

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

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Button-Performance/Tests',
  component: Button,
  decorators: [
    (Story: StoryFn) => {
      return (
        <Wrapper>
          <div>
            <h2>Test 1: Stripped button</h2>
            <p>
              Button stripped down to remove:
              <ul>
                <li>animation</li>
                <li>loading state</li>
                <li>disabled state</li>
                <li>smart sizing</li>
              </ul>
              Other changes include:
              <ul>
                <li>flattened render</li>
                <li>removal of state from component</li>
              </ul>
            </p>
          </div>
          <div>
            <Story />
          </div>
        </Wrapper>
      );
    },
  ],
};

export const First: StoryFn = () => <Button variant="primary">Test</Button>;
First.storyName = 'First test';
