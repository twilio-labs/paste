import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { KeyboardKey, KeyboardKeyGroup, useKeyCombination } from "@twilio-paste/keyboard-key";
import { Text } from "@twilio-paste/text";
import { useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

import { SiteSearch } from "../../site-search";

const SiteHeaderSearch: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { breakpointIndex } = useWindowSize();
  // navigator is not available in SSR, settign a default until it renders to client
  const [isMacOS, setIsMacOS] = React.useState<boolean>();
  const platformTriggerKey = isMacOS ? "Meta" : "Control";

  React.useEffect(() => {
    setIsMacOS(typeof window !== "undefined" && navigator && navigator?.platform.toUpperCase().includes("MAC"));
  }, []);

  const onOpen = (): void => {
    setIsOpen(true);
  };

  const onClose = (): void => {
    setIsOpen(false);
  };

  const keyCombinationState = useKeyCombination({
    keys: [platformTriggerKey, "k"],
    onCombinationPress: onOpen,
    enablePressStyles: true,
    disabled: isOpen,
  });

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
        minWidth={breakpointIndex === 0 ? "150px" : "200px"}
        minHeight="36px"
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
        aria-keyshortcuts={`${isMacOS ? "Command" : "Control"} + K`}
      >
        <Box as="span" display="flex" justifyContent="space-between" width="100%" alignItems="center">
          <Box as="span" display="flex" columnGap="space20" alignItems="center">
            <SearchIcon decorative={false} title="Search" size="sizeIcon40" />
            <Text as="span" fontStyle="italic">
              Search
            </Text>
          </Box>
          {breakpointIndex === 0 || isMacOS === undefined ? null : (
            <>
              <Box as="span" color="colorText" aria-hidden="true" marginLeft="space30" lineHeight="lineHeight20">
                <KeyboardKeyGroup {...keyCombinationState}>
                  <KeyboardKey keyEvent={platformTriggerKey}>{isMacOS ? "Cmd" : "Ctrl"}</KeyboardKey>
                  <KeyboardKey keyEvent="k">K</KeyboardKey>
                </KeyboardKeyGroup>
              </Box>
            </>
          )}
        </Box>
      </Button>
      <SiteSearch isOpen={isOpen} onDismiss={onClose} />
    </>
  );
};

export { SiteHeaderSearch };
