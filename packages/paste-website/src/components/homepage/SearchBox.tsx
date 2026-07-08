import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { LogoPasteIcon } from "@twilio-paste/icons/esm/LogoPasteIcon";
import { Text } from "@twilio-paste/text";
import * as React from "react";

const SearchBox: React.FC = () => {
  return (
    <Box
      backgroundColor="colorBackgroundBody"
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
    </Box>
  );
};

export { SearchBox };
