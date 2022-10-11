import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {ResponsiveValue} from '@twilio-paste/styling-library';
import type {Space, FlexboxProps, AlignItems, FlexDirection, GapProps} from '@twilio-paste/style-props';
import {isSpaceTokenProp, ResponsiveProp} from '@twilio-paste/style-props';
import type {BoxElementProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

type StackOrientationOptions = 'horizontal' | 'vertical';
export type StackOrientation = NonNullable<ResponsiveValue<StackOrientationOptions>>;
type Spacing = NonNullable<Space>;

export const getDirection = (orientation: StackOrientation): FlexDirection => {
  if (Array.isArray(orientation)) {
    return orientation.map((value) => {
      if (value === 'horizontal') {
        return 'row';
      }

      return 'column';
    });
  }

  if (orientation === 'horizontal') {
    return 'row';
  }

  return 'column';
};

export const getAlignment = (orientation: StackOrientation): AlignItems => {
  if (Array.isArray(orientation)) {
    return orientation.map((value) => {
      if (value === 'horizontal') {
        return 'center';
      }

      return 'stretch';
    });
  }

  if (orientation === 'horizontal') {
    return 'center';
  }

  return 'stretch';
};

interface StackStyles extends FlexboxProps, GapProps {}

export const getStackStyles = (orientation: StackOrientation, spacing: Spacing): StackStyles => {
  return {
    flexDirection: getDirection(orientation),
    alignItems: getAlignment(orientation),
    columnGap: spacing,
    rowGap: spacing,
  };
};

export interface StackProps extends BoxElementProps {
  orientation: StackOrientation;
  spacing: Spacing;
}
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({children, orientation, spacing = 'space0', element = 'STACK', ...props}, ref) => {
    const stackStyles = React.useMemo(() => getStackStyles(orientation, spacing), [orientation, spacing]);

    return (
      <Box element={element} {...safelySpreadBoxProps(props)} ref={ref} display="flex" {...stackStyles}>
        {children}
      </Box>
    );
  }
);

Stack.displayName = 'Stack';

Stack.propTypes = {
  orientation: ResponsiveProp(PropTypes.oneOf(['horizontal', 'vertical'])).isRequired,
  spacing: isSpaceTokenProp,
  element: PropTypes.string,
};
