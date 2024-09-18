import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { ProgressStepsContext } from "./ProgressStepsContext";
import type { Orientation } from "./types";

export interface ProgressStepsProps extends Omit<HTMLPasteProps<"div">, "children"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'PROGRESS_STEPS'
   * @type {BoxProps['element']}
   * @memberof ProgressStepsProps
   */
  element?: BoxProps["element"];
  /**
   *
   * @default 'horizontal'
   * @type {Orientation}
   * @memberof ProgressStepsProps
   */
  orientation?: Orientation;
}

const ItemSeparatorStyles: {
  [key in Orientation]: Record<string, string | Record<string, string | BoxStyleProps>>;
} = {
  vertical: {
    flexDirection: "column",
    alignItems: "flex-start",
    "[role='listitem']>*>div:first-child::after": {
      content: "''",
      borderLeftWidth: "borderWidth20",
      borderLeftStyle: "solid",
      borderLeftColor: "colorBorderWeaker",
      borderRadius: "borderRadius0",
      minHeight: "sizeBase80",
      flexGrow: "1",
      marginY: "space30",
    },

    "[role='listitem']:last-child>*>div:first-child::after": {
      content: "none",
    },
  },
  horizontal: {
    flexWrap: "nowrap",
    "[role='listitem']": {
      display: "flex",
      alignItems: "flex-start",
      flexGrow: "1",
      "&::after": {
        content: "''",
        borderBottomWidth: "borderWidth20",
        borderBottomStyle: "solid",
        borderBottomColor: "colorBorderWeaker",
        borderRadius: "borderRadius20",
        minWidth: "sizeBase40",
        flexGrow: 1,
        // @ts-expect-error do not have tokens for 10px
        marginTop: "10px",
      },

      "&>*:first-child": {
        marginX: "space30",
      },
    },
    "[role='listitem']:first-child": {
      "&>*:first-child": {
        marginLeft: "space0",
      },
    },
    "[role='listitem']:last-child": {
      flexGrow: "0",
      "&::after": {
        content: "none",
      },

      "&>*:last-child": {
        marginRight: "space0",
      },
    },
  },
};

export const ProgressSteps = React.forwardRef<HTMLDivElement, ProgressStepsProps>(
  ({ element = "PROGRESS_STEPS", orientation = "horizontal", ...props }, ref) => {
    const ContainerStyled = styled.div(
      css({
        display: "flex",
        ...ItemSeparatorStyles[orientation],
      }),
    );

    return (
      <ProgressStepsContext.Provider value={{ orientation }}>
        <Box {...safelySpreadBoxProps(props)} as={ContainerStyled as any} ref={ref} element={element} role="list">
          {props.children}
        </Box>
      </ProgressStepsContext.Provider>
    );
  },
);
ProgressSteps.displayName = "ProgressSteps";
