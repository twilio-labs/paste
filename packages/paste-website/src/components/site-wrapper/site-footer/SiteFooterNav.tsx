import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { useTheme } from "@twilio-paste/theme";

import { FIGMA_PROFILE_URL, REMIX_DOMAIN, STORYBOOK_DOMAIN } from "../../../constants";
import { event } from "../../../lib/gtag";
import TwilioLogo from "../../icons/TwilioLogo";
import { SiteFooterHeader } from "./SiteFooterHeader";

const SiteFooterNav = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box position="relative">
      <SiteFooterHeader />
      <Box
        as="nav"
        display="flex"
        flexDirection={["column", "row"]}
        marginLeft={["space0", "space120"]}
        textAlign={["center", "left"]}
      >
        <Box flexGrow={[1, 1, 1, 0]} marginBottom="space60" marginRight={["space0", "space130"]}>
          <Stack orientation="vertical" spacing="space60">
            <Anchor
              href="/introduction/about-paste"
              variant="inverse"
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-about",
                  label: "About",
                })
              }
            >
              About
            </Anchor>
            <Anchor
              href="/roadmap"
              variant="inverse"
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-our-roadmap",
                  label: "Our roadmap",
                })
              }
            >
              Our roadmap
            </Anchor>
            <Anchor
              href="/introduction/for-designers/design-guidelines"
              variant="inverse"
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-design-guidelines",
                  label: "Design guidelines",
                })
              }
            >
              Design guidelines
            </Anchor>
            <Anchor
              href="/introduction/for-engineers/quickstart"
              variant="inverse"
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-quickstart",
                  label: "Quick Start",
                })
              }
            >
              Quick start
            </Anchor>
          </Stack>
        </Box>
        <Box flexGrow={[1, 1, 1, 0]} marginBottom="space60" marginRight={["space0", "space130"]}>
          <Stack orientation="vertical" spacing="space60">
            <Anchor
              href="https://github.com/twilio-labs/paste"
              variant="inverse"
              showExternal
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-github",
                  label: "Github",
                })
              }
            >
              Github
            </Anchor>
            <Anchor
              href={FIGMA_PROFILE_URL}
              variant="inverse"
              showExternal
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-figma",
                  label: "Figma",
                })
              }
            >
              Figma
            </Anchor>
            <Anchor
              href={STORYBOOK_DOMAIN}
              variant="inverse"
              showExternal
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-storybook",
                  label: "Storybook",
                })
              }
            >
              Storybook
            </Anchor>
            <Anchor
              href={REMIX_DOMAIN}
              variant="inverse"
              showExternal
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-remix",
                  label: "Theme Designer",
                })
              }
            >
              Paste Remix
            </Anchor>
          </Stack>
        </Box>
        <Box flexGrow={[1, 1, 1, 0]} marginBottom="space60" marginRight={["space0", "space130"]}>
          <Stack orientation="vertical" spacing="space60">
            <Anchor
              href="https://github.com/twilio-labs/paste/discussions"
              variant="inverse"
              showExternal
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-get-support",
                  label: "Get support",
                })
              }
            >
              Get support
            </Anchor>
            <Anchor
              href="https://github.com/twilio-labs/paste/issues/new/choose"
              variant="inverse"
              showExternal
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-report-a-bug",
                  label: "Report a bug",
                })
              }
            >
              Report a bug
            </Anchor>
            <Anchor
              href="/introduction/working-with-us"
              variant="inverse"
              onClick={() =>
                event({
                  category: "Footer",
                  action: "click-how-we-work",
                  label: "How we work",
                })
              }
            >
              How we work
            </Anchor>
          </Stack>
        </Box>
      </Box>
      <Box marginTop="space120" marginLeft={["space0", "space120"]} textAlign={["center", "left"]}>
        <Anchor href="https://twilio.com" display="inline-flex">
          <TwilioLogo
            css={{ height: theme.heights.sizeIcon40, width: theme.widths.size10 }}
            color={theme.textColors.colorTextInverse}
            title="Twilio"
          />
        </Anchor>
      </Box>
    </Box>
  );
};

export { SiteFooterNav };
