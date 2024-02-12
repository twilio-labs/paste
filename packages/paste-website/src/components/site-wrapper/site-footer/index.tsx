import { Box } from "@twilio-paste/box";
import { useRouter } from "next/router";

import { SITE_CONTENT_MAX_WIDTH } from "../../../constants";
import { SiteFooterIllustration } from "./SiteFooterIllustration";
import { SiteFooterNav } from "./SiteFooterNav";
import { SiteFooterTopAngle } from "./SiteFooterTopAngle";

const SiteFooter: React.FC = () => {
  const router = useRouter();
  return (
    <Box as="footer" margin="space70" marginTop="space200" paddingTop="space200" position="relative">
      {router.pathname === "/" && <SiteFooterTopAngle />}
      <Box
        borderRadius="borderRadius20"
        backgroundColor="colorBackgroundBrandStronger"
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
