export const defaultTopbarExample = `
const TopbarExample = () => {
  const [account, setAccount] = React.useState('Account name');
  const menu = useMenuState();
  const onClick = (newAccount) => {
    menu.hide();
    setAccount(newAccount);
  };
  const productSwitcher = useProductSwitcherState();
  const [product, setProduct] = React.useState('twilio');
  return (
    <Topbar>
      <Box display="flex" columnGap="space50">
        <MenuBadge {...menu} i18nButtonLabel="Change account" variant="decorative10">
          {account}
        </MenuBadge>
        <Menu {...menu} aria-label="Accounts">
          <MenuItem {...menu} onClick={()=>onClick('Account one')}>
            Account one
          </MenuItem>
          <MenuItem {...menu} onClick={()=>onClick('Account two')}>
            Account two
          </MenuItem>
          <MenuItem {...menu} onClick={()=>onClick('Account three')}>
            Account three
          </MenuItem>
        </Menu>
        <Badge variant="subaccount" size="small">Subaccount</Badge>
        <Box flex-shrink="4" paddingX="space150">
          <Input placeholder="Search" insertBefore={<SearchIcon decorative/>}/>
        </Box>
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
      </Box>
    </Topbar>
  )
}
render(
  <TopbarExample/>
)
`.trim();

export const emptyTopbarExample = `
const TopbarExample = () => {
    return (
        <Topbar>I am an empty Topbar</Topbar>
    )
}
render(
    <TopbarExample/>
)
`.trim();

export const defaultAccountSwitcherExample = `
const AccountSwitcher = () => {
  const [account, setAccount] = React.useState('Account name');
  const menu = useMenuState();
  const onClick = (newAccount) => {
    menu.hide();
    setAccount(newAccount);
  };
  return (
    <>
        <MenuBadge {...menu} i18nButtonLabel="Change account" variant="decorative10">
            {account}
        </MenuBadge>
        <Menu {...menu} aria-label="Accounts">
            <MenuItem {...menu} onClick={()=>onClick('Account one')}>
            Account one
        </MenuItem>
        <MenuItem {...menu} onClick={()=>onClick('Account two')}>
          Account two
        </MenuItem>
        <MenuItem {...menu} onClick={()=>onClick('Account three')}>
          Account three
        </MenuItem>
      </Menu>
    </>
  );
};
render(
  <AccountSwitcher />
)
`.trim();

export const defaultProductSwitcherExample = `
const ProductSwitcherMenu = () => {
    const productSwitcher = useProductSwitcherState();
    const [product, setProduct] = React.useState('twilio');
    return (
      <>
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
      </>
    );
};
  render(
    <ProductSwitcherMenu />
  )
  `.trim();
