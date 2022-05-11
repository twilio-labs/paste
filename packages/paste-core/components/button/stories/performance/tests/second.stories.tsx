import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {useSpring, animated} from '@twilio-paste/animation-library';
import {ArrowForwardIcon} from '@twilio-paste/icons/esm/ArrowForwardIcon';
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
const AnimatedBox = animated(Box);

const variantsWithoutBoundingBox = new Set(['link', 'destructive_link', 'inverse_link', 'reset']);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({element = 'BUTTON', size, variant, children, disabled, loading, onMouseEnter, onMouseLeave, ...props}, ref) => {
    const buttonState = getButtonState(disabled, loading);
    const [hovered, setHovered] = React.useState(false);
    const arrowIconStyles = useSpring({
      translateX: hovered ? '4px' : '0px',
      config: {
        mass: 0.1,
        tension: 275,
        friction: 16,
      },
    });

    return (
      <PrimaryButton
        {...props}
        onMouseEnter={(event) => {
          if (typeof onMouseEnter === 'function') {
            onMouseEnter(event);
          }
          setHovered(true);
        }}
        onMouseLeave={(event) => {
          if (typeof onMouseLeave === 'function') {
            onMouseLeave(event);
          }
          setHovered(false);
        }}
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
          justifyContent={variant && variantsWithoutBoundingBox.has(variant) ? null : 'center'}
          columnGap="space20"
          alignItems="center"
        >
          {children}
          <AnimatedBox style={arrowIconStyles}>
            <ArrowForwardIcon decorative />
          </AnimatedBox>
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
            <h2>Test 2: Btn with animation added back</h2>
            <p>
              Button stripped down to remove:
              <ul>
                <li>loading state</li>
                <li>disabled state</li>
                <li>smart sizing</li>
              </ul>
              Other changes include:
              <ul>
                <li>flattened render</li>
                <li>removal of state from component</li>
                <li>animation added back</li>
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

export const Second: StoryFn = () => <Button variant="primary">Test</Button>;
Second.storyName = 'Second test';
