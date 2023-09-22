import { Box } from "@twilio-paste/core/box";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/core/media-object";
import { styled } from "@twilio-paste/core/styling-library";
import { Text } from "@twilio-paste/core/text";
import { useTheme } from "@twilio-paste/core/theme";
import Link from "next/link";
import * as React from "react";

import { BetaBadge } from "./BetaBadge";
import { PasteIconInverse } from "./PasteIconInverse";

const StyledA = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;

type SiteHeaderLogoProps = {
  title: string;
  subtitle?: string;
};

/*
 * Note: 'subtitle' isn't passed for the mobile view, so we use that fact
 * to render different sizes and spacing in mobile
 */
const SiteHeaderLogo: React.FC<React.PropsWithChildren<SiteHeaderLogoProps>> = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      paddingX="space70"
      paddingY="space50"
      minWidth={subtitle ? "sizeSidebar" : "size0"}
    >
      <MediaObject verticalAlign="center">
        <MediaFigure spacing={subtitle ? "space40" : "space0"}>
          <PasteIconInverse color={theme.textColors.colorTextInverse} display="block" size={42} />
        </MediaFigure>
        <MediaBody>
          <Text as="div" fontSize="fontSize40" lineHeight="lineHeight40" color="colorTextInverse">
            <StyledA href="/" passHref>
              {title}
            </StyledA>
          </Text>
          {subtitle ? (
            <Box
              as="div"
              display="flex"
              alignItems="center"
              columnGap="space40"
              fontSize="fontSize20"
              fontWeight="fontWeightNormal"
              lineHeight="lineHeight20"
              color="colorTextInverse"
            >
              {subtitle} <BetaBadge />
            </Box>
          ) : null}
        </MediaBody>
      </MediaObject>
    </Box>
  );
};

export { SiteHeaderLogo };
