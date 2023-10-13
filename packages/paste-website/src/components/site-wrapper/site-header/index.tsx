import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Topbar, TopbarActions } from "@twilio-paste/topbar";
import * as React from "react";
import GitHubButton from "react-github-button";
import "react-github-button/assets/style.css";

import { PASTE_DOCS_TOPBAR } from "../../../constants";
import { ContactUsMenu } from "../../ContactUsMenu";
import { DarkModeToggle } from "./DarkModeToggle";
import { FigmaButton } from "./FigmaButton";
import { HamburgerToggle } from "./HamburgerToggle";
import { SiteHeaderLogo } from "./SiteHeaderLogo";
import { SiteHeaderSearch } from "./SiteHeaderSearch";

export const SiteHeader: React.FC<{
  sidebarMobileCollapsed: boolean;
  setSidebarMobileCollapsed: (collapsed: boolean) => void;
}> = ({ sidebarMobileCollapsed, setSidebarMobileCollapsed }): JSX.Element => {
  return (
    <Topbar id={PASTE_DOCS_TOPBAR}>
      <TopbarActions display={["flex", "none"]} justify="start">
        <SiteHeaderLogo title="Paste" />
      </TopbarActions>
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
      <TopbarActions display={["none", "flex"]}>
        <Box minWidth="size20" data-cy="paste-docsearch-container" id="paste-docs-search-input">
          <SiteHeaderSearch />
        </Box>
        <DarkModeToggle />
        <ContactUsMenu />
        <FigmaButton />
        <GitHubButton type="stargazers" namespace="twilio-labs" repo="paste" />
      </TopbarActions>
    </Topbar>
  );
};
