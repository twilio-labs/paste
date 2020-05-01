import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from 'react-uid';
import {FlexboxProps, LayoutProps, MarginProps, ResponsiveValue} from 'styled-system';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Display, Space, isSpaceTokenProp, ResponsiveProp} from '@twilio-paste/style-props';

export type StackOrientationOptions = 'horizontal' | 'vertical';
export type StackOrientation = ResponsiveValue<StackOrientationOptions>;

export interface StackProps {
  orientation?: StackOrientation;
  spacing?: Space;
}

interface StackStyleProps extends LayoutProps, FlexboxProps {}

const getDisplay = (orientation: StackProps): Display => {
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

const getStackStyles = (orientation: StackProps): StackStyleProps => {
  const styles: StackStyleProps = {
    display: getDisplay(orientation),
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  return styles;
};

const getChildMargins = (orientation: StackOrientation, spacing: Space): MarginProps => {
  const styles: MarginProps = {};

  if (Array.isArray(orientation)) {
    const horizontalMarginArray: Space = [];
    const verticalMarginArray: Space = [];

    orientation.forEach((value, i) => {
      let marginRightValue;
      let marginBottomValue;

      if (value === 'horizontal') {
        marginRightValue = spacing;
        marginBottomValue = 'space0';
      }
      if (value === 'vertical') {
        marginRightValue = 'space0';
        marginBottomValue = spacing;
      }

      // @ts-ignore
      horizontalMarginArray[i] = marginRightValue;
      // @ts-ignore
      verticalMarginArray[i] = marginBottomValue;
    });

    styles.marginRight = horizontalMarginArray;
    styles.marginBottom = verticalMarginArray;
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

  // @ts-ignore
  const StackStyles = React.useMemo(() => getStackStyles(orientation), [orientation]);

  const validChildren = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Box {...StackStyles} {...safelySpreadBoxProps(props)}>
      {validChildren.map((child, index) => {
        return (
          // @ts-ignore
          <Box {...(count !== index + 1 ? {...getChildMargins(orientation, spacing)} : null)} key={useUID()}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
};

Stack.displayName = 'Stack';

Stack.defaultProps = {
  orientation: 'vertical',
};

if (process.env.NODE_ENV === 'development') {
  Stack.propTypes = {
    orientation: ResponsiveProp(PropTypes.oneOf(['horizontal', 'vertical'])),
    spacing: isSpaceTokenProp,
  };
}

export {Stack};
