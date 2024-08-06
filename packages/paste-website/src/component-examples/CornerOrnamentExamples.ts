export const featuredExample = `
const FeaturedExample = () => {
  return (
    <Stack orientation="horizontal" spacing="space70">
        <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80" position="top_end">
            <CornerOrnamentBase>
                <CartIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="shopping cart" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>notification value is</ScreenReaderOnly>
                <Badge as="span" variant="notification_counter" size="small">
                    100
                </Badge>
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80">
            <CornerOrnamentBase>
                <ProductAlarmsIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="shopping cart" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>You have a notification</ScreenReaderOnly>
                <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon40" />
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80">
            <CornerOrnamentBase>
                <Avatar
                    size="sizeIcon80"
                    name="Tri O'Hara"
                    src="/images/avatars/avatar4.png"
                />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>incoming call</ScreenReaderOnly>
                <CallIncomingIcon color="colorTextIcon" decorative size="sizeIcon40" />
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon80">
            <CornerOrnamentBase>
                <DataTableIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="data table" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <Avatar
                    size="sizeIcon30"
                    name="Tri O'Hara"
                    src="/images/avatars/avatar4.png"
                />           
            </CornerOrnament>
        </CornerOrnamentContainer>
    </Stack>
  );
};

render(
  <FeaturedExample />
)`.trim();

export const badgeCornerOrnamentExample = `
const BadgeCornerOrnamentExample = () => {
  return (
    <Stack orientation="horizontal" spacing="space70">
        <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
            <CornerOrnamentBase>
                <CartIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="shopping cart" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>notification value is</ScreenReaderOnly>
                <Badge as="span" variant="notification_counter" size="small">
                    100
                </Badge>
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
            <CornerOrnamentBase>
                <Avatar
                    size="sizeIcon80"
                    name="Tri O'Hara"
                    src="/images/avatars/avatar4.png"
                />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>notification value is</ScreenReaderOnly>
                <Badge as="span" variant="notification_counter" size="small">
                    100
                </Badge>
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80" position="top_end">
            <CornerOrnamentBase>
                <CartIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="shopping cart" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>notification value is</ScreenReaderOnly>
                <Badge as="span" variant="notification_counter" size="small">
                    100
                </Badge>
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80" position="top_end">
            <CornerOrnamentBase>
                <Avatar
                    size="sizeIcon80"
                    name="Tri O'Hara"
                    src="/images/avatars/avatar4.png"
                />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>notification value is</ScreenReaderOnly>
                <Badge as="span" variant="notification_counter" size="small">
                    100
                </Badge>
            </CornerOrnament>
        </CornerOrnamentContainer>
    </Stack>
  );
};

render(
  <BadgeCornerOrnamentExample />
)`.trim();

export const badgeOverflowCornerOrnamentExample = `
const BadgeOverflowCornerOrnamentExample = () => {
  return (
    <Stack orientation="horizontal" spacing="space70">
        <CornerOrnamentContainer cornerOrnamentType="badge" size="sizeIcon80">
            <CornerOrnamentBase>
                <CartIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="shopping cart" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>notification value is</ScreenReaderOnly>
                <Badge as="span" variant="notification_counter" size="small">
                    9+
                </Badge>
            </CornerOrnament>
        </CornerOrnamentContainer>
        <Button variant="secondary">
            <ProductAlarmsIcon decorative={true} size="sizeIcon20" />
            Notifications
            <Badge as="span" variant="notification_counter" size="small">
                10
            </Badge>
        </Button>
        <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80">
            <CornerOrnamentBase>
                <ProductAlarmsIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="shopping cart" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>You have a notification</ScreenReaderOnly>
                <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon40" />
            </CornerOrnament>
        </CornerOrnamentContainer>
    </Stack>
  );
};

render(
  <BadgeOverflowCornerOrnamentExample />
)`.trim();

export const iconCornerOrnamentExample = `
const IconCornerOrnamentExample = () => {
  return (
    <Stack orientation="horizontal" spacing="space70">
        <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80">
            <CornerOrnamentBase>
                <Avatar
                    size="sizeIcon80"
                    name="Tri O'Hara"
                    src="/images/avatars/avatar4.png"
                />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>incoming call</ScreenReaderOnly>
                <CallIncomingIcon color="colorTextIcon" decorative size="sizeIcon40" />
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80">
            <CornerOrnamentBase>
                <ProductAlarmsIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="shopping cart" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>You have a notification</ScreenReaderOnly>
                <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon40" />
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80" position="top_end">
            <CornerOrnamentBase>
                <Avatar
                    size="sizeIcon80"
                    name="Tri O'Hara"
                    src="/images/avatars/avatar4.png"
                />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>incoming call</ScreenReaderOnly>
                <CallIncomingIcon color="colorTextIcon" decorative size="sizeIcon40" />
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="icon" size="sizeIcon80" position="top_end">
            <CornerOrnamentBase>
                <ProductAlarmsIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="shopping cart" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <ScreenReaderOnly>You have a notification</ScreenReaderOnly>
                <NotificationOrnamentIcon color="colorTextIconNotification" decorative size="sizeIcon40" />
            </CornerOrnament>
        </CornerOrnamentContainer>
    </Stack>
  );
};

render(
  <IconCornerOrnamentExample />
)`.trim();

export const avatarCornerOrnamentExample = `
const IconCornerOrnamentExample = () => {
  return (
    <Stack orientation="horizontal" spacing="space70">
        <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon80">
            <CornerOrnamentBase>
                <Avatar
                    size="sizeIcon80"
                    name="Tri O'Hara"
                    src="/images/avatars/avatar4.png"
                />
            </CornerOrnamentBase>
            <CornerOrnament>
                <Avatar
                    size="sizeIcon30"
                    name="Twilio"
                    src="/images/avatars/avatar5.png"
                />
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon80">
            <CornerOrnamentBase>
                <DataTableIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="shopping cart" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <Avatar
                    size="sizeIcon30"
                    name="Tri O'Hara"
                    src="/images/avatars/avatar4.png"
                />
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon80" position="top_end">
            <CornerOrnamentBase>
                <Avatar
                    size="sizeIcon80"
                    name="Tri O'Hara"
                    src="/images/avatars/avatar4.png"
                />
            </CornerOrnamentBase>
            <CornerOrnament>
                <Avatar
                    size="sizeIcon30"
                    name="Twilio"
                    src="/images/avatars/avatar5.png"
                />
            </CornerOrnament>
        </CornerOrnamentContainer>
        <CornerOrnamentContainer cornerOrnamentType="avatar" size="sizeIcon80" position="top_end">
            <CornerOrnamentBase>
                <DataTableIcon color="colorTextIcon" size="sizeIcon80" decorative={false} title="shopping cart" />
            </CornerOrnamentBase>
            <CornerOrnament>
                <Avatar
                    size="sizeIcon30"
                    name="Tri O'Hara"
                    src="/images/avatars/avatar4.png"
                />
            </CornerOrnament>
        </CornerOrnamentContainer>
    </Stack>
  );
};

render(
  <IconCornerOrnamentExample />
)`.trim();
