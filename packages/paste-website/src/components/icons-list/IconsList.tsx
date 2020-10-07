import * as React from 'react';
import {useUID, useUIDSeed} from 'react-uid';
import {styled} from '@twilio-paste/styling-library';
import {Composite, useCompositeState} from '@twilio-paste/reakit-library';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {FormLabel, FormInput} from '@twilio-paste/form';
import {Heading} from '@twilio-paste/heading';
import {Card} from '@twilio-paste/card';
import {Paragraph} from '@twilio-paste/paragraph';
import {UnorderedList, ListItem} from '@twilio-paste/list';
import {Anchor} from '@twilio-paste/anchor';
import {IconObject, IconComponent, IconsListProps, GroupedList} from './types';
import {IconCard} from './IconCard';
import {SiteLink} from '../SiteLink';
import {IconListItem} from './IconListItem';
import {STICKY_COLUMN_OFFSET} from '../../constants';

const iconsJson = require('@twilio-paste/icons/json/icons.json');

const IconComponents: IconComponent = iconsJson.reduce((icons: IconComponent, {name}: IconObject) => {
  return {
    ...icons,
    // eslint-disable-next-line import/no-dynamic-require,global-require
    [`${name}`]: require(`@twilio-paste/icons/esm/${name}`)[name],
  };
}, {});

const getGroupedList = (icons: IconsListProps['icons']): GroupedList =>
  icons.reduce(
    (prev: GroupedList, current): GroupedList => {
      const Icon = {...current, Component: IconComponents[current.name]};
      if (current.name.startsWith('Product') || current.name.startsWith('Logo')) {
        return {
          logos: [...prev.logos, Icon],
          ui: [...prev.ui],
        };
      }
      return {
        logos: [...prev.logos],
        ui: [...prev.ui, Icon],
      };
    },
    {logos: [], ui: []}
  );

const getFirstIcon = (iconsList: GroupedList): IconObject | null => {
  if (iconsList.ui.length !== 0) {
    return iconsList.ui[0];
  }
  if (iconsList.logos.length !== 0) {
    return iconsList.logos[0];
  }
  return null;
};

// Our Grid Column doesn't allow position for sticky, but our box doesn't allow percentage widths
// Styled Box is fine I guess, but we might want to expand Box to take any width
const IconColumn = styled(Box)({
  width: '41.66666666666667%',
});

const IconsList: React.FC<IconsListProps> = () => {
  const filterID = useUID();
  const iconKeySeed = useUIDSeed();
  const groupedIconList = getGroupedList(iconsJson);
  const [filterString, setFilterString] = React.useState('');
  const [iconsList, setIconsList] = React.useState(groupedIconList);
  const [selectedIcon, setSelectedIcon] = React.useState(getFirstIcon(iconsList));
  const uiComposite = useCompositeState();
  const productComposite = useCompositeState();
  return (
    <Box maxWidth="size120">
      <Grid gutter="space60">
        <Column span={7}>
          <Box as="form" role="search" onSubmit={e => e.preventDefault()} marginBottom="space70">
            <FormLabel htmlFor={filterID}>Filter Icons</FormLabel>
            <FormInput
              autoComplete="off"
              id={filterID}
              type="text"
              value={filterString}
              placeholder="Filter by name..."
              onChange={e => {
                const filteredList = iconsJson.filter(({name}: IconObject) =>
                  name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
                );
                const filteredGroupedList = getGroupedList(filteredList);
                setIconsList(filteredGroupedList);
                setSelectedIcon(getFirstIcon(filteredGroupedList));
                setFilterString(e.currentTarget.value);
              }}
            />
          </Box>
        </Column>
        <Column span={7}>
          {iconsList.ui.length > 0 && (
            <>
              <Heading as="h2" variant="heading20">
                UI Icons
              </Heading>
              <Paragraph>
                UI icons are the general collection of icons that can be used in most user interfaces. They are most
                commonly used in conjunction with performing an interaction.
              </Paragraph>
              <Composite
                aria-label="UI Icons"
                as={Box}
                marginX="spaceNegative40"
                marginBottom="space70"
                display="flex"
                flexWrap="wrap"
                role="listbox"
                {...uiComposite}
              >
                {iconsList.ui.map((icon, index) => (
                  <IconListItem
                    aria-selected={selectedIcon != null && selectedIcon.name === icon.name}
                    key={iconKeySeed(`icon-${index}`)}
                    icon={icon}
                    setSelectedIcon={setSelectedIcon}
                    {...uiComposite}
                  />
                ))}
              </Composite>
            </>
          )}

          {iconsList.logos.length > 0 && (
            <>
              <Heading as="h2" variant="heading20">
                Logo Icons
              </Heading>
              <Paragraph>
                Logo icons represent various Twilio products and brands. When using the Twilio logo please follow{' '}
                <Anchor href="https://www.twilio.com/brand/guidelines/logos">the brand guidelines</Anchor> on how to do
                so.
              </Paragraph>
              <Composite
                as={Box}
                aria-label="Product icons"
                marginX="spaceNegative40"
                marginBottom="space70"
                display="flex"
                flexWrap="wrap"
                role="listbox"
                {...productComposite}
              >
                {iconsList.logos.map((icon, index) => (
                  <IconListItem
                    aria-selected={selectedIcon != null && selectedIcon.name === icon.name}
                    key={iconKeySeed(`icon-${index}`)}
                    icon={icon}
                    setSelectedIcon={setSelectedIcon}
                    {...productComposite}
                  />
                ))}
              </Composite>
            </>
          )}

          {iconsList.ui.length === 0 && iconsList.logos.length === 0 && (
            <Card padding="space100">
              <Heading as="h2" variant="heading20">
                Can&rsquo;t find what you&rsquo;re looking for?
              </Heading>
              <Paragraph>
                Paste is new and we&rsquo;re adding to it all the time. If you can&rsquo;t find the icon you are looking
                for, here are some options that might be worth a try.
              </Paragraph>
              <UnorderedList>
                <ListItem>
                  Try searching for a different name. The icon from a previous library might exist under a slightly
                  different name in Paste.
                </ListItem>
                <ListItem>
                  Follow the{' '}
                  <SiteLink to="/icons/how-to-add-an-icon">
                    guide on how to add and contribute an icon to Paste
                  </SiteLink>
                  .
                </ListItem>
                <ListItem>
                  Reach out and{' '}
                  <Anchor href="https://www.github.com/twilio-labs/paste/discussions/new">create a Discussion</Anchor>{' '}
                  on GitHub.
                </ListItem>
              </UnorderedList>
            </Card>
          )}
        </Column>
        <IconColumn paddingX="space60" position="sticky" top={STICKY_COLUMN_OFFSET}>
          <IconCard selectedIcon={selectedIcon} />
        </IconColumn>
      </Grid>
    </Box>
  );
};

IconsList.displayName = 'IconsList';
export {IconsList};
