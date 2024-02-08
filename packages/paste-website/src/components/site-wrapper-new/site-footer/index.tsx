import { Box } from "@twilio-paste/box";

import { SITE_CONTENT_MAX_WIDTH } from "../../../constants";
import { SiteFooterIllustration } from "./SiteFooterIllustration";
import { SiteFooterNav } from "./SiteFooterNav";

const SiteFooter: React.FC = () => {
  return (
    <Box as="footer" margin="space70" paddingTop="space200" position="relative" element="FOOTER">
      <Box
        borderRadius="borderRadius30"
        // marginTop={["space0", "space0", "space0", "space0", "space200"]}
        backgroundColor="colorBackgroundBodyInverse"
        // paddingTop={["space0", "space0", "space0", "space0", "space200"]}
      >
        <Box
          maxWidth={SITE_CONTENT_MAX_WIDTH}
          padding={["space90", "space180"]}
          paddingTop="space20"
          marginLeft="space200"
          marginRight="auto"
          position="relative"
        >
          <SiteFooterIllustration />
          <SiteFooterNav />
        </Box>
      </Box>
    </Box>
  );
};
export { SiteFooter };
