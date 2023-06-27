export const defaultUserDialogExample = `
const UserDialogExample = () => {
    const userDialog = useUserDialogState()
    const userDialogList = useUserDialogListState()
    const [selected, setSelected] = React.useState()
    const id1 = useUID();
    const id2 = useUID();
    const id3 = useUID();
    return (
        <UserDialogContainer {...userDialog} name="User Name" icon={UserIcon} baseId="i-am-user-dialog">
          <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
            <UserDialogUserInfo>
              <UserDialogUserName>Name</UserDialogUserName>
              <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
            </UserDialogUserInfo>
            <UserDialogList {...userDialogList} data-testid="user-dialog-listbox">
              <UserDialogListItem
                {...userDialogList}
                key={id1}
                selected={selected === id1}
                onSelect={() => setSelected(id1)}
                data-testid="FIRST_ITEM"
              >
                <UserIcon decorative />
                Item
              </UserDialogListItem>
              <UserDialogSeparator />
              <UserDialogListItem
                {...userDialogList}
                key={id2}
                selected={selected === id2}
                onSelect={() => setSelected(id2)}
                data-testid="SECOND_ITEM"
                href="https://www.google.com"
              >
                <UserIcon decorative />
                Item
              </UserDialogListItem>
              <UserDialogSeparator />
              <UserDialogListItem
                {...userDialogList}
                key={id3}
                selected={selected === id3}
                onSelect={() => setSelected(id3)}
                data-testid="THIRD_ITEM"
              >
                <ThemeIcon decorative />
                <Box width="100%" display="flex" justifyContent="space-between">
                  Theme
                  <Badge variant="decorative10" as="span" size="small">
                    Light
                  </Badge>
                </Box>
              </UserDialogListItem>
              <UserDialogSeparator />
              <UserDialogListItem {...userDialogList} key="4" selected={selected === '4'} onSelect={() => setSelected('4')}>
                <TranslationIcon decorative />
                <Box width="100%" display="flex" justifyContent="space-between">
                  Language
                  <Badge variant="decorative10" as="span" size="small">
                    EN
                  </Badge>
                </Box>
              </UserDialogListItem>
            </UserDialogList>
          </UserDialog>
        </UserDialogContainer>
    );
}

render(
    <UserDialogExample/>
)
`.trim();
