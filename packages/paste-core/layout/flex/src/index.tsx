import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {
  ResponsiveProp,
  isWidthTokenProp,
  isMinWidthTokenProp,
  isMaxWidthTokenProp,
  isHeightTokenProp,
  isMinHeightTokenProp,
  isMaxHeightTokenProp,
  isPaddingTokenProp,
  isMarginTokenProp,
} from '@twilio-paste/style-props';
import type {FlexboxProps} from '@twilio-paste/style-props';
import type {FlexProps} from './types';
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

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      as,
      basis,
      children,
      display,
      element = 'FLEX',
      hAlignContent,
      grow,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      margin,
      marginX,
      marginY,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      padding,
      paddingX,
      paddingY,
      maxWidth,
      minWidth = 'size0',
      width,
      height,
      minHeight,
      maxHeight,
      size,
      shrink,
      vertical,
      vAlignContent,
      wrap,
      ...props
    },
    ref
  ) => {
    const FlexStyles = React.useMemo(
      () => getFlexStyles({basis, hAlignContent, grow, shrink, vertical, vAlignContent, wrap}),
      [basis, hAlignContent, grow, shrink, vertical, vAlignContent, wrap]
    );

    if (size && (width || height)) {
      console.error('[Paste Flex]: you cannot set a height or width when using the size attribute');
    }
    if (
      (marginX && (margin || marginBottom || marginLeft || marginRight || marginTop)) ||
      (marginY && (margin || marginBottom || marginLeft || marginRight || marginTop))
    ) {
      console.error(
        '[Paste Flex]: you cannot set a top, right, bottom or left margin when using the marginX or marginY attributes.'
      );
    }
    if (
      (paddingX && (padding || paddingBottom || paddingLeft || paddingRight || paddingTop)) ||
      (paddingY && (padding || paddingBottom || paddingLeft || paddingRight || paddingTop))
    ) {
      console.error(
        '[Paste Flex]: you cannot set a top, right, bottom or left padding when using the paddingX or paddingY attributes.'
      );
    }

    const margins =
      marginX || marginY ? {marginX, marginY} : {margin, marginBottom, marginLeft, marginRight, marginTop};
    const paddings =
      paddingX || paddingY ? {paddingX, paddingY} : {padding, paddingBottom, paddingLeft, paddingRight, paddingTop};
    const widths = size ? {size} : {height, width};

    return (
      <Box
        {...FlexStyles}
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as={as}
        display={display}
        element={element}
        {...margins}
        {...paddings}
        minHeight={minHeight}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        minWidth={minWidth}
        {...widths}
      >
        {children}
      </Box>
    );
  }
);

Flex.displayName = 'Flex';
Flex.defaultProps = {
  display: 'flex',
};

Flex.propTypes = {
  as: PropTypes.string as any,
  display: ResponsiveProp(PropTypes.oneOf(['flex', 'inline-flex'])),
  element: PropTypes.string,
  vertical: ResponsiveProp(PropTypes.bool),
  vAlignContent: ResponsiveProp(PropTypes.oneOf(['top', 'center', 'bottom', 'stretch'])),
  hAlignContent: ResponsiveProp(PropTypes.oneOf(['left', 'center', 'right', 'around', 'between'])),
  grow: ResponsiveProp(PropTypes.oneOfType([PropTypes.bool, PropTypes.number])),
  shrink: ResponsiveProp(PropTypes.oneOfType([PropTypes.bool, PropTypes.number])),
  basis: ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  wrap: ResponsiveProp(PropTypes.bool),
  width: isWidthTokenProp,
  minWidth: isMinWidthTokenProp,
  maxWidth: isMaxWidthTokenProp,
  height: isHeightTokenProp,
  minHeight: isMinHeightTokenProp,
  maxHeight: isMaxHeightTokenProp,
  size: isWidthTokenProp,
  margin: isMarginTokenProp,
  marginTop: isMarginTokenProp,
  marginRight: isMarginTokenProp,
  marginBottom: isMarginTokenProp,
  marginLeft: isMarginTokenProp,
  marginX: isMarginTokenProp,
  marginY: isMarginTokenProp,
  padding: isPaddingTokenProp,
  paddingTop: isPaddingTokenProp,
  paddingRight: isPaddingTokenProp,
  paddingBottom: isPaddingTokenProp,
  paddingLeft: isPaddingTokenProp,
  paddingX: isPaddingTokenProp,
  paddingY: isPaddingTokenProp,
};

export {Flex};

export * from './types';
