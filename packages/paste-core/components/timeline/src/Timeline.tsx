import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from 'react';

export interface TimelineProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default '{constantCase component-name}'
   * @type {BoxProps['element']}
   * @memberof TimelineProps
   */
  element?: BoxProps['element'];
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(({element = "TIMELINE", ...props}, ref) => {
  return (
    <Box ref={ref}>
      {props.children}
    </Box>
  );
});

Timeline.displayName = 'Timeline';

export {Timeline};
