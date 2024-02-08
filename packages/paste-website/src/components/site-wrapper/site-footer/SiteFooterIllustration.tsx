import { Box } from "@twilio-paste/box";
import { useTheme } from "@twilio-paste/theme";
import Image from "next/image";

import FooterBuildingBlocks from "../../../assets/illustrations/footer_building_blocks.svg";

const SiteFooterIllustration = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box bottom={-6} display={["none", "none", "none", "block"]} right={theme.sizes.sizeSquare120} position="absolute">
      <Image src={FooterBuildingBlocks} aria-hidden="true" role="img" alt="" />
    </Box>
  );
};

export { SiteFooterIllustration };
