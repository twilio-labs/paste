"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductInternetOfThingsTrustOnboardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsTrustOnboardIcon = React.forwardRef<
  HTMLElement,
  ProductInternetOfThingsTrustOnboardIconProps
>(({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
  const titleId = `ProductInternetOfThingsTrustOnboardIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[ProductInternetOfThingsTrustOnboardIcon]: Missing a title for non-decorative icon.");
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
          d="M18.25 1.875v.944a1.563 1.563 0 01.625 1.243v1.25a1.563 1.563 0 01-1.563 1.563h-1.875a1.562 1.562 0 01-1.562-1.556v-1.25a1.562 1.562 0 01.625-1.25v-.944a1.875 1.875 0 013.75 0zm-1.63-.589a.588.588 0 00-.245-.036.587.587 0 00-.625.625V2.5H17v-.625a.587.587 0 00-.38-.589zm.913 4.247a.313.313 0 00.092-.22v-1.25a.312.312 0 00-.313-.313h-1.875a.313.313 0 00-.312.312v1.25a.313.313 0 00.313.313h1.874a.313.313 0 00.221-.092zM10.625 5c.28.01.546.121.75.312l1.563 1.625c.189.18.301.427.312.688v10.813A1.55 1.55 0 0111.687 20H3.563A1.55 1.55 0 012 18.437V6.563A1.55 1.55 0 013.563 5h7.062zm1.357 13.56a.293.293 0 00.018-.122V7.75l-1.5-1.5H3.563a.294.294 0 00-.313.312v11.875a.293.293 0 00.313.313h8.124a.295.295 0 00.295-.19zm-7.103-8.524A.587.587 0 015.125 10h5a.587.587 0 01.625.625v6.25a.585.585 0 01-.625.625h-5a.587.587 0 01-.625-.625v-6.25a.588.588 0 01.38-.589zm2.996 1.214L9.5 12.875V11.25H7.875zm-.5 5L5.75 14.625v1.625h1.625zM5.75 12.875l3.375 3.375H9.5v-1.625L6.125 11.25H5.75v1.625z"
        />
      </svg>
    </IconWrapper>
  );
});

ProductInternetOfThingsTrustOnboardIcon.displayName = "ProductInternetOfThingsTrustOnboardIcon";
export { ProductInternetOfThingsTrustOnboardIcon };
