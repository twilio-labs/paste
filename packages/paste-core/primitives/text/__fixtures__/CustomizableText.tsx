import * as React from 'react';
import {Text} from '../src';
import type {TextStyleProps} from '../src';

export type CustomizableTextExampleProps = {variant?: 'primary' | 'secondary'; element: string};
const styles: {[key: string]: TextStyleProps} = {
  base: {cursor: 'pointer', padding: 'space40'},
  _hover: {textDecoration: 'underline'},
  primary: {color: 'colorTextLink'},
  _primaryHover: {fontWeight: 'fontWeightBold'},
  secondary: {color: 'colorTextErrorStrong'},
  _secondaryHover: {fontStyle: 'italic'},
};
export const CustomizableTextExample: React.FC<React.PropsWithChildren<CustomizableTextExampleProps>> = ({
  children,
  variant,
  element,
  ...props
}) => {
  let variantStyles;
  if (variant != null) {
    variantStyles = styles[variant];
  }
  // eslint-disable-next-line no-underscore-dangle
  let hoverStyles = {...styles._hover};
  if (variant === 'primary') {
    // eslint-disable-next-line no-underscore-dangle
    hoverStyles = {...hoverStyles, ...styles._primaryHover};
  }
  if (variant === 'secondary') {
    // eslint-disable-next-line no-underscore-dangle
    hoverStyles = {...hoverStyles, ...styles._secondaryHover};
  }
  return (
    <Text
      as="p"
      element={element}
      variant={variant}
      _after={{content: 'attr(data-paste-element)'}}
      {...styles.base}
      _hover={hoverStyles}
      {...variantStyles}
      {...props}
    >
      {children}:
    </Text>
  );
};
