import { ProductSupportIcon } from "@twilio-paste/icons/esm/ProductSupportIcon";
import { Menu, MenuButton, MenuItem, useMenuState } from "@twilio-paste/menu";
import * as React from "react";

import { event } from "../lib/gtag";

export const ContactUsMenu: React.FC = () => {
  const menu = useMenuState();

  const handleClick = (category: string, action: string, label: string): void => {
    menu.hide();
    event({
      category,
      action,
      label,
    });
  };

  return (
    <>
      <MenuButton
        {...menu}
        color="colorTextIcon"
        variant="reset"
        borderRadius="borderRadius10"
        size="reset"
        onClick={() =>
          event({
            category: "Top Navigation",
            action: "click-contact-us",
            label: "Contact us",
          })
        }
      >
        <ProductSupportIcon decorative={false} title="Get help" size="sizeIcon40" />
      </MenuButton>
      <Menu {...menu} aria-label="Get help">
        <MenuItem
          {...menu}
          href="/assistant"
          onClick={() => handleClick("Ask Paste Assistant", "click-ask-assistant", "Ask Paste Assistant")}
        >
          Ask Paste Assistant
        </MenuItem>
        <MenuItem
          {...menu}
          href="https://github.com/twilio-labs/paste/discussions/new?category=general "
          onClick={() => handleClick("Contact Us", "click-ask-question", "Ask question")}
        >
          Ask a question
        </MenuItem>
        <MenuItem
          {...menu}
          href="https://github.com/twilio-labs/paste/discussions/new?category=ideas"
          onClick={() => handleClick("Contact Us", "click-request-feature", "Request feature")}
        >
          Request a feature
        </MenuItem>
        <MenuItem
          {...menu}
          href="https://github.com/twilio-labs/paste/issues/new?assignees=&labels=Type%3A+Bug&template=bug_report.md&title="
          onClick={() => handleClick("Contact Us", "click-report-bug", "Report bug")}
        >
          Report a bug
        </MenuItem>
      </Menu>
    </>
  );
};
