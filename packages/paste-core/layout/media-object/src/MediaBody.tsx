import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface MediaBodyProps extends React.HTMLAttributes<any>, Pick<BoxProps, 'as' | 'element'> {
  children: NonNullable<React.ReactNode>;
}

const MediaBody = React.forwardRef<HTMLElement, MediaBodyProps>(
  ({as = 'span', children, element = 'MEDIA_BODY', ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} as={as} element={element} flex={1} minWidth="size0" ref={ref}>
        {children}
      </Box>
    );
  }
);

MediaBody.displayName = 'MediaBody';

MediaBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export {MediaBody};
