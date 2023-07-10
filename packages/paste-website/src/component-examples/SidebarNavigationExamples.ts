export const navigationActions = `
const SidebarNavigationExample = () => {
  const menu = useMenuState();
  const menuLookup = useMenuState();
  return (
    <Box backgroundColor="colorBackgroundInverse">
      <SidebarBody>
        <SidebarNavigation aria-label="Main navigation" hierarchical hideItemsOnCollapse>
          <SidebarNavigationDisclosure>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading icon={<ProductMessagingIcon decorative />} selected>
                Messaging
              </SidebarNavigationDisclosureHeading>
              <MenuButton {...menu} variant="inverse_link" size="icon_small">
                <MoreIcon decorative={false} title="More" />
              </MenuButton>
              <Menu {...menu} aria-label="Preferences">
                <MenuItem {...menu} onClick={()=>{}}>
                  Unpin from sidebar
                </MenuItem>
                <MenuItem {...menu} href="http://www.google.com">
                  Go to docs
                </MenuItem>
              </Menu>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
          <SidebarNavigationDisclosure>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading icon={<ProductLookupIcon decorative />}>
                Lookup
              </SidebarNavigationDisclosureHeading>
              <SidebarBetaBadge as="button" onClick={()=>{}}>Beta</SidebarBetaBadge>
              <MenuButton {...menuLookup} variant="inverse_link" size="icon_small">
                <MoreIcon decorative={false} title="More" />
              </MenuButton>
              <Menu {...menuLookup} aria-label="Preferences">
                <MenuItem {...menuLookup} onClick={()=>{}}>
                  Unpin from sidebar
                </MenuItem>
                <MenuItem {...menuLookup} href="http://www.google.com">
                  Go to docs
                </MenuItem>
              </Menu>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="https://google.com">Lookup a phone number</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
        </SidebarNavigation>
      </SidebarBody>
    </Box>
  )
}
render(
  <SidebarNavigationExample/>
)
`.trim();

export const navigationStateHook = `
const SidebarNavigationStateHookExample  = () => {
  const messagingDisclosure = useSidebarNavigationDisclosureState();
  const lookupDisclosure = useSidebarNavigationDisclosureState();
  return (
    <>
    <Box display="flex" columnGap="space20" alignItems="center" paddingBottom="space60">
      <Button variant="secondary" onClick={messagingDisclosure.toggle}>Toggle messaging</Button>
      <Button variant="secondary" onClick={lookupDisclosure.toggle}>Toggle lookup</Button>
    </Box>
    <Box backgroundColor="colorBackgroundInverse">
      <SidebarBody>
        <SidebarNavigation aria-label="Main navigation" hierarchical hideItemsOnCollapse>
          <SidebarNavigationDisclosure state={messagingDisclosure}>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading icon={<ProductMessagingIcon decorative />} selected>
                Messaging
              </SidebarNavigationDisclosureHeading>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="https://google.com">Overview</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
          <SidebarNavigationDisclosure state={lookupDisclosure}>
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading icon={<ProductLookupIcon decorative />}>
                Lookup
              </SidebarNavigationDisclosureHeading>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent>
              <SidebarNavigationItem href="https://google.com">Lookup a phone number</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
        </SidebarNavigation>
      </SidebarBody>
    </Box>
    </>
  )
}
render(
  <SidebarNavigationStateHookExample/>
)
`.trim();
