import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {compose, space, display, verticalAlign, overflow, typography, system} from 'styled-system';
import {CursorProperty} from 'csstype';
import {
  SpaceProps,
  Display,
  VerticalAlign,
  OverflowProps,
  TypographyProps,
  isFontFamilyTokenProp,
  isFontSizeTokenProp,
  isFontWeightTokenProp,
  isLineHeightTokenProp,
  isSpaceTokenProp,
  isTextColorTokenProp,
  ResponsiveProp,
} from '@twilio-paste/style-props';

export interface TextProps extends React.HTMLAttributes<any>, SpaceProps, OverflowProps, TypographyProps {
  as: keyof JSX.IntrinsicElements;
  display?: Display;
  verticalAlign?: VerticalAlign;
  cursor?: CursorProperty;
}

const extraConfig = system({
  textColor: {
    property: 'color',
    scale: 'textColors',
  },
  cursor: true,
});
const textDecoration = system({textDecoration: true});

const Text = styled.span(
  {
    margin: 0,
    padding: 0,
  },
  compose(
    space,
    display,
    verticalAlign,
    overflow,
    textDecoration,
    typography,
    extraConfig
  )
  // we do this because the default typings of emotion styled
  // means Text gets typed as a span, and can't be extended
  // correctly to utilise the as prop. The new HTML element attributes
  // always clash with the span html attributes. To override this,
  // we retype as a basic functional component which is easy to extend
) as React.FC<TextProps>;
Text.displayName = 'Text';

Text.defaultProps = {
  fontSize: 'fontSize30',
  lineHeight: 'lineHeight30',
  textColor: 'colorText',
};

if (process.env.NODE_ENV === 'development') {
  Text.propTypes = {
    as: PropTypes.string as any,
    display: ResponsiveProp(PropTypes.string),
    cursor: ResponsiveProp(PropTypes.string),
    fontFamily: isFontFamilyTokenProp,
    fontSize: isFontSizeTokenProp,
    fontStyle: ResponsiveProp(PropTypes.string),
    fontWeight: isFontWeightTokenProp,
    lineHeight: isLineHeightTokenProp,
    letterSpacing: ResponsiveProp(PropTypes.string),
    margin: isSpaceTokenProp,
    marginTop: isSpaceTokenProp,
    marginRight: isSpaceTokenProp,
    marginBottom: isSpaceTokenProp,
    marginLeft: isSpaceTokenProp,
    padding: isSpaceTokenProp,
    paddingTop: isSpaceTokenProp,
    paddingRight: isSpaceTokenProp,
    paddingBottom: isSpaceTokenProp,
    paddingLeft: isSpaceTokenProp,
    overflow: ResponsiveProp(PropTypes.string),
    overflowX: ResponsiveProp(PropTypes.string),
    overflowY: ResponsiveProp(PropTypes.string),
    textAlign: ResponsiveProp(PropTypes.string),
    textColor: isTextColorTokenProp,
    textDecoration: ResponsiveProp(PropTypes.string),
    textOverflow: ResponsiveProp(PropTypes.string),
    verticalAlign: ResponsiveProp(PropTypes.string),
    whiteSpace: ResponsiveProp(PropTypes.string),
  };
}

export {Text};
export * from './SafelySpreadProps';
