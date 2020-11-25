import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {FlexboxProps, ResponsiveProp} from '@twilio-paste/style-props';
import {FlexProps} from './types';
import {getGrow, getShrink, getBasis, getVertical, getWrap, hAlignToProps, vAlignToProps} from './helpers';

const getFlexStyles = (props: FlexProps): FlexboxProps => {
  const styles: FlexboxProps = {
    justifyContent: props.vertical ? vAlignToProps(props) : hAlignToProps(props),
    alignItems: props.vertical ? hAlignToProps(props) : vAlignToProps(props),
  };

  if (props.grow || props.shrink || props.basis) {
    styles.flexGrow = getGrow(props);
    styles.flexShrink = getShrink(props);
    styles.flexBasis = getBasis(props);
  }

  if (props.vertical) {
    styles.flexDirection = getVertical(props);
  }

  if (props.wrap) {
    styles.flexWrap = getWrap(props);
  }

  return styles;
};

const Flex: React.FC<FlexProps> = ({
  as,
  basis,
  children,
  display,
  hAlignContent,
  grow,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  maxWidth,
  minWidth = 'size0',
  shrink,
  vertical,
  vAlignContent,
  width,
  wrap,
  ...props
}) => {
  const FlexStyles = React.useMemo(
    () => getFlexStyles({basis, hAlignContent, grow, shrink, vertical, vAlignContent, wrap}),
    [basis, hAlignContent, grow, shrink, vertical, vAlignContent, wrap]
  );
  return (
    <Box
      {...FlexStyles}
      {...safelySpreadBoxProps(props)}
      as={as}
      display={display}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      maxWidth={maxWidth}
      minWidth={minWidth}
      width={width}
    >
      {children}
    </Box>
  );
};

Flex.displayName = 'Flex';
Flex.defaultProps = {
  display: 'flex',
};

if (process.env.NODE_ENV === 'development') {
  Flex.propTypes = {
    as: PropTypes.string as any,
    display: ResponsiveProp(PropTypes.oneOf(['flex', 'inline-flex'])),
    vertical: ResponsiveProp(PropTypes.bool),
    vAlignContent: ResponsiveProp(PropTypes.oneOf(['top', 'center', 'bottom', 'stretch'])),
    hAlignContent: ResponsiveProp(PropTypes.oneOf(['left', 'center', 'right', 'around', 'between'])),
    grow: ResponsiveProp(PropTypes.oneOfType([PropTypes.bool, PropTypes.number])),
    shrink: ResponsiveProp(PropTypes.oneOfType([PropTypes.bool, PropTypes.number])),
    basis: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    wrap: ResponsiveProp(PropTypes.bool),
  };
}

export {Flex};

export * from './types';
