import { Box } from "@twilio-paste/box";
import type { ThemeShape } from "@twilio-paste/theme";
import * as React from "react";

import type { TokenExampleProps } from "../../types";
import { BorderExample } from "./BorderExample";
import { BoxExample } from "./BoxExample";
import { IconSizeExample } from "./IconSizeExample";
import { LineHeightExample } from "./LineHeightExample";
import { SpacingExample } from "./SpacingExample";
import { TextColorExample } from "./TextColorExample";
import { TextExample } from "./TextExample";

export const TokenExample: React.FC<React.PropsWithChildren<TokenExampleProps>> = ({
  category,
  name,
  value,
  backgroundColorInverse,
  borderColor,
  textColorInverse,
  highlightColor,
  text_contrast_pairing,
  ...props
}) => {
  const backgroundColor = name.toLowerCase().match("inverse") ? backgroundColorInverse : props.backgroundColor;
  const textColor = name.toLowerCase().match("inverse") ? textColorInverse : props.textColor;
  let tokenExampleRender = null;

  switch (category) {
    case "background-colors":
    case "data-visualization": {
      // apply a border to foreground colors that match the background color
      const boxBorder = value === backgroundColor ? borderColor : null;

      tokenExampleRender = (
        <BoxExample
          backgroundColor={value as keyof ThemeShape["backgroundColors"]}
          borderColor={boxBorder as keyof ThemeShape["borderColors"]}
        />
      );
      break;
    }
    case "border-colors":
      tokenExampleRender = <BoxExample borderColor={value as keyof ThemeShape["borderColors"]} />;
      break;
    case "border-widths":
      tokenExampleRender = <BorderExample borderWidth={value as keyof ThemeShape["borderWidths"]} />;
      break;
    case "fonts":
      tokenExampleRender = (
        <TextExample
          color={textColor as keyof ThemeShape["textColors"]}
          fontFamily={value as keyof ThemeShape["fonts"]}
        />
      );
      break;
    case "font-sizes":
      tokenExampleRender = (
        <TextExample
          color={textColor as keyof ThemeShape["textColors"]}
          fontSize={value as keyof ThemeShape["fontSizes"]}
        />
      );
      break;
    case "font-weights":
      tokenExampleRender = (
        <TextExample
          color={textColor as keyof ThemeShape["textColors"]}
          fontWeight={value as keyof ThemeShape["fontWeights"]}
        />
      );
      break;
    case "line-heights":
      tokenExampleRender = (
        <LineHeightExample
          tokenName={name}
          color={textColor as keyof ThemeShape["textColors"]}
          backgroundColor={highlightColor as keyof ThemeShape["backgroundColors"]}
          lineHeight={value as keyof ThemeShape["lineHeights"]}
        />
      );
      break;
    case "radii": {
      const height = name.toLowerCase().match("pill") ? "sizeSquare70" : null;

      tokenExampleRender = (
        <BoxExample
          borderRadius={value as keyof ThemeShape["radii"]}
          backgroundColor={highlightColor as keyof ThemeShape["backgroundColors"]}
          height={height}
        />
      );
      break;
    }
    case "box-shadows":
      tokenExampleRender = <BoxExample boxShadow={value as keyof ThemeShape["shadows"]} />;
      break;
    case "spacings":
      tokenExampleRender = <SpacingExample color={highlightColor} tokenName={name} spacing={value} />;
      break;
    case "sizings":
      // only render a preview for icons or squares
      if (name.toLowerCase().match("icon")) {
        tokenExampleRender = (
          <IconSizeExample
            color={borderColor as keyof ThemeShape["textColors"]}
            size={value as keyof ThemeShape["iconSizes"]}
          />
        );
      } else if (name.toLowerCase().match("square")) {
        tokenExampleRender = (
          <BoxExample
            size={value as keyof ThemeShape["sizes"]}
            backgroundColor={highlightColor as keyof ThemeShape["backgroundColors"]}
            borderRadius="borderRadius0"
          />
        );
      }

      break;
    case "text-colors": {
      const textShadow = value === backgroundColor ? `0 0 1px ${borderColor}` : undefined;

      tokenExampleRender = (
        <TextColorExample
          value={value as keyof ThemeShape["textColors"]}
          backgroundColor={backgroundColor}
          textColor={textColor}
          textShadow={textShadow}
        />
      );
    }
  }

  return tokenExampleRender ? (
    <Box
      boxSizing="content-box"
      padding={["space30", "space40"]}
      width="sizeSquare200"
      minHeight="sizeSquare170"
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexShrink={0}
      backgroundColor={backgroundColor as keyof ThemeShape["backgroundColors"]}
      borderRightColor="colorBorderWeaker"
      borderRightWidth="borderWidth10"
      borderRightStyle="solid"
      element="TOKEN_EXAMPLE"
    >
      {tokenExampleRender}
    </Box>
  ) : null;
};
