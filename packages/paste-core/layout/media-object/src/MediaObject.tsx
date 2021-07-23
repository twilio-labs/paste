import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface MediaObjectProps
  extends React.HTMLAttributes<any>,
    Pick<BoxProps, 'as' | 'element' | 'marginTop' | 'marginBottom'> {
  children: NonNullable<React.ReactNode>;
  verticalAlign?: 'center' | 'top';
}

const MediaObject = React.forwardRef<HTMLElement, MediaObjectProps>(
  (
    {as = 'span', children, element = 'MEDIA_OBJECT', marginBottom, marginTop, verticalAlign = 'top', ...props},
    ref
  ) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        alignItems={verticalAlign === 'top' ? 'flex-start' : 'center'}
        as={as}
        display="flex"
        element={element}
        marginBottom={marginBottom}
        marginTop={marginTop}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

MediaObject.displayName = 'MediaObject';

MediaObject.propTypes = {
  children: PropTypes.node.isRequired,
  verticalAlign: PropTypes.oneOf(['center', 'top']),
};

export {MediaObject};
