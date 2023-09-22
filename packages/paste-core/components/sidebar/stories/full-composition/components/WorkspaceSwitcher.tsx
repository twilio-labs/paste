import {
  AccountSwitcher,
  AccountSwitcherBadge,
  AccountSwitcherGroup,
  AccountSwitcherItem,
  AccountSwitcherItemRadio,
  AccountSwitcherSeparator,
  useAccountSwitcherState,
} from "@twilio-paste/account-switcher";
import * as React from "react";

export const WorkspaceSwitcherMenu: React.FC = () => {
  const accountSwitcher = useAccountSwitcherState();
  const [selectedAccount, setSelectedAccount] = React.useState("My Workspace");
  return (
    <>
      <AccountSwitcherBadge {...accountSwitcher} i18nButtonLabel="Switch accounts">
        Workspace name
      </AccountSwitcherBadge>
      <AccountSwitcher {...accountSwitcher} aria-label="Avaiable accounts">
        <AccountSwitcherGroup label="Recent workspaces">
          <AccountSwitcherItemRadio
            name="recent_workspace"
            value="My Workspace"
            checked={selectedAccount === "My Workspace"}
            onChange={() => setSelectedAccount("My Workspace")}
            {...accountSwitcher}
          >
            My Workspace
          </AccountSwitcherItemRadio>
          <AccountSwitcherItemRadio
            name="recent_workspace"
            value="Second workspace"
            checked={selectedAccount === "Second workspace"}
            onChange={() => setSelectedAccount("Second workspace")}
            {...accountSwitcher}
          >
            Second workspace
          </AccountSwitcherItemRadio>
          <AccountSwitcherItemRadio
            name="recent_workspace"
            value="Third workspace"
            checked={selectedAccount === "Third workspace"}
            onChange={() => setSelectedAccount("Third workspace")}
            {...accountSwitcher}
          >
            Third workspace
          </AccountSwitcherItemRadio>
        </AccountSwitcherGroup>
        <AccountSwitcherSeparator />
        <AccountSwitcherItem {...accountSwitcher} href="#">
          Workspace settings
        </AccountSwitcherItem>
        <AccountSwitcherSeparator />
        <AccountSwitcherItem {...accountSwitcher} href="#">
          View all workspaces
        </AccountSwitcherItem>
        <AccountSwitcherSeparator />
        <AccountSwitcherItem {...accountSwitcher} href="#">
          Admin Center
        </AccountSwitcherItem>
      </AccountSwitcher>
    </>
  );
};
