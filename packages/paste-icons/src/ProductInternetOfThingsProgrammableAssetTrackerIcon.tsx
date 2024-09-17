import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductInternetOfThingsProgrammableAssetTrackerIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsProgrammableAssetTrackerIcon = React.forwardRef<
  HTMLElement,
  ProductInternetOfThingsProgrammableAssetTrackerIconProps
>(({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
  const titleId = `ProductInternetOfThingsProgrammableAssetTrackerIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[ProductInternetOfThingsProgrammableAssetTrackerIcon]: Missing a title for non-decorative icon.");
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
        aria-labelledby={decorative || title == null ? undefined : titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          d="M4.361 9.979c0-.342.227-.57.568-.57h1.137c.34 0 .568.228.568.57 0 .341-.227.569-.568.569H4.929c-.34 0-.568-.228-.568-.57zm-.227-2.503l-1.08-1.252c-.227-.228-.568-.284-.796-.057-.227.228-.284.569-.056.797l1.022 1.251c.057.057.057.114 0 .17l-1.08 1.31c-.227.227-.17.625.058.796.113.113.227.113.34.113a.516.516 0 00.455-.227l1.08-1.309c.455-.455.398-1.137.057-1.592zM18 8.1v5.519c0 .568-.284 1.08-.739 1.422l-3.978 2.674a1.92 1.92 0 01-.966.284c-.34 0-.682-.114-.966-.284L5.1 13.392a1.73 1.73 0 01-.455-.455c-.113-.17-.227-.398-.227-.626v-.114c-.057-.284.17-.569.511-.625.341-.057.569.17.625.512v.056c0 .057.057.114.057.228l.17.17 5.797 3.983c.057.057.114 0 .17 0 .058 0 .058-.057.058-.114v-4.551c0-.17-.114-.341-.228-.455l-6.99-4.893s-.056 0-.056-.056c0-.057-.057-.114-.114-.171-.057-.114-.057-.228-.057-.341 0-.228.057-.399.227-.512l4.49-3.13a1.712 1.712 0 011.932 0l6.08 4.21.058.057.17.114c.398.341.682.853.682 1.422zM5.895 5.826c-.056 0-.056.057-.056.057 0 .057 0 .057.056.113l6.081 4.21c.17.114.455.114.625 0l3.808-2.503c.057-.057.057-.057.057-.114s0-.057-.057-.113l-6.08-4.21a.615.615 0 00-.626 0l-3.808 2.56zm10.968 3.242c0-.056-.056-.113-.056-.113-.057 0-.114-.057-.17 0l-3.524 2.332a.518.518 0 00-.228.455v4.551c0 .057.057.114.057.114.057 0 .114.057.17 0l3.524-2.332a.518.518 0 00.227-.455V9.068zm-5.682-1.365a1.14 1.14 0 001.136-1.138 1.14 1.14 0 00-1.136-1.137 1.14 1.14 0 00-1.137 1.137c0 .626.455 1.138 1.136 1.138z"
        />
      </svg>
    </IconWrapper>
  );
});

ProductInternetOfThingsProgrammableAssetTrackerIcon.displayName = "ProductInternetOfThingsProgrammableAssetTrackerIcon";
export { ProductInternetOfThingsProgrammableAssetTrackerIcon };
