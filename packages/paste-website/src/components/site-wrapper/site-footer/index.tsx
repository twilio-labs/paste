import { Box } from "@twilio-paste/box";

import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../../constants";
import { SiteFooterIllustration } from "./SiteFooterIllustration";
import { SiteFooterNav } from "./SiteFooterNav";

const SiteFooter: React.FC = () => {
  return (
    <Box
      as="footer"
      padding={["space0", "space80", "space140"]}
      display="flex"
      backgroundColor="colorBackgroundInverseStrongest"
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        borderRadius={["borderRadius0", "borderRadius30"]}
        backgroundColor="colorBackgroundBodyInverse"
      >
        <Box
          width="100%"
          maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
          padding={["space90", "space90", "space180"]}
          paddingTop={["space130", "space130", "space130"]}
          display="flex"
          justifyContent={["center", "center", "center", "space-between"]}
        >
          <SiteFooterNav />
          <SiteFooterIllustration />
        </Box>
      </Box>
    </Box>
  );
};
export { SiteFooter };
