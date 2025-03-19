import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Topbar, TopbarActions } from "@twilio-paste/topbar";
import { useWindowSize } from "@twilio-paste/utils";
import type { JSX } from "react";
import * as React from "react";
import GitHubButton from "react-github-button";
import "react-github-button/assets/style.css";

import { PASTE_DOCS_TOPBAR } from "../../../constants";
import { ContactUsMenu } from "../../ContactUsMenu";
import { AssistantLink } from "./AssistantLink";
import { DarkModeToggle } from "./DarkModeToggle";
import { FigmaButton } from "./FigmaButton";
import { HamburgerToggle } from "./HamburgerToggle";
import { SiteHeaderLogo } from "./SiteHeaderLogo";
import { SiteHeaderSearch } from "./SiteHeaderSearch";

export const SiteHeader: React.FC<{
  sidebarMobileCollapsed: boolean;
  setSidebarMobileCollapsed: (collapsed: boolean) => void;
}> = ({ sidebarMobileCollapsed, setSidebarMobileCollapsed }): JSX.Element => {
  const { breakpointIndex } = useWindowSize();
  return (
    <Topbar id={PASTE_DOCS_TOPBAR}>
      <TopbarActions display={["flex", "none"]} justify="start">
        <SiteHeaderLogo title="Paste" />
      </TopbarActions>
      {breakpointIndex === 0 ? (
        <TopbarActions display={["flex", "none"]}>
          <Box minWidth="150px" data-cy="paste-docsearch-container" id="paste-docs-search-input">
            <SiteHeaderSearch />
          </Box>
          <Button
            aria-label="Open main navigation"
            variant="secondary"
            size="icon_small"
            pressed={!sidebarMobileCollapsed}
            onClick={() => setSidebarMobileCollapsed(!sidebarMobileCollapsed)}
          >
            <HamburgerToggle toggled={!sidebarMobileCollapsed} color="colorTextIcon" />
          </Button>
        </TopbarActions>
      ) : (
        <TopbarActions display={["none", "flex"]}>
          <Box data-cy="paste-docsearch-container" id="paste-docs-search-input">
            <SiteHeaderSearch />
          </Box>
          <AssistantLink />
          <ContactUsMenu />
          <DarkModeToggle />
          <FigmaButton />
          <GitHubButton type="stargazers" namespace="twilio-labs" repo="paste" />
        </TopbarActions>
      )}
    </Topbar>
  );
};
