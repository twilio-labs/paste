import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface PageHeaderProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Size of the Page Header
   * @default 'default'
   * @type {'default' | 'compact''}
   * @memberof PageHeaderProps
   */
  size?: "default" | "compact";
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER'
   * @type {BoxProps['element']}
   * @memberof PageHeaderProps
   */
  element?: BoxProps["element"];
}

export const PageHeaderContext = React.createContext<Pick<PageHeaderProps, "size">>({} as PageHeaderProps);

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ element = "PAGE_HEADER", size, children, ...props }, ref) => {
    return (
      <PageHeaderContext.Provider value={{ size }}>
        <Box
          {...safelySpreadBoxProps(props)}
          ref={ref}
          element={element}
          display="grid"
          gridTemplateRows="auto auto auto"
          gridTemplateAreas='"setting" "details" "content_barrier"'
        >
          {children}
        </Box>
      </PageHeaderContext.Provider>
    );
  },
);

PageHeader.displayName = "PageHeader";

export { PageHeader };
