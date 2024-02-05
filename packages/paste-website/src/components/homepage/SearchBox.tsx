import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { LogoPasteIcon } from "@twilio-paste/icons/esm/LogoPasteIcon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { Text } from "@twilio-paste/text";
import * as React from "react";

import { SiteSearch } from "../site-search";

const SearchBox: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpen = (): void => {
    setIsOpen(true);
  };

  const onClose = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Box
        borderStyle="solid"
        borderWidth="borderWidth10"
        borderColor="colorBorderWeaker"
        borderRadius="borderRadius30"
        boxShadow="shadowLow"
        padding="space70"
        display="flex"
        flexDirection="column"
        rowGap="space60"
        element="SEARCH_BOX"
      >
        <Box
          display="flex"
          flexDirection="row"
          columnGap="space30"
          alignItems="center"
          fontSize="fontSize40"
          lineHeight="lineHeight40"
        >
          <LogoPasteIcon decorative color="colorTextIconBrandHighlight" />
          <Box display="flex">
            <Text as="div">
              Get to know our{" "}
              <Text as="div" display="inline" fontWeight="fontWeightSemibold">
                100+
              </Text>{" "}
              <Anchor href="/components">components,</Anchor> <Anchor href="/patterns">patterns,</Anchor> and{" "}
              <Anchor href="/page-templates">templates</Anchor>
            </Text>
          </Box>
        </Box>
        <Button
          variant="reset"
          width="100%"
          borderStyle="solid"
          borderRadius="borderRadius20"
          borderColor="colorBorder"
          borderWidth="borderWidth10"
          _hover={{ borderColor: "colorBorderPrimary", boxShadow: "shadowLow" }}
          onClick={onOpen}
        >
          <Box
            backgroundColor="colorBackgroundWeak"
            padding="space30"
            borderRightStyle="solid"
            borderRightWidth="borderWidth10"
            borderRightColor="colorBorderWeaker"
            borderTopLeftRadius="borderRadius20"
            borderBottomLeftRadius="borderRadius20"
          >
            <SearchIcon decorative={false} title="search the docs site" color="colorTextIcon" size="sizeIcon30" />
          </Box>
          <Text as="div" fontStyle="italic" color="colorTextWeak">
            Search
          </Text>
        </Button>
      </Box>
      <SiteSearch isOpen={isOpen} onDismiss={onClose} />
    </>
  );
};

export { SearchBox };
