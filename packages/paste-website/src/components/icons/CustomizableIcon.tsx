import { IconWrapper } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import type { IconWrapperProps } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

export interface CustomizableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CustomizableIcon: React.FC<React.PropsWithChildren<CustomizableIconProps>> = ({
  as,
  display,
  element = "ICON",
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `CustomizableIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[CustomizableIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 25 25" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          d="M16.4503 5.32002C16.5947 4.99391 16.4473 4.61315 16.1211 4.46955C15.7949 4.32596 15.4134 4.47392 15.269 4.80003L9.52778 17.7649C9.38337 18.091 9.53074 18.4718 9.85693 18.6154C10.1831 18.759 10.5646 18.611 10.709 18.2849L16.4503 5.32002Z"
          fill="currentColor"
        />
        <path
          d="M20.3632 7.20983C20.6771 7.04 21.069 7.15627 21.2383 7.46952L24.9117 14.2624C25.0745 14.5634 24.9733 14.9394 24.6812 15.1191L18.0884 19.1745C17.7843 19.3616 17.3866 19.2673 17.2 18.964C17.0133 18.6607 17.1085 18.2632 17.4125 18.0762L23.4847 14.341L20.1014 8.08451C19.932 7.77126 20.0492 7.37965 20.3632 7.20983Z"
          fill="currentColor"
        />
        <path
          d="M8.77853 4.12055C8.96517 4.42385 8.87001 4.82133 8.56599 5.00835L2.49379 8.74375L5.87707 15.0005C6.04646 15.3138 5.92927 15.7054 5.61532 15.8752C5.30137 16.045 4.90954 15.9287 4.74015 15.6155L1.06681 8.82231C0.904067 8.52134 1.00525 8.14534 1.29734 7.96565L7.89014 3.91C8.19415 3.72298 8.5919 3.81725 8.77853 4.12055Z"
          fill="currentColor"
        />
      </svg>
    </IconWrapper>
  );
};

CustomizableIcon.displayName = "CustomizableIcon";
export { CustomizableIcon };
