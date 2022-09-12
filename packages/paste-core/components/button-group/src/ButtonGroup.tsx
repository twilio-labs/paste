import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {styled, css} from '@twilio-paste/styling-library';

const AttachedStyled = styled.div(
  css({
    '& > button:focus': {
      // NOTE: allow focus indication to remain visible on all sides of a button despite
      // sibling elements being rendered immediately adjacent under the attached styles
      zIndex: 'zIndex10',
    },
    '& > button:not(:first-of-type):not(:last-of-type)': {
      borderRadius: 0,
    },
    '& > button:first-of-type': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '& > button:last-of-type': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  })
);

const UnattachedStyled = styled.div(
  css({
    '& > button:not(:first-of-type)': {
      marginLeft: 'space30',
    },
    '& > button:first-of-type': {
      marginLeft: 'space0',
    },
  })
);

export interface ButtonGroupProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  element?: string;
  attached?: boolean;
  children: React.ReactElement[];
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({element = 'BUTTON_GROUP', children, attached = false, ref, ...rest}) => {
    return (
      <Box
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        as={attached ? AttachedStyled : UnattachedStyled}
        ref={ref}
        element={element}
        display="flex"
        role="group"
        {...safelySpreadBoxProps(rest)}
      >
        {children}
      </Box>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  attached: PropTypes.bool,
  element: PropTypes.string,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  children: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};
