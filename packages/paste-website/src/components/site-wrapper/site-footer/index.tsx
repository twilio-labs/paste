import { Box } from "@twilio-paste/box";

import { SITE_CONTENT_MAX_WIDTH } from "../../../constants";
import { SiteFooterIllustration } from "./SiteFooterIllustration";
import { SiteFooterNav } from "./SiteFooterNav";

const SiteFooter: React.FC = () => {
  return (
    <Box as="footer" margin="space70" marginTop="space200" paddingTop="space200" position="relative">
      <Box
        borderRadius="borderRadius30"
        backgroundColor="colorBackgroundBodyInverse"
        marginTop={["space0", "space0", "space0", "space0", "space200"]}
        paddingTop={["space0", "space0", "space0", "space0", "space200"]}
      >
        <Box
          maxWidth={SITE_CONTENT_MAX_WIDTH}
          padding={["space90", "space180"]}
          marginTop="space10"
          marginLeft="auto"
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
