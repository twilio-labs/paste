import { Box } from "@twilio-paste/box";
import { useTheme } from "@twilio-paste/theme";

import HeartDoodleIcon from "../../icons/HeartDoodleIcon";

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
      <HeartDoodleIcon
        css={{ height: theme.heights.sizeIcon70, width: theme.widths.sizeIcon70 }}
        color={theme.textColors.colorTextInverse}
        decorative
      />
    </Box>
  );
};

export { SiteFooterHeader };
