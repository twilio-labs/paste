import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {ResponsiveValue} from '@twilio-paste/styling-library';
import {
  isSpaceTokenProp,
  ResponsiveProp,
  LayoutProps,
  FlexboxProps,
  MarginProps,
  SpaceOptions,
} from '@twilio-paste/style-props';
import {Box, BoxElementProps, safelySpreadBoxProps} from '@twilio-paste/box';

type StackChildMargins = Pick<MarginProps, 'marginRight' | 'marginBottom'>;
type DisplayOptions = 'block' | 'flex';
type DisplayValue = ResponsiveValue<DisplayOptions>;
type StackOrientationOptions = 'horizontal' | 'vertical';
export type StackOrientation = ResponsiveValue<StackOrientationOptions>;

interface StackStyleProps extends Pick<LayoutProps, 'display'>, Pick<FlexboxProps, 'alignItems' | 'flexWrap'> {}
export interface StackProps extends BoxElementProps {
  orientation: StackOrientation;
  spacing: SpaceOptions;
}

export const getStackDisplay = (orientation: StackOrientation): DisplayValue => {
  if (Array.isArray(orientation)) {
    return orientation.map(value => {
      if (value === 'horizontal') {
        return 'flex';
      }

      return 'block';
    });
  }

  if (orientation === 'horizontal') {
    return 'flex';
  }

  return 'block';
};

export const getStackStyles = (orientation: StackOrientation): StackStyleProps => {
  const styles: StackStyleProps = {
    display: getStackDisplay(orientation),
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  return styles;
};

export const getStackChildMargins = (orientation: StackOrientation, spacing: SpaceOptions): StackChildMargins => {
  let styles = {};

  if (Array.isArray(orientation)) {
    const marginRight: SpaceOptions[] = [];
    const marginBottom: SpaceOptions[] = [];

    orientation.forEach((value, i) => {
      marginRight[i] = value === 'horizontal' ? spacing : 'space0';
      marginBottom[i] = value === 'horizontal' ? 'space0' : spacing;
    });

    styles = {
      marginRight,
      marginBottom,
    };
  }

  if (orientation === 'horizontal') {
    styles = {marginRight: spacing};
  }

  if (orientation === 'vertical') {
    styles = {marginBottom: spacing};
  }

  return styles;
};

const Stack = React.forwardRef<HTMLDivElement, StackProps>(({children, orientation, spacing, ...props}, ref) => {
  const [childrenCount, validChildren] = React.useMemo(
    () => [
      React.Children.count(children),
      React.Children.toArray(children).filter(child => React.isValidElement(child) || typeof child === 'string'),
    ],
    [children]
  );
  const stackStyles = React.useMemo(() => getStackStyles(orientation), [orientation]);
  const childMargins = React.useMemo(() => getStackChildMargins(orientation, spacing), [orientation, spacing]);
  const keySeed = useUIDSeed();

  return (
    <Box {...safelySpreadBoxProps(props)} {...stackStyles} ref={ref}>
      {validChildren.map((child, index) => {
        return (
          <Box {...(childrenCount !== index + 1 ? childMargins : null)} key={keySeed(`stack-${index}`)}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
});

Stack.displayName = 'Stack';

if (process.env.NODE_ENV === 'development') {
  Stack.propTypes = {
    orientation: ResponsiveProp(PropTypes.oneOf(['horizontal', 'vertical'])).isRequired,
    spacing: isSpaceTokenProp,
  };
}

export {Stack};
