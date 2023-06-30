export const basicTopbarExample = `
const TopbarExample = () => {
  const ConnectivityObject = {
    Available: {
      variant: 'ConnectivityAvailable',
      children: 'Available',
    },
    Busy: {
      variant: 'ConnectivityBusy',
      children: 'Busy',
    },
    Unavailable: {
      variant: 'ConnectivityUnavailable',
      children: 'Unavailable',
    },
    Neutral: {
      variant: 'ConnectivityNeutral',
      children: 'Neutral',
    },
    Offline: {
      variant: 'ConnectivityOffline',
      children: 'Offline',
    },
  };
  const [availability, setConnectivity] = React.useState(
    ConnectivityObject.Available
  );
  const menu = useStatusMenuState();
  const supportMenu = useMenuState();
  const onClick = (status) => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  const productSwitcher = useProductSwitcherState();
  const [product, setProduct] = React.useState('twilio');
  const userDialogList = useUserDialogListState();

  return (
      <Topbar>
        <TopbarActions justify="start">
          <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={availability.variant}>
            {availability.children} | 3h 50min
          </StatusMenuBadge>
          <StatusMenu {...menu} aria-label="Preferences">
            <StatusMenuItemRadio
              name="availability"
              checked={availability.children === 'Available'}
              value="available"
              {...menu}
              onClick={() => onClick('Available')}
              variant="default"
            >
              <StatusMenuItemChild variant="ConnectivityAvailable">
                {ConnectivityObject.Available.children}
              </StatusMenuItemChild>
            </StatusMenuItemRadio>
            <StatusMenuItemRadio
              name="availability"
              checked={availability.children === 'Busy'}
              value="busy"
              {...menu}
              onClick={() => onClick('Busy')}
              variant="default"
            >
              <StatusMenuItemChild variant="ConnectivityBusy">{ConnectivityObject.Busy.children}</StatusMenuItemChild>
            </StatusMenuItemRadio>
            <StatusMenuItemRadio
              name="availability"
              checked={availability.children === 'Unavailable'}
              value="unavailable"
              {...menu}
              onClick={() => onClick('Unavailable')}
              variant="default"
            >
              <StatusMenuItemChild variant="ConnectivityUnavailable">
                {ConnectivityObject.Unavailable.children}
              </StatusMenuItemChild>
            </StatusMenuItemRadio>
            <StatusMenuItemRadio
              name="availability"
              checked={availability.children === 'Neutral'}
              value="neutral"
              {...menu}
              onClick={() => onClick('Neutral')}
              variant="default"
            >
              <StatusMenuItemChild variant="ConnectivityNeutral">{ConnectivityObject.Neutral.children}</StatusMenuItemChild>
            </StatusMenuItemRadio>
            <StatusMenuItemRadio
              name="availability"
              checked={availability.children === 'Offline'}
              value="offline"
              {...menu}
              onClick={() => onClick('Offline')}
              variant="default"
            >
              <StatusMenuItemChild variant="ConnectivityOffline">{ConnectivityObject.Offline.children}</StatusMenuItemChild>
            </StatusMenuItemRadio>
          </StatusMenu>
        </TopbarActions>
        <TopbarActions justify="end">
          <MenuButton {...supportMenu} variant="secondary_icon" size="reset">
            <SupportIcon decorative={false} title="Support" />
          </MenuButton>
          <Menu {...supportMenu} aria-label="Preferences">
            <MenuItem {...supportMenu}>Support Center</MenuItem>
            <MenuItem {...supportMenu} href="http://www.google.com">
              Developer Docs
            </MenuItem>
          </Menu>
          <ProductSwitcherButton {...productSwitcher} i18nButtonLabel="Switch products" />
          <ProductSwitcher {...productSwitcher} aria-label="Available products">
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="twilio"
              checked={product === 'twilio'}
              onChange={(e) => {
                setProduct('twilio');
              }}
              productName="Twilio"
              productStrapline="SMS, Voice & Video"
              productIcon={<LogoTwilioIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="segment"
              checked={product === 'segment'}
              onChange={(e) => {
                setProduct('segment');
              }}
              productName="Segment"
              productStrapline="Customer data platform"
              productIcon={<ProductSegmentIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="flex"
              checked={product === 'flex'}
              onChange={(e) => {
                setProduct('flex');
              }}
              productName="Flex"
              productStrapline="Cloud-based contact center"
              productIcon={<ProductFlexIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="sendgrid"
              checked={product === 'sendgrid'}
              onChange={(e) => {
                setProduct('sendgrid');
              }}
              productName="SendGrid"
              productStrapline="Email delivery and API"
              productIcon={<ProductEmailAPIIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="admin"
              checked={product === 'admin'}
              onChange={(e) => {
                setProduct('admin');
              }}
              productName="Console Admin"
              productStrapline="Admin center"
              productIcon={<LogoTwilioIcon decorative />}
            />
          </ProductSwitcher>
          <UserDialogContainer name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
            <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
              <UserDialogUserInfo>
                <UserDialogUserName>Name</UserDialogUserName>
                <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
              </UserDialogUserInfo>
              <UserDialogList {...userDialogList} aria-label="User menu actions">
                <UserDialogListItem {...userDialogList}>
                  <UserIcon decorative />
                  User settings
                </UserDialogListItem>
                <UserDialogSeparator />
                <UserDialogListItem {...userDialogList}>
                  <ThemeIcon decorative />
                  <Box width="100%" display="flex" justifyContent="space-between">
                    Theme
                    <Badge variant="decorative10" as="span" size="small">
                      Light
                    </Badge>
                  </Box>
                </UserDialogListItem>
                <UserDialogListItem {...userDialogList}>
                  <TranslationIcon decorative />
                  <Box width="100%" display="flex" justifyContent="space-between">
                    Language
                    <Badge variant="decorative10" as="span" size="small">
                      EN
                    </Badge>
                  </Box>
                </UserDialogListItem>
                <UserDialogSeparator />
                <UserDialogListItem {...userDialogList} href="https://www.google.com">
                  <LogOutIcon decorative />
                  Log out
                </UserDialogListItem>
              </UserDialogList>
            </UserDialog>
          </UserDialogContainer>
        </TopbarActions>
      </Topbar>
  )
}
render(
    <TopbarExample/>
)
`.trim();

