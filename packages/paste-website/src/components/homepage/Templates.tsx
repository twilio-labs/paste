import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import * as React from "react";

import ObjectsList from "../../assets/images/templates/objects-list.png";
import Overview from "../../assets/images/templates/overview.png";
import Settings from "../../assets/images/templates/settings.png";
import Wizard from "../../assets/images/templates/wizard.png";
import { HOMEPAGE_SITE_CONTENT_MAX_WIDTH } from "../../constants";
import CircleIcon from "../icons/CircleIcon";
import { BouncyAnchor } from "./BouncyAnchor";
import { SectionContainer } from "./SectionContainer";

const CarouselButton = React.forwardRef<HTMLButtonElement, { "aria-label": string; onClick: () => void }>(
  (props, ref) => {
    return (
      <Button
        role="tab"
        aria-busy="false"
        ref={ref}
        variant="reset"
        size="reset"
        height="14px"
        width="14px"
        borderStyle="solid"
        borderWidth="borderWidth10"
        borderColor="colorBorderWeak"
        borderRadius="borderRadiusCircle"
        name={props["aria-label"]}
        _hover={{
          borderColor: "colorBorderPrimary",
        }}
        _selected={{
          borderColor: "colorBorderPrimaryStrong",
          backgroundColor: "colorBackgroundPrimaryWeaker",
        }}
        {...props}
      >
        &nbsp;
      </Button>
    );
  },
);

const TemplatesCarousel: React.FC = (): React.ReactElement<any> => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const onSelect = React.useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [onSelect, emblaApi]);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
    },
    [emblaApi],
  );

  return (
    <Box
      width="min-content"
      alignSelf="center"
      position="relative"
      display="flex"
      flexDirection="column"
      rowGap="space70"
    >
      <Box
        ref={emblaRef}
        width="100%"
        paddingY="space130"
        paddingX="space100"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        borderWidth="borderWidth10"
        borderRadius="borderRadius50"
        backgroundColor="colorBackgroundBody"
        display="flex"
        alignItems="center"
        flexDirection="column"
        rowGap="space80"
        overflow="hidden"
      >
        <Box display="flex" width="100%" maxWidth="500px" columnGap="space80">
          <Box
            flex="0 0 100%"
            minWidth={0}
            height="354px"
            width="499px"
            flexShrink={0}
            boxShadow="shadow"
            borderRadius="borderRadius30"
            overflow="hidden"
          >
            <Image src={Overview} alt="" width="499" />
          </Box>
          <Box
            flex="0 0 100%"
            minWidth={0}
            height="354px"
            width="499px"
            flexShrink={0}
            boxShadow="shadow"
            borderRadius="borderRadius30"
            overflow="hidden"
          >
            <Image src={Settings} alt="" width="499" />
          </Box>
          <Box
            flex="0 0 100%"
            minWidth={0}
            height="354px"
            width="499px"
            flexShrink={0}
            boxShadow="shadow"
            borderRadius="borderRadius30"
            overflow="hidden"
          >
            <Image src={Wizard} alt="" height="354" width="499" />
          </Box>{" "}
          <Box
            flex="0 0 100%"
            minWidth={0}
            height="354px"
            width="499px"
            flexShrink={0}
            boxShadow="shadow"
            borderRadius="borderRadius30"
            overflow="hidden"
          >
            <Image src={ObjectsList} alt="" width="499" />
          </Box>
        </Box>

        <Box role="tablist" aria-label="page templates carousel" display="flex" columnGap="space30" maxHeight="28px">
          <CarouselButton
            aria-label="objects list page template"
            aria-selected={selectedIndex === 0}
            onClick={() => onDotButtonClick(0)}
          />
          <CarouselButton
            aria-label="overview page template"
            aria-selected={selectedIndex === 1}
            onClick={() => onDotButtonClick(1)}
          />
          <CarouselButton
            aria-label="settings page template"
            aria-selected={selectedIndex === 2}
            onClick={() => onDotButtonClick(2)}
          />
          <CarouselButton
            aria-label="wizard page template"
            aria-selected={selectedIndex === 3}
            onClick={() => onDotButtonClick(3)}
          />
        </Box>
      </Box>
    </Box>
  );
};

const Templates: React.FC = (): React.ReactElement<any> => {
  const theme = useTheme();
  return (
    <SectionContainer position="relative">
      <Box
        display="flex"
        flexDirection={["column", "column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        columnGap="space100"
        rowGap="space100"
        position="relative"
        maxWidth={HOMEPAGE_SITE_CONTENT_MAX_WIDTH}
        overflow="visible"
      >
        <Box paddingTop="space190" display="flex" flexDirection="column" maxWidth={["100%", "100%", "100%", "size40"]}>
          <Heading as="h3" variant="heading20">
            Explore our templates
          </Heading>
          <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
            Page templates bring a collection of components and patterns together into full-page layouts to drive
            cohesion across our platforms.
          </Text>
          <Text as="span" fontSize="fontSize40" lineHeight="lineHeight40" marginBottom="space70">
            Get inspired by these examples of Paste templates in use, and start building your customer experiences
            today.
          </Text>
          <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize40" lineHeight="lineHeight40">
            <BouncyAnchor text="Check out our templates" href="/page-templates" />
          </Text>
        </Box>
        <TemplatesCarousel />
      </Box>
      <Box zIndex="zIndex30" position="absolute" left={-250} element="CIRCLE" top={300}>
        <CircleIcon
          size={theme.heights.size20}
          color={theme.backgroundColors.colorBackgroundBrandHighlight}
          decorative
        />
      </Box>
    </SectionContainer>
  );
};

export { Templates };
