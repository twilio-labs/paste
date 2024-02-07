import { Box } from "@twilio-paste/box";
import { useTheme } from "@twilio-paste/theme";
import Image from "next/image";

import FooterImg from "../../../assets/illustrations/footer_img.svg";

const SiteFooterIllustration = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box bottom={80} display={["none", "none", "none", "block"]} right={theme.sizes.size20} position="absolute">
      <Image src={FooterImg} aria-hidden="true" role="img" alt="" />
    </Box>
  );
};

export { SiteFooterIllustration };
