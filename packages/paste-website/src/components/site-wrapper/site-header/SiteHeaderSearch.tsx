import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { InlineCode } from "@twilio-paste/inline-code";
import { Text } from "@twilio-paste/text";
import * as React from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { SiteSearch } from "../../site-search";

const SiteHeaderSearch: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpen = (): void => {
    setIsOpen(true);
  };

  const onClose = (): void => {
    setIsOpen(false);
  };

  useHotkeys("mod+k", onOpen);

  return (
    <>
      <Button
        backgroundColor="colorBackgroundBody"
        fontSize="fontSize30"
        fontWeight="fontWeightMedium"
        lineHeight="lineHeight50"
        paddingBottom="space20"
        paddingLeft="space30"
        paddingRight="space50"
        paddingTop="space20"
        borderStyle="solid"
        boxShadow="shadowBorder"
        minWidth="200px"
        color="colorTextIcon"
        variant="reset"
        size="reset"
        borderRadius="borderRadius20"
        transition="box-shadow 100ms ease-in"
        onClick={onOpen}
        _hover={{
          boxShadow: "shadowBorderPrimary",
        }}
        _focus={{
          boxShadow: "shadowFocusShadowBorder",
        }}
        _active={{
          boxShadow: "shadowBorderPrimaryStronger",
        }}
      >
        <Box as="span" display="flex" justifyContent="space-between" width="100%" alignItems="center">
          <Box as="span" display="flex" columnGap="space20" alignItems="center">
            <SearchIcon decorative={false} title="Search" size="sizeIcon40" />
            <Text as="span" fontStyle="italic">
              Search
            </Text>
          </Box>
          <Box as="span">
            <InlineCode>⌘</InlineCode>
            <InlineCode>K</InlineCode>
          </Box>
        </Box>
      </Button>
      <SiteSearch isOpen={isOpen} onDismiss={onClose} />
    </>
  );
};

export { SiteHeaderSearch };
