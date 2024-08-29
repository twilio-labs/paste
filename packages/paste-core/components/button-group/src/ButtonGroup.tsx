import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

const AttachedStyled = styled.span(
  css({
    /*
     * NOTE: allow hover and focus indication to remain visible on all sides of a button despite
     * sibling elements being rendered immediately adjacent under the attached styles
     */
    "& > button": {
      zIndex: 1,
    },
    "& > button:hover, & > button[aria-pressed=true]": {
      zIndex: 2,
    },
    "& > button:focus": {
      zIndex: 3,
    },
    "& > button:disabled": {
      zIndex: 0,
    },
    "& > button:first-of-type": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    "& > button:not(:first-of-type):not(:last-of-type)": {
      borderRadius: 0,
      marginLeft: "1px",
    },
    "& > button:last-of-type": {
      marginLeft: "1px",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  }),
);

const UnattachedStyled = styled.span(
  css({
    display: "flex",
    columnGap: "space40",
  }),
);

type JustifyOptions = "flex-start" | "center" | "flex-end" | "space-between";

export interface ButtonGroupProps extends HTMLPasteProps<"div"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "BUTTON_GROUP"
   * @type {BoxProps["element"]}
   * @memberof ButtonGroupProps
   */
  element?: BoxProps["element"];
  /**
   *
   * @default false
   * @type {boolean}
   * @memberof ButtonGroupProps
   */
  attached?: boolean;
  /**
   * Sets the `justify-content` CSS property. Only used for unattached button groups.
   *
   * @default "flex-start"
   * @type {JustifyOptions}
   * @memberof ButtonGroupProps
   */
  justifyContent?: JustifyOptions;
  children: React.ReactElement[];
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ element = "BUTTON_GROUP", children, attached = false, justifyContent = "flex-start", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        as={attached ? AttachedStyled : UnattachedStyled}
        ref={ref}
        element={element}
        display="inline-flex"
        flexWrap={attached ? "nowrap" : "wrap"}
        justifyContent={attached ? "flex-start" : justifyContent}
        rowGap="space40"
        role="group"
      >
        {children}
      </Box>
    );
  },
);

ButtonGroup.displayName = "ButtonGroup";
