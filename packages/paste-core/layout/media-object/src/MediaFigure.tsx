import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import type { Space } from '@twilio-paste/style-props';
import type { HTMLPasteProps } from '@twilio-paste/types';
import * as React from 'react';

export interface MediaFigureProps extends HTMLPasteProps<'div'>, Pick<BoxProps, 'as'> {
  align?: 'start' | 'end';
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'MEDIA_FIGURE'
   * @type {BoxProps['element']}
   * @memberof MediaFigureProps
   */
  element?: BoxProps['element'];
  children: NonNullable<React.ReactNode>;
  /**
   * Space between the figure and body
   *
   * @type {Space}
   * @memberof MediaFigureProps
   */
  spacing?: Space;
}

const MediaFigure = React.forwardRef<HTMLElement, MediaFigureProps>(
  ({ align = 'start', as = 'span', children, element = 'MEDIA_FIGURE', spacing = 'space0', ...props }, ref) => {
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
  },
);

MediaFigure.displayName = 'MediaFigure';

export { MediaFigure };
