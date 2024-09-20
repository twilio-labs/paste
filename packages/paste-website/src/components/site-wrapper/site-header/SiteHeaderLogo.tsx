import { Box } from "@twilio-paste/box";
import { LogoPasteIcon } from "@twilio-paste/icons/esm/LogoPasteIcon";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/media-object";
import { styled, themeGet } from "@twilio-paste/styling-library";
import { Text } from "@twilio-paste/text";
import Link from "next/link";
import * as React from "react";

import { event } from "../../../lib/gtag";

const LogoLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${themeGet("textColors.colorTextInverse")};

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    box-shadow: ${themeGet("shadows.shadowFocus")};
    border-radius: ${themeGet("radii.borderRadius10")};
  }
`;

interface SiteHeaderLogoProps {
  title?: string;
  subtitle?: string;
}

/*
 * Note: 'subtitle' isn't passed for the mobile view, so we use that fact
 * to render different sizes and spacing in mobile
 */
const SiteHeaderLogo: React.FC<React.PropsWithChildren<SiteHeaderLogoProps>> = ({ title, subtitle }) => {
  return (
    <Box display="flex" alignItems="center" minWidth={subtitle ? "sizeSidebar" : "size0"}>
      <LogoLink
        href="/"
        onClick={() =>
          event({
            category: "Top Navigation",
            action: "click-paste-logo",
            label: "Paste logo",
          })
        }
      >
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space40">
            <LogoPasteIcon decorative={false} size="sizeIcon70" title="Twilio Paste" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontSize="fontSize40" lineHeight="lineHeight30" color="colorText">
              {title}
            </Text>
            {subtitle ? (
              <Text
                as="div"
                fontSize="fontSize20"
                fontWeight="fontWeightNormal"
                lineHeight="lineHeight20"
                color="colorText"
              >
                {subtitle}
              </Text>
            ) : null}
          </MediaBody>
        </MediaObject>
      </LogoLink>
    </Box>
  );
};

export { SiteHeaderLogo };
