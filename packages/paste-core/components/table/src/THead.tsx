import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import * as React from "react";

import type { THeadProps } from "./types";

const getStickyStyles = ({ stickyHeader }: { stickyHeader: THeadProps["stickyHeader"] }): Partial<BoxProps> => {
  if (!stickyHeader) return {};

  return {
    position: "sticky",
    zIndex: "zIndex10",
  };
};

const StyledTHead = styled.thead<THeadProps>(
  css({
    backgroundColor: "colorBackgroundWeak",
    color: "colorTextWeak",
    top: (props: THeadProps) => props.top,
  }),
);

const THead = React.forwardRef<HTMLTableSectionElement, THeadProps>(
  ({ element = "THEAD", stickyHeader = false, top = stickyHeader ? "-1px" : null, ...props }, ref) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as={StyledTHead as any}
        element={element}
        top={top}
        {...getStickyStyles({ stickyHeader })}
      />
    );
    /* eslint-enable @typescript-eslint/no-explicit-any */
  },
);

THead.displayName = "THead";

export { THead };