export const flexTopbarExample = `
const TopbarExample = () => {
  const ConnectivityObject = {
    Available: {
      variant: 'ConnectivityAvailable',
      children: 'Available',
    },
    Busy: {
      variant: 'ConnectivityBusy',
      children: 'Busy',
    },
    Unavailable: {
      variant: 'ConnectivityUnavailable',
      children: 'Unavailable',
    },
    Neutral: {
      variant: 'ConnectivityNeutral',
      children: 'Neutral',
    },
    Offline: {
      variant: 'ConnectivityOffline',
      children: 'Offline',
    },
  };
  const [availability, setConnectivity] = React.useState(
    ConnectivityObject.Available
  );
  const menu = useStatusMenuState();
  const supportMenu = useMenuState();
  const onClick = (status) => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  const productSwitcher = useProductSwitcherState();
  const [product, setProduct] = React.useState('twilio');
  const userDialogList = useUserDialogListState();

  return (
    <Box minWidth="size70">
      <Topbar>
        <TopbarActions justify="start">
          <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={availability.variant}>
            {availability.children} | 3h 50min
          </StatusMenuBadge>
          <StatusMenu {...menu} aria-label="Preferences">
            <StatusMenuItemRadio
              name="availability"
              checked={availability.children === 'Available'}
              value="available"
              {...menu}
              onClick={() => onClick('Available')}
              variant="default"
            >
              <StatusMenuItemChild variant="ConnectivityAvailable">
                {ConnectivityObject.Available.children}
              </StatusMenuItemChild>
            </StatusMenuItemRadio>
            <StatusMenuItemRadio
              name="availability"
              checked={availability.children === 'Busy'}
              value="busy"
              {...menu}
              onClick={() => onClick('Busy')}
              variant="default"
            >
              <StatusMenuItemChild variant="ConnectivityBusy">{ConnectivityObject.Busy.children}</StatusMenuItemChild>
            </StatusMenuItemRadio>
            <StatusMenuItemRadio
              name="availability"
              checked={availability.children === 'Unavailable'}
              value="unavailable"
              {...menu}
              onClick={() => onClick('Unavailable')}
              variant="default"
            >
              <StatusMenuItemChild variant="ConnectivityUnavailable">
                {ConnectivityObject.Unavailable.children}
              </StatusMenuItemChild>
            </StatusMenuItemRadio>
            <StatusMenuItemRadio
              name="availability"
              checked={availability.children === 'Neutral'}
              value="neutral"
              {...menu}
              onClick={() => onClick('Neutral')}
              variant="default"
            >
              <StatusMenuItemChild variant="ConnectivityNeutral">{ConnectivityObject.Neutral.children}</StatusMenuItemChild>
            </StatusMenuItemRadio>
            <StatusMenuItemRadio
              name="availability"
              checked={availability.children === 'Offline'}
              value="offline"
              {...menu}
              onClick={() => onClick('Offline')}
              variant="default"
            >
              <StatusMenuItemChild variant="ConnectivityOffline">{ConnectivityObject.Offline.children}</StatusMenuItemChild>
            </StatusMenuItemRadio>
          </StatusMenu>
        </TopbarActions>
        <TopbarActions justify="end">
          <MenuButton {...supportMenu} variant="secondary_icon" size="reset">
            <SupportIcon decorative={false} title="Support" />
          </MenuButton>
          <Menu {...supportMenu} aria-label="Preferences">
            <MenuItem {...supportMenu}>Support Center</MenuItem>
            <MenuItem {...supportMenu} href="http://www.google.com">
              Developer Docs
            </MenuItem>
          </Menu>
          <Button variant="secondary_icon" size="reset">
            <ProductDebuggerIcon decorative={false} title="Debugger" />
          </Button>
          <ProductSwitcherButton {...productSwitcher} i18nButtonLabel="Switch products" />
          <ProductSwitcher {...productSwitcher} aria-label="Avaiable accounts">
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="twilio"
              checked={product === 'twilio'}
              onChange={(e) => {
                setProduct('twilio');
              }}
              productName="Twilio"
              productStrapline="SMS, Voice & Video"
              productIcon={<LogoTwilioIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="segment"
              checked={product === 'segment'}
              onChange={(e) => {
                setProduct('segment');
              }}
              productName="Segment"
              productStrapline="Customer data platform"
              productIcon={<ProductSegmentIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="flex"
              checked={product === 'flex'}
              onChange={(e) => {
                setProduct('flex');
              }}
              productName="Flex"
              productStrapline="Cloud-based contact center"
              productIcon={<ProductFlexIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="sendgrid"
              checked={product === 'sendgrid'}
              onChange={(e) => {
                setProduct('sendgrid');
              }}
              productName="SendGrid"
              productStrapline="Email delivery and API"
              productIcon={<ProductEmailAPIIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="admin"
              checked={product === 'admin'}
              onChange={(e) => {
                setProduct('admin');
              }}
              productName="Console Admin"
              productStrapline="Admin center"
              productIcon={<LogoTwilioIcon decorative />}
            />
          </ProductSwitcher>
          <UserDialogContainer name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
            <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
              <UserDialogUserInfo>
                <UserDialogUserName>Name</UserDialogUserName>
                <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
              </UserDialogUserInfo>
              <UserDialogList {...userDialogList} aria-label="User menu actions">
                <UserDialogListItem {...userDialogList}>
                  <UserIcon decorative />
                  User settings
                </UserDialogListItem>
                <UserDialogSeparator />
                <UserDialogListItem {...userDialogList}>
                  <ThemeIcon decorative />
                  <Box width="100%" display="flex" justifyContent="space-between">
                    Theme
                    <Badge variant="decorative10" as="span" size="small">
                      Light
                    </Badge>
                  </Box>
                </UserDialogListItem>
                <UserDialogListItem {...userDialogList}>
                  <TranslationIcon decorative />
                  <Box width="100%" display="flex" justifyContent="space-between">
                    Language
                    <Badge variant="decorative10" as="span" size="small">
                      EN
                    </Badge>
                  </Box>
                </UserDialogListItem>
                <UserDialogSeparator />
                <UserDialogListItem {...userDialogList} href="https://www.google.com">
                  <LogOutIcon decorative />
                  Log out
                </UserDialogListItem>
              </UserDialogList>
            </UserDialog>
          </UserDialogContainer>
        </TopbarActions>
      </Topbar>
    </Box>
  )
}
render(
    <TopbarExample/>
)
`.trim();

