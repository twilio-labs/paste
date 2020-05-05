import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from 'react-uid';
import {FlexboxProps, LayoutProps, MarginProps, ResponsiveValue} from 'styled-system';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Display, isSpaceTokenProp, ResponsiveProp, Space} from '@twilio-paste/style-props';

export type StackOrientationOptions = 'horizontal' | 'vertical';
export type StackOrientation = ResponsiveValue<StackOrientationOptions>;

export interface StackProps {
  orientation: StackOrientation;
  spacing: Space;
}

interface StackStyleProps extends LayoutProps, FlexboxProps {}

const getDisplay = (orientation: StackOrientation): Display => {
  if (Array.isArray(orientation)) {
    return (orientation as StackOrientationOptions[]).map((value: StackOrientationOptions) => {
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

const getStackStyles = (orientation: StackOrientation): StackStyleProps => {
  const styles: StackStyleProps = {
    display: getDisplay(orientation),
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  return styles;
};

const getChildMargins = (orientation: StackOrientation, spacing: Space): MarginProps => {
  let styles: MarginProps = {};

  if (Array.isArray(orientation)) {
    const marginRight = [] as any;
    const marginBottom = [] as any;

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
    styles.marginRight = spacing;
  }

  if (orientation === 'vertical') {
    styles.marginBottom = spacing;
  }

  return styles;
};

const Stack: React.FC<StackProps> = ({children, orientation, spacing, ...props}) => {
  const count = React.useMemo(() => React.Children.count(children), [children]);

  const StackStyles = React.useMemo(() => getStackStyles(orientation), [orientation]);

  const validChildren = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Box {...StackStyles} {...safelySpreadBoxProps(props)}>
      {validChildren.map((child, index) => {
        return (
          <Box {...(count !== index + 1 ? {...getChildMargins(orientation, spacing)} : null)} key={useUID()}>
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
