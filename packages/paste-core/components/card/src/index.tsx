import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {PaddingProps} from '@twilio-paste/style-props';
import {isPaddingTokenProp} from '@twilio-paste/style-props';
import type {HTMLPasteProps} from '@twilio-paste/types';

/** element identifier from BoxProps for customization */
export interface CardProps extends HTMLPasteProps<'article'>, PaddingProps, Pick<BoxProps, 'element' | 'variant'> {}

const Card = React.forwardRef<HTMLElement, CardProps>(
  (
    {children, element = 'CARD', padding = 'space100', paddingBottom, paddingLeft, paddingRight, paddingTop, ...props},
    ref
  ) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="article"
        borderWidth="borderWidth10"
        borderColor="colorBorderWeaker"
        borderStyle="solid"
        borderRadius="borderRadius30"
        element={element}
        padding={padding}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        backgroundColor="colorBackgroundBody"
      >
        {children}
      </Box>
    );
  }
);

Card.propTypes = {
  element: PropTypes.string,
  padding: isPaddingTokenProp,
  paddingTop: isPaddingTokenProp,
  paddingRight: isPaddingTokenProp,
  paddingBottom: isPaddingTokenProp,
  paddingLeft: isPaddingTokenProp,
};

Card.displayName = 'Card';

export {Card};
