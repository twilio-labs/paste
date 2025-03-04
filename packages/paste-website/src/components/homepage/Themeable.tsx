// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { Anchor } from "@twilio-paste/anchor";
import { type UseSpringProps, animated, useSpring } from "@twilio-paste/animation-library";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import FigmaLogo from "../../assets/illustrations/figma-logo.svg";
import ReactLogo from "../../assets/illustrations/react-logo.svg";
import TypescriptLogo from "../../assets/illustrations/ts-logo.svg";
import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { BouncyAnchor } from "./BouncyAnchor";
import { SectionContainer } from "./SectionContainer";
import { SectionSeparator } from "./SectionSeparator";
import { ThemeableBuilder } from "./ThemeableBuilder";

interface BoopProps {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
  config?: UseSpringProps["config"];
  children?: React.ReactNode;
}

const Boop: React.FC<BoopProps> = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  config = {
    tension: 300,
    friction: 10,
  },
  children,
}) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  const style = useSpring({
    display: "inline-block",
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config,
  });

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    // eslint-disable-next-line consistent-return
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

const Themeable: React.FC = (): React.ReactElement<any> => {
  return (
    <SectionContainer>
      <SectionSeparator>Themeable and composable</SectionSeparator>
      <Box
        element="THEMEABLE"
        paddingBottom="space170"
        display="grid"
        gridTemplateColumns="100%"
        gridTemplateRows="auto max-content min-content"
        gridTemplateAreas='"separator" "row1" "row2"'
        justifyItems="center"
        rowGap="space170"
        width="100%"
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
      >
        <Box
          element="THEMEABLE_TOP"
          gridArea="row1"
          width="100%"
          display="flex"
          flexDirection={["column", "column", "column", "row"]}
          justifyContent="space-between"
          columnGap="space200"
          rowGap="space200"
        >
          <Box display="flex" flexDirection="column" maxWidth={["100%", "100%", "100%", "size40"]}>
            <Heading as="h3" variant="heading20">
              Start from anywhere
            </Heading>
            <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
              With Paste, you can get production-ready experiences up in minutes with our 80+{" "}
              <Anchor href="/components">styled components</Anchor> and <Anchor href="/theme">pre-built themes</Anchor>.
            </Text>

            <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
              Or get complete control by bringing your own theme and creating custom components with our{" "}
              <Anchor href="/primitives">functional primitives</Anchor>.
            </Text>
            <Box fontWeight="fontWeightSemibold" fontSize="fontSize40" lineHeight="lineHeight40">
              <BouncyAnchor href="/page-templates" text="Check out our templates" />
            </Box>
          </Box>
          <Box display={["none", "none", "flex", "flex"]} justifyContent="center">
            <ThemeableBuilder />
          </Box>
        </Box>
        <Box maxWidth="size40" alignSelf="center" textAlign="center" gridArea="row2" paddingTop="space170">
          <Heading as="h3" variant="heading30">
            Built with your favorite technologies, Typescript + React + Figma
          </Heading>
          <Box
            display="flex"
            flexDirection="row"
            columnGap="space200"
            justifyContent="center"
            marginTop="space90"
            aria-hidden="true"
          >
            <Boop rotation={6} y={-1} scale={1.05}>
              <Image src={TypescriptLogo} aria-hidden="true" role="img" alt="typescript logo" />
            </Boop>
            <Boop rotation={6} y={-1} scale={1.05}>
              <Image src={ReactLogo} aria-hidden="true" role="img" alt="react logo" />
            </Boop>
            <Boop rotation={6} y={-1} scale={1.05}>
              <Image src={FigmaLogo} aria-hidden="true" role="img" alt="figma logo" />
            </Boop>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export { Themeable };
