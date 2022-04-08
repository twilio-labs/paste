import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {isMarginTokenProp} from '@twilio-paste/style-props';
import type {Space} from '@twilio-paste/style-props';

export interface MediaFigureProps extends React.HTMLAttributes<any>, Pick<BoxProps, 'as' | 'element'> {
  align?: 'start' | 'end';
  children: NonNullable<React.ReactNode>;
  spacing?: Space;
}

const MediaFigure = React.forwardRef<HTMLElement, MediaFigureProps>(
  ({align = 'start', as = 'span', children, element = 'MEDIA_FIGURE', spacing = 'space0', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as={as}
        // eslint-disable-next-line react/jsx-no-literals
        display="flex"
        element={element}
        flexShrink={0}
        marginLeft={align === 'end' ? spacing : undefined}
        marginRight={align === 'start' ? spacing : undefined}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

MediaFigure.displayName = 'MediaFigure';

MediaFigure.propTypes = {
  align: PropTypes.oneOf(['start', 'end']),
  children: PropTypes.node.isRequired,
  spacing: isMarginTokenProp,
};

export {MediaFigure};