export const consoleTopbarExample = `
const TopbarExample = () => {
  const accountSwitcher = useAccountSwitcherState();
  const [selectedAccount, setSelectedAccount] = React.useState('Owl Telehealth');
  const supportMenu = useMenuState();
  const billingMenu = useMenuState();
  const menu = useMenuState();
  const onClick = (status) => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  const productSwitcher = useProductSwitcherState();
  const [product, setProduct] = React.useState('twilio');
  const userDialogList = useUserDialogListState();

  return (
    <Box minWidth="size100">
      <Topbar>
        <TopbarActions justify="start">
          <AccountSwitcherBadge {...accountSwitcher} i18nButtonLabel="Switch accounts">
            Owl Telehealth
          </AccountSwitcherBadge>
          <AccountSwitcher {...accountSwitcher} aria-label="Avaiable accounts">
            <AccountSwitcherGroup label="Recent accounts">
              <AccountSwitcherItemRadio
                name="recent_accounts"
                value="Owl Telehealth"
                checked={selectedAccount === 'Owl Telehealth'}
                onChange={() => setSelectedAccount('Owl Telehealth')}
                {...accountSwitcher}
              >
                Owl Telehealth
              </AccountSwitcherItemRadio>
              <AccountSwitcherItemRadio
                name="recent_accounts"
                value="Owl Health Demo"
                checked={selectedAccount === 'Owl Health Demo'}
                onChange={() => setSelectedAccount('Owl Health Demo')}
                {...accountSwitcher}
              >
                Owl Health Demo
              </AccountSwitcherItemRadio>
              <AccountSwitcherItemRadio
                name="recent_accounts"
                value="Owl Subway"
                checked={selectedAccount === 'Owl Subway'}
                onChange={() => setSelectedAccount('Owl Subway')}
                {...accountSwitcher}
              >
                Owl Subway
              </AccountSwitcherItemRadio>
            </AccountSwitcherGroup>
            <AccountSwitcherSeparator />
            <AccountSwitcherItem {...accountSwitcher} href="#">
              Account settings
            </AccountSwitcherItem>
            <AccountSwitcherSeparator />
            <AccountSwitcherItem {...accountSwitcher} href="#">
              View all accounts
            </AccountSwitcherItem>
            <AccountSwitcherItem {...accountSwitcher} href="#">
              View all subaccounts
            </AccountSwitcherItem>
            <AccountSwitcherSeparator />
            <AccountSwitcherItem {...accountSwitcher} href="#">
              Admin Center
            </AccountSwitcherItem>
          </AccountSwitcher>
          <Badge as="span" variant="decorative30">
            Trial: $15.99 <Anchor href="#">Upgrade</Anchor>
          </Badge>
        </TopbarActions>
        <TopbarActions justify="end">
          <Combobox
            placeholder="Search"
            autocomplete
            insertBefore={<SearchIcon color="colorTextIcon" decorative />}
            labelText="Search application"
            hideVisibleLabel
            items={['one', 'two']}
          />
          <MenuButton {...menu} variant="reset" size="reset">
            Account <ChevronDownIcon decorative />
          </MenuButton>
          <Menu {...menu} aria-label="Preferences">
            <MenuGroup label="Manage account">
              <MenuItem {...menu}>General settings</MenuItem>
              <MenuItem {...menu}>Manage users</MenuItem>
              <MenuItem {...menu}>Sub accounts</MenuItem>
              <MenuItem {...menu}>Notification preferences</MenuItem>
              <MenuItem {...menu}>Audit events</MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup label="Keys &amp; Credentials">
              <MenuItem {...menu}>API keys & tokens</MenuItem>
              <MenuItem {...menu}>Credentials</MenuItem>
              <MenuItem {...menu}>Connected apps</MenuItem>
            </MenuGroup>
          </Menu>
          <MenuButton {...billingMenu} variant="reset" size="reset">
            Billing <ChevronDownIcon decorative />
          </MenuButton>
          <Menu {...billingMenu} aria-label="Preferences">
            <MenuGroup label="Manage Billing">
              <MenuItem {...billingMenu}>Billing overview</MenuItem>
              <MenuItem {...billingMenu}>Payment history</MenuItem>
              <MenuItem {...billingMenu}>Recurring items</MenuItem>
              <MenuItem {...billingMenu}>Payment settings</MenuItem>
              <MenuItem {...billingMenu}>Pricing</MenuItem>
              <MenuItem {...billingMenu}>Preferences</MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup label="Usage">
              <MenuItem {...menu}>Usage summary</MenuItem>
              <MenuItem {...menu}>Usage bvy subaccount</MenuItem>
              <MenuItem {...menu}>Trigger</MenuItem>
              <MenuItem {...menu}>Authorized apps</MenuItem>
            </MenuGroup>
          </Menu>
          <MenuButton {...supportMenu} variant="secondary_icon" size="reset">
            <SupportIcon decorative={false} title="Support" />
          </MenuButton>
          <Menu {...supportMenu} aria-label="Preferences">
            <MenuItem {...supportMenu}>Support Center</MenuItem>
            <MenuItem {...supportMenu} href="http://www.google.com">
              Developer Docs
            </MenuItem>
          </Menu>
          <ProductSwitcherButton {...productSwitcher} i18nButtonLabel="Switch products" />
          <ProductSwitcher {...productSwitcher} aria-label="Available products">
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="twilio"
              checked={product === 'twilio'}
              onChange={(e) => {
                setProduct('twilio');
              }}
              productName="Twilio"
              productStrapline="SMS, Voice & Video"
              productIcon={<LogoTwilioIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="segment"
              checked={product === 'segment'}
              onChange={(e) => {
                setProduct('segment');
              }}
              productName="Segment"
              productStrapline="Customer data platform"
              productIcon={<ProductSegmentIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="flex"
              checked={product === 'flex'}
              onChange={(e) => {
                setProduct('flex');
              }}
              productName="Flex"
              productStrapline="Cloud-based contact center"
              productIcon={<ProductFlexIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="sendgrid"
              checked={product === 'sendgrid'}
              onChange={(e) => {
                setProduct('sendgrid');
              }}
              productName="SendGrid"
              productStrapline="Email delivery and API"
              productIcon={<ProductEmailAPIIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="admin"
              checked={product === 'admin'}
              onChange={(e) => {
                setProduct('admin');
              }}
              productName="Console Admin"
              productStrapline="Admin center"
              productIcon={<LogoTwilioIcon decorative />}
            />
          </ProductSwitcher>
          <UserDialogContainer name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
            <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
              <UserDialogUserInfo>
                <UserDialogUserName>Name</UserDialogUserName>
                <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
              </UserDialogUserInfo>
              <UserDialogList {...userDialogList} aria-label="User menu actions">
                <UserDialogListItem {...userDialogList}>
                  <UserIcon decorative />
                  User settings
                </UserDialogListItem>
                <UserDialogSeparator />
                <UserDialogListItem {...userDialogList}>
                  <ThemeIcon decorative />
                  <Box width="100%" display="flex" justifyContent="space-between">
                    Theme
                    <Badge variant="decorative10" as="span" size="small">
                      Light
                    </Badge>
                  </Box>
                </UserDialogListItem>
                <UserDialogListItem {...userDialogList}>
                  <TranslationIcon decorative />
                  <Box width="100%" display="flex" justifyContent="space-between">
                    Language
                    <Badge variant="decorative10" as="span" size="small">
                      EN
                    </Badge>
                  </Box>
                </UserDialogListItem>
                <UserDialogSeparator />
                <UserDialogListItem {...userDialogList} href="https://www.google.com">
                  <LogOutIcon decorative />
                  Log out
                </UserDialogListItem>
              </UserDialogList>
            </UserDialog>
          </UserDialogContainer>
        </TopbarActions>
      </Topbar>
    </Box>
  )
}
render(
    <TopbarExample/>
)
`.trim();

