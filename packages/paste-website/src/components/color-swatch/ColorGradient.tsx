import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box } from "@twilio-paste/box";
import DarkRawTokens from "@twilio-paste/design-tokens/dist/themes/twilio-dark/tokens.raw.json";
import DefaultRawTokens from "@twilio-paste/design-tokens/dist/themes/twilio/tokens.raw.json";
import { styled, themeGet } from "@twilio-paste/styling-library";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";
import VisibilitySensor from "react-visibility-sensor";

import { useDarkModeContext } from "../../context/DarkModeContext";
import type { Themes } from "../../types";

const AnimatedBox = animated(Box);

type ThemeShape = Record<string, Record<string, string | number>>;

const aliasPrefixes = [
  "palette-gray",
  "palette-red",
  "palette-orange",
  "palette-yellow",
  "palette-green",
  "palette-blue",
  "palette-purple",
];
const excludedAliases = new Set(["palette-gray-0", "palette-gray-110", "palette-orange-65", "palette-gray-05"]);

export const sortAliasNames = (aliasNames: string[]): string[] => {
  return aliasNames.sort((nameA, nameB) => nameA.localeCompare(nameB, undefined, { numeric: true })).reverse();
};

export const filterAliasNames = (aliasName: string, prefix: string): boolean =>
  aliasName.includes(prefix) && !aliasName.includes("transparent") && !excludedAliases.has(aliasName);

export const getAliasValuesFromPrefix = (prefix: string, theme: Themes): string[] => {
  const themeColors: ThemeShape = theme === "default" ? DefaultRawTokens.aliases : DarkRawTokens.aliases;
  const filteredAliasNames = Object.keys(themeColors).filter((aliasName) => filterAliasNames(aliasName, prefix));

  return sortAliasNames(filteredAliasNames).reduce((current: string[], aliasName): string[] => {
    const aliasObject = themeColors[aliasName];
    return [...current, aliasObject.value as string];
  }, []);
};

// Need to use styled div because the alias names aren't valid backgroundColors on Box
const StyledGradientSwatch = styled.div<{ backgroundColor: string }>`
  background-color: ${(props: any) => props.backgroundColor};
  height: ${themeGet("space.space60")};
`;

const StyledGradientSwatchTall = styled.div<{ backgroundColor: string; rounded: boolean }>((props) => {
  return {
    backgroundColor: props.backgroundColor,
    // @ts-expect-error this works fine
    height: props.theme.space.space120,
    // @ts-expect-error this works fine
    borderBottomLeftRadius: props.rounded ? props.theme.radii.borderRadius20 : 0,
    // @ts-expect-error this works fine
    borderBottomRightRadius: props.rounded ? props.theme.radii.borderRadius20 : 0,
  };
});

export const ColorGradient: React.FC<React.PropsWithChildren<{ aliasPrefix: string; makeTall?: boolean }>> = ({
  aliasPrefix,
  makeTall = "false",
}) => {
  const { theme } = useDarkModeContext();
  const aliasValues = getAliasValuesFromPrefix(aliasPrefix, theme);
  const count = aliasValues.length - 1;

  if (makeTall) {
    return (
      <Box borderRadius="borderRadius20" overflow="hidden">
        {aliasValues.map((aliasValue, index) => (
          <StyledGradientSwatchTall backgroundColor={aliasValue} key={useUID()} rounded={index === count} />
        ))}
      </Box>
    );
  }
  return (
    <Box borderRadius="borderRadius20" overflow="hidden">
      {aliasValues.map((aliasValue) => (
        <StyledGradientSwatch backgroundColor={aliasValue} key={useUID()} />
      ))}
    </Box>
  );
};

export const ColorGradientRainbow: React.FC<{ omitGrays?: boolean }> = ({ omitGrays = false }): JSX.Element => {
  const [show, setShow] = React.useState(false);

  function handleVisibilityChange(isVisible: boolean): void {
    if (!show) {
      setShow(isVisible);
    }
  }

  const styles = useSpring({
    opacity: show ? 1 : 0.1,
  });

  if (omitGrays)
    return (
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility offset={{ bottom: 150 }}>
        <AnimatedBox
          display="grid"
          columnGap="space40"
          marginBottom="space70"
          gridTemplateColumns="repeat(6, 1fr)"
          gridTemplateRows="max-content"
          style={styles}
        >
          {aliasPrefixes
            .filter((prefix) => prefix !== "palette-gray")
            .map((prefix) => (
              <ColorGradient makeTall aliasPrefix={prefix} key={useUID()} />
            ))}
        </AnimatedBox>
      </VisibilitySensor>
    );
  return (
    <Box display="grid" columnGap="space40" marginBottom="space70" gridTemplateColumns="repeat(7, 1fr)">
      {aliasPrefixes.map((prefix) => (
        <ColorGradient aliasPrefix={prefix} key={useUID()} />
      ))}
    </Box>
  );
};
