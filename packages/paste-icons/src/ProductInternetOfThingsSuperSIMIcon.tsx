"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductInternetOfThingsSuperSIMIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsSuperSIMIcon = React.forwardRef<HTMLElement, ProductInternetOfThingsSuperSIMIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductInternetOfThingsSuperSIMIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductInternetOfThingsSuperSIMIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.31 1.975c.056.062.1.134.128.212a.625.625 0 01-.375.813l-1.625.5 1 1.375a.663.663 0 01-.125.875.887.887 0 01-.375.125 1.013 1.013 0 01-.625-.25l-1-1.375-1 1.375a.57.57 0 01-.5.25.887.887 0 01-.376-.125.675.675 0 01-.124-.875l1-1.375-1.626-.5a.626.626 0 01-.374-.813.626.626 0 01.812-.374l1.625.5V.625a.625.625 0 111.25 0v1.688l1.625-.5a.625.625 0 01.685.162zM4.5 16.875v-6.25A.625.625 0 015.125 10h5a.624.624 0 01.625.625v6.25a.624.624 0 01-.625.625h-5a.625.625 0 01-.625-.625zm3.375-5.625L9.5 12.875V11.25H7.875zm-.5 5L5.75 14.625v1.625h1.625zM5.75 12.875l3.375 3.375H9.5v-1.625L6.125 11.25H5.75v1.625zM10.625 5c.28.01.546.121.75.313l1.563 1.625c.189.18.301.426.312.687v10.813A1.563 1.563 0 0111.687 20H3.563A1.563 1.563 0 012 18.437V6.563A1.562 1.562 0 013.563 5h7.062zM3.562 18.75h8.126a.313.313 0 00.312-.313V7.75l-1.5-1.5H3.562a.312.312 0 00-.312.313v11.875a.313.313 0 00.313.312z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductInternetOfThingsSuperSIMIcon.displayName = "ProductInternetOfThingsSuperSIMIcon";
export { ProductInternetOfThingsSuperSIMIcon };