export const segmentTopbarExample = `
const TopbarExample = () => {
  const accountSwitcher = useAccountSwitcherState();
  const [selectedAccount, setSelectedAccount] = React.useState('My Workspace');
  const supportMenu = useMenuState();
  const billingMenu = useMenuState();
  const menu = useMenuState();
  const onClick = (status) => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  const productSwitcher = useProductSwitcherState();
  const [product, setProduct] = React.useState('twilio');
  const userDialogList = useUserDialogListState();

  return (
    <Box minWidth="size80">
      <Topbar>
        <TopbarActions justify="start">
          <AccountSwitcherBadge {...accountSwitcher} i18nButtonLabel="Switch accounts">
            Workspace name
          </AccountSwitcherBadge>
          <AccountSwitcher {...accountSwitcher} aria-label="Avaiable accounts">
            <AccountSwitcherGroup label="Recent workspaces">
              <AccountSwitcherItemRadio
                name="recent_workspace"
                value="My Workspace"
                checked={selectedAccount === 'My Workspace'}
                onChange={() => setSelectedAccount('My Workspace')}
                {...accountSwitcher}
              >
                My Workspace
              </AccountSwitcherItemRadio>
              <AccountSwitcherItemRadio
                name="recent_workspace"
                value="Second workspace"
                checked={selectedAccount === 'Second workspace'}
                onChange={() => setSelectedAccount('Second workspace')}
                {...accountSwitcher}
              >
                Second workspace
              </AccountSwitcherItemRadio>
              <AccountSwitcherItemRadio
                name="recent_workspace"
                value="Third workspace"
                checked={selectedAccount === 'Third workspace'}
                onChange={() => setSelectedAccount('Third workspace')}
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
          <Badge variant="decorative30" as="button" onClick={() => {}}>
            Upgrade
          </Badge>
        </TopbarActions>
        <TopbarActions justify="end">
          <Combobox
            placeholder="Search"
            autocomplete
            insertBefore={<SearchIcon color="colorTextIcon" decorative />}
            labelText="Search application"
            hideVisibleLabel
            items={['one', 'two']}
          />
          <MenuButton {...supportMenu} variant="secondary_icon" size="reset">
            <SupportIcon decorative={false} title="Support" />
          </MenuButton>
          <Menu {...supportMenu} aria-label="Preferences">
            <MenuItem {...supportMenu}>Support Center</MenuItem>
            <MenuItem {...supportMenu} href="http://www.google.com">
              Developer Docs
            </MenuItem>
          </Menu>
          <PopoverContainer>
            <PopoverButton variant="secondary_icon" size="reset">
              <NotificationIcon decorative={false} title="Notifications" />
            </PopoverButton>
            <Popover aria-label="Notifications">Notifications</Popover>
          </PopoverContainer>
          <ProductSwitcherButton {...productSwitcher} i18nButtonLabel="Switch products" />
          <ProductSwitcher {...productSwitcher} aria-label="Available products">
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="twilio"
              checked={product === 'twilio'}
              onChange={(e) => {
                setProduct('twilio');
              }}
              productName="Twilio"
              productStrapline="SMS, Voice & Video"
              productIcon={<LogoTwilioIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="segment"
              checked={product === 'segment'}
              onChange={(e) => {
                setProduct('segment');
              }}
              productName="Segment"
              productStrapline="Customer data platform"
              productIcon={<ProductSegmentIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="flex"
              checked={product === 'flex'}
              onChange={(e) => {
                setProduct('flex');
              }}
              productName="Flex"
              productStrapline="Cloud-based contact center"
              productIcon={<ProductFlexIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="sendgrid"
              checked={product === 'sendgrid'}
              onChange={(e) => {
                setProduct('sendgrid');
              }}
              productName="SendGrid"
              productStrapline="Email delivery and API"
              productIcon={<ProductEmailAPIIcon decorative />}
            />
            <ProductSwitcherItem
              {...productSwitcher}
              name="product"
              value="admin"
              checked={product === 'admin'}
              onChange={(e) => {
                setProduct('admin');
              }}
              productName="Console Admin"
              productStrapline="Admin center"
              productIcon={<LogoTwilioIcon decorative />}
            />
          </ProductSwitcher>
          <UserDialogContainer name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
            <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
              <UserDialogUserInfo>
                <UserDialogUserName>Name</UserDialogUserName>
                <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
              </UserDialogUserInfo>
              <UserDialogList {...userDialogList} aria-label="User menu actions">
                <UserDialogListItem {...userDialogList}>
                  <UserIcon decorative />
                  User settings
                </UserDialogListItem>
                <UserDialogSeparator />
                <UserDialogListItem {...userDialogList}>
                  <ThemeIcon decorative />
                  <Box width="100%" display="flex" justifyContent="space-between">
                    Theme
                    <Badge variant="decorative10" as="span" size="small">
                      Light
                    </Badge>
                  </Box>
                </UserDialogListItem>
                <UserDialogListItem {...userDialogList}>
                  <TranslationIcon decorative />
                  <Box width="100%" display="flex" justifyContent="space-between">
                    Language
                    <Badge variant="decorative10" as="span" size="small">
                      EN
                    </Badge>
                  </Box>
                </UserDialogListItem>
                <UserDialogSeparator />
                <UserDialogListItem {...userDialogList} href="https://www.google.com">
                  <LogOutIcon decorative />
                  Log out
                </UserDialogListItem>
              </UserDialogList>
            </UserDialog>
          </UserDialogContainer>
        </TopbarActions>
      </Topbar>
    </Box>
  )
}
render(
    <TopbarExample/>
)
`.trim();
