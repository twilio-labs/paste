import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Card } from "@twilio-paste/card";
import { Column, Grid } from "@twilio-paste/grid";
import { Heading } from "@twilio-paste/heading";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { ListItem, UnorderedList } from "@twilio-paste/list";
import { Paragraph } from "@twilio-paste/paragraph";
import { Composite, useCompositeState } from "@twilio-paste/reakit-library";
import { useUID, useUIDSeed } from "@twilio-paste/uid-library";
import debounce from "lodash/debounce";
import dynamic from "next/dynamic";
import * as React from "react";

import { GenericIconProps } from "@twilio-paste/icons/esm/types";
import { event } from "../../lib/gtag";
import { SiteLink } from "../SiteLink";
import { IconCard } from "./IconCard";
import { IconListItem } from "./IconListItem";
import type { GroupedList, IconObject, IconsListProps } from "./types";

const { icons: iconsJson } = require("@twilio-paste/icons/json/icons.json");

// // Function to load icons and group them
// const loadGroupedIcons = async (): Promise<GroupedList> => {
//   const groupedList: GroupedList = { logos: [], ui: [] };

//   iconsJson.length = 5;

//   await Promise.all(
//     iconsJson.map(async ({ name }: IconObject) => {
//       const importPath = `@twilio-paste/icons/esm/AcceptIcon`;
//       const ImportComponent = dynamic(() => import(importPath), { ssr: false });
//       const iconWithComponent = { name, Component: ImportComponent };

//       console.log(iconWithComponent);

//       if (name.startsWith("Product") || name.startsWith("Logo")) {
//         // @ts-ignore
//         groupedList.logos.push(iconWithComponent);
//       } else {
//         // @ts-ignore
//         groupedList.ui.push(iconWithComponent);
//       }
//     }),
//   );

//   return groupedList;
// };

// Helper function to get the first icon from the grouped list
const getFirstIcon = (iconsList: GroupedList): IconObject | null => {
  if (iconsList.ui.length > 0) {
    return iconsList.ui[0];
  }
  if (iconsList.logos.length > 0) {
    return iconsList.logos[0];
  }
  return null;
};

// Debounced function to track filter input
const trackIconFilterString = debounce((filter: string): void => {
  if (filter !== "") {
    event({
      category: "Icons",
      action: "filter",
      label: filter,
    });
  }
}, 500);

const IconsList: React.FC<React.PropsWithChildren<IconsListProps>> = () => {
  const filterID = useUID();
  const iconKeySeed = useUIDSeed();
  const [filterString, setFilterString] = React.useState("");
  const [iconsList, setIconsList] = React.useState<GroupedList>({ logos: [], ui: [] });
  const [selectedIcon, setSelectedIcon] = React.useState<IconObject | null>(null);
  const uiComposite = useCompositeState();
  const productComposite = useCompositeState();

  const ImportComponent = dynamic(() => import("@twilio-paste/icons/esm/AcceptIcon").then((m) => m.AcceptIcon), {
    ssr: false,
  });

  const loadIcons = () => {
    const groupedList: GroupedList = { logos: [], ui: [] };

    iconsJson.length = 5;

    iconsJson.map(({ name }: IconObject) => {
      const importPath = "@twilio-paste/icons/esm/AcceptIcon";
      const ImportComponent = dynamic<GenericIconProps>(() => import(importPath).then((m) => m.AcceptIcon), {
        ssr: false,
      });
      const iconWithComponent = {
        name,
        Component: "@twilio-paste/icons/esm/AcceptIcon",
      };

      console.log(iconWithComponent);

      if (name.startsWith("Product") || name.startsWith("Logo")) {
        // @ts-ignore
        groupedList.logos.push(iconWithComponent);
      } else {
        // @ts-ignore
        groupedList.ui.push(iconWithComponent);
      }
    });

    setIconsList(groupedList);
    setSelectedIcon(getFirstIcon(groupedList));
  };

  // Load icons on component mount
  React.useEffect(() => {
    loadIcons();
  }, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value.toLowerCase();
    const filteredGroupedList: GroupedList = {
      logos: iconsList.logos.filter(({ name }) => name.toLowerCase().includes(filter)),
      ui: iconsList.ui.filter(({ name }) => name.toLowerCase().includes(filter)),
    };

    setIconsList(filteredGroupedList);
    setSelectedIcon(getFirstIcon(filteredGroupedList));
    setFilterString(filter);
    trackIconFilterString(filter);
  };

  if (iconsList.ui.length === 0) {
    return null;
  }

  const firstIcon = iconsList.ui[0].Component;

  return (
    <Box maxWidth="size120">
      <Grid gutter="space60">
        <Column span={[12, 12, 6, 7]}>
          <Box as="form" role="search" onSubmit={(e) => e.preventDefault()} marginBottom="space70">
            <Label htmlFor={filterID}>Filter Icons</Label>
            <Input
              autoComplete="off"
              id={filterID}
              type="text"
              value={filterString}
              placeholder="Filter by name..."
              onChange={handleChange}
            />
          </Box>
        </Column>
      </Grid>
      <Grid gutter="space60">
        <Column span={[12, 6, 6, 7]}>
          {iconsList.ui.length > 0 && (
            <>
              <firstIcon decorative={true} />
              {JSON.stringify(iconsList.ui[0])}
              <ImportComponent decorative={true} />
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
                Logo icons represent various Twilio products and brands. When using the Twilio logo please follow{" "}
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
                  Follow the{" "}
                  <SiteLink href="/icons/how-to-add-an-icon">
                    guide on how to add and contribute an icon to Paste
                  </SiteLink>
                  .
                </ListItem>
                <ListItem>
                  Reach out and{" "}
                  <Anchor href="https://www.github.com/twilio-labs/paste/discussions/new">create a Discussion</Anchor>{" "}
                  on GitHub.
                </ListItem>
              </UnorderedList>
            </Card>
          )}
        </Column>
        <Box
          paddingX="space60"
          position="sticky"
          top="space130"
          height="fit-content"
          width={["100%", "50%", "50%", "41.66666666666667%"]}
        >
          <IconCard selectedIcon={selectedIcon} />
        </Box>
      </Grid>
    </Box>
  );
};

IconsList.displayName = "IconsList";
export { IconsList };
