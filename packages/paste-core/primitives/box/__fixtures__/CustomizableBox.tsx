import * as React from 'react';
import {Box} from '../src';
import type {BoxStyleProps} from '../src';

export type CustomizableBoxExampleProps = {variant?: 'primary' | 'secondary'; element: string};
const styles: {[key: string]: BoxStyleProps} = {
  base: {padding: 'space40'},
  _hover: {backgroundColor: 'colorBackgroundError'},
  primary: {backgroundColor: 'colorBackgroundSuccessWeakest'},
  _primaryHover: {fontWeight: 'fontWeightBold'},
  secondary: {backgroundColor: 'colorBackground'},
  _secondaryHover: {fontStyle: 'italic'},
};
export const CustomizableBoxExample: React.FC<React.PropsWithChildren<CustomizableBoxExampleProps>> = ({
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
    <Box
      element={element}
      variant={variant}
      _after={{content: 'attr(data-paste-element)'}}
      {...styles.base}
      _hover={hoverStyles}
      {...variantStyles}
      {...props}
    >
      {children}:
    </Box>
  );
};
