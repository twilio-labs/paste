import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from 'react-uid';
import {ResponsiveValue} from 'styled-system';
import {
  isSpaceTokenProp,
  ResponsiveProp,
  LayoutProps,
  FlexboxProps,
  MarginProps,
  SpaceOptions,
} from '@twilio-paste/style-props';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';

type StackChildMargins = Pick<MarginProps, 'marginRight' | 'marginBottom'>;
type DisplayOptions = 'block' | 'flex';
type DisplayValue = ResponsiveValue<DisplayOptions>;
type StackOrientationOptions = 'horizontal' | 'vertical';
export type StackOrientation = ResponsiveValue<StackOrientationOptions>;

interface StackStyleProps extends Pick<LayoutProps, 'display'>, Pick<FlexboxProps, 'alignItems' | 'flexWrap'> {}
export interface StackProps extends BoxProps {
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

const Stack: React.FC<StackProps> = ({children, orientation, spacing, ...props}) => {
  const count = React.useMemo(() => React.Children.count(children), [children]);
  const StackStyles = React.useMemo(() => getStackStyles(orientation), [orientation]);
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Box {...safelySpreadBoxProps(props)} {...StackStyles}>
      {validChildren.map((child, index) => {
        return (
          <Box {...(count !== index + 1 ? {...getStackChildMargins(orientation, spacing)} : null)} key={useUID()}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};

Stack.displayName = 'Stack';

if (process.env.NODE_ENV === 'development') {
  Stack.propTypes = {
    orientation: ResponsiveProp(PropTypes.oneOf(['horizontal', 'vertical'])).isRequired,
    spacing: isSpaceTokenProp,
  };
}

export {Stack};
