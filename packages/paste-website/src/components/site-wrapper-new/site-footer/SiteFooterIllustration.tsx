import { Box } from "@twilio-paste/box";
import Image from "next/image";

import FooterImg from "../../../assets/illustrations/footer_img.svg";

const SiteFooterIllustration = (): JSX.Element => {
  return (
    <Box display={["none", "none", "none", "block"]} flexShrink={0}>
      <Image src={FooterImg} aria-hidden="true" role="img" alt="" />
    </Box>
  );
};

export { SiteFooterIllustration };
