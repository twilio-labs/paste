import * as React from 'react';

import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import type {Space} from '@twilio-paste/style-props';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface MediaFigureProps extends HTMLPasteProps<'div'>, Pick<BoxProps, 'as' | 'element'> {
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

export {MediaFigure};
