import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface PageHeaderSettingProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'PAGE_HEADER_SETTING'
   * @type {BoxProps['element']}
   * @memberof PageHeaderSettingProps
   */
  element?: BoxProps["element"];
}

const PageHeaderSetting = React.forwardRef<HTMLDivElement, PageHeaderSettingProps>(
  ({ element = "PAGE_HEADER_SETTING", children, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        gridArea="setting"
        marginBottom="space50"
        display="flex"
        flexDirection="column"
        rowGap="space130"
      >
        {children}
      </Box>
    );
  },
);

PageHeaderSetting.displayName = "PageHeaderSetting";

export { PageHeaderSetting };
