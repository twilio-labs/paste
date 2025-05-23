import { Box } from "@twilio-paste/box";
import { useTheme } from "@twilio-paste/theme";
import type { JSX } from "react";

import HeartDoodleIcon from "../../icons/NewHeartDoodleIcon";

const SiteFooterHeader = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection={["column", "row"]}
      marginBottom="space80"
      textAlign={["center", "left"]}
    >
      <HeartDoodleIcon size={theme.heights.sizeIcon70} color={theme.textColors.colorTextInverse} decorative />
    </Box>
  );
};

export { SiteFooterHeader };
