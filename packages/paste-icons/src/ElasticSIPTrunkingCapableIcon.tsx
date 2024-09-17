import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ElasticSIPTrunkingCapableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ElasticSIPTrunkingCapableIcon = React.forwardRef<HTMLElement, ElasticSIPTrunkingCapableIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ElasticSIPTrunkingCapableIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ElasticSIPTrunkingCapableIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.68 15.202c.74.414.995 1.33.567 2.048-.428.717-1.376.963-2.118.55-.742-.414-.996-1.33-.569-2.048.206-.345.544-.597.942-.7.397-.103.821-.049 1.177.15zM3.55 6.097c1.644-2.846 4.91-4.442 8.254-4.034a.507.507 0 01.452.562.518.518 0 01-.581.438C8.753 2.71 5.902 4.106 4.465 6.59c-1.437 2.485-1.173 5.564.666 7.787a.489.489 0 01-.077.7v.01a.53.53 0 01-.73-.08c-2.111-2.54-2.418-6.066-.774-8.911zm7.23 1.913c.254 0 .465.177.51.41l.008.09c0 .276-.232.5-.517.5H9.747v1h1.034c.285 0 .517.223.517.5v1.998c0 .276-.232.5-.517.5H9.23a.513.513 0 01-.509-.41l-.008-.09c0-.276.232-.5.517-.5h1.034v-.999H9.23a.509.509 0 01-.517-.5V8.51c0-.276.232-.5.517-.5h1.55zm6.203 0c.286 0 .517.224.517.5v2c0 .275-.231.499-.517.499h-1.55v1.5c0 .275-.232.5-.517.5L14.823 13a.505.505 0 01-.424-.492V8.51c0-.276.231-.5.517-.5zm-4.135 0c.286 0 .517.224.517.5v3.998c0 .246-.183.45-.424.492l-.093.008a.509.509 0 01-.517-.5V8.51c0-.245.183-.45.424-.492l.093-.008zm3.618 1h-1.033v1h1.033v-1zm-3.153-6.242c.429-.717 1.377-.963 2.118-.549.742.414.996 1.33.568 2.048-.427.717-1.375.963-2.117.55a1.507 1.507 0 01-.724-.91 1.456 1.456 0 01.155-1.14z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ElasticSIPTrunkingCapableIcon.displayName = "ElasticSIPTrunkingCapableIcon";
export { ElasticSIPTrunkingCapableIcon };
