import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
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
    "& > button:not(:first-of-type)": {
      marginLeft: "space40",
    },
    "& > button:first-of-type": {
      marginLeft: "space0",
    },
  }),
);

export interface ButtonGroupProps extends Omit<React.ComponentPropsWithRef<"div">, "children"> {
  element?: BoxProps["element"];
  attached?: boolean;
  children: React.ReactElement[];
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ element = "BUTTON_GROUP", children, attached = false, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        as={attached ? AttachedStyled : UnattachedStyled}
        ref={ref}
        element={element}
        display="inline-flex"
        role="group"
      >
        {children}
      </Box>
    );
  },
);

ButtonGroup.displayName = "ButtonGroup";
