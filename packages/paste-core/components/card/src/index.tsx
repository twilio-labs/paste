import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {PaddingProps} from '@twilio-paste/style-props';
import {isPaddingTokenProp} from '@twilio-paste/style-props';

export interface CardProps extends React.HTMLAttributes<HTMLElement>, PaddingProps, Pick<BoxProps, 'element'> {}

const Card = React.forwardRef<HTMLElement, CardProps>(
  (
    {children, element = 'CARD', padding = 'space60', paddingBottom, paddingLeft, paddingRight, paddingTop, ...props},
    ref
  ) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="article"
        borderWidth="borderWidth20"
        borderColor="colorBorderWeaker"
        borderStyle="solid"
        borderRadius="borderRadius20"
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
  /** element identifier for customization */
  element: PropTypes.string,
  padding: isPaddingTokenProp,
  paddingTop: isPaddingTokenProp,
  paddingRight: isPaddingTokenProp,
  paddingBottom: isPaddingTokenProp,
  paddingLeft: isPaddingTokenProp,
};

Card.displayName = 'Card';

export {Card};
