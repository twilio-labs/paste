import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { ProgressStepsContext } from "./ProgressStepsContext";
import type { Orientation } from "./types";

const VerticalStyles: BoxProps = {
  flexDirection: "column",
  alignItems: "flex-start", // to prevent children from stretching full width
};
const HorizontalStyles: BoxProps = {
  flexWrap: "nowrap",
  flexGrow: 1,
};

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

const ItemSeparatortyles: {
  [key in Orientation]: Record<string, Record<string, string | BoxStyleProps>>;
} = {
  vertical: {
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
    "[role='listitem']": {
      display: "flex",
      alignItems: "center",
      flexGrow: "1",
      "&::after, &::before": {
        content: "''",
        borderBottomWidth: "borderWidth20",
        borderBottomStyle: "solid",
        borderBottomColor: "colorBorderWeaker",
        borderRadius: "borderRadius20",
        minWidth: "sizeBase20",
        flexGrow: 1,
      },

      "&>*:first-child": {
        marginX: "space30",
      },
    },
    "[role='listitem']:first-child": {
      "&::before": {
        content: "none",
      },

      "&>*:first-child": {
        marginLeft: "space0",
      },
    },
    "[role='listitem']:last-child": {
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
        ...ItemSeparatortyles[orientation],
      }),
    );

    return (
      <ProgressStepsContext.Provider value={{ orientation }}>
        <Box
          {...safelySpreadBoxProps(props)}
          // @ts-expect-error we don't have polymorphic box typings yet
          as={ContainerStyled}
          ref={ref}
          element={element}
          role="list"
          display="flex"
          {...ItemSeparatortyles[orientation]}
          {...(orientation === "horizontal" ? HorizontalStyles : VerticalStyles)}
        >
          {props.children}
        </Box>
      </ProgressStepsContext.Provider>
    );
  },
);
ProgressSteps.displayName = "ProgressSteps";
