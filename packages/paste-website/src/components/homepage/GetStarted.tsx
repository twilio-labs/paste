import { Box } from "@twilio-paste/box";
import { Column, Grid } from "@twilio-paste/grid";
import { useWindowSize } from "@twilio-paste/utils";

import { HOMEPAGE_SECTION_OVERFLOW_OFFSET, SITE_CONTENT_MAX_WIDTH } from "../../constants";
import { SlantedBackgroundGradient } from "../SlantedBackgroundGradient";
import { GetStartedInclusive } from "./GetStartedInclusive";
import { GetStartedRunning } from "./GetStartedRunning";
import { GetStarterWhy } from "./GetStartedWhy";

const DELAY_INTERVAL = 250;

export const GetStarted = (): JSX.Element => {
  const { breakpointIndex } = useWindowSize();

  return (
    <Box paddingX={["space90", "space180"]} position="relative">
      <SlantedBackgroundGradient
        startColor="colorBackgroundBrandStronger"
        endColor="colorBackgroundBrandStrong"
        styles={{ bottom: `${HOMEPAGE_SECTION_OVERFLOW_OFFSET}px` }}
      >
        <Box
          maxWidth={SITE_CONTENT_MAX_WIDTH}
          marginLeft="auto"
          marginRight="auto"
          position="relative"
          zIndex="zIndex10"
          paddingTop="space200"
          marginTop="spaceNegative160"
        >
          <Grid as="section" gutter="space40" vertical={[true, false, false]} equalColumnHeights>
            <Column span={4}>
              <Box marginBottom={["space70", "space0", "space0"]}>
                <GetStarterWhy />
              </Box>
            </Column>
            <Column span={4}>
              <Box marginBottom={["space70", "space0", "space0"]}>
                <GetStartedInclusive
                  animationDelay={breakpointIndex === undefined || breakpointIndex > 1 ? DELAY_INTERVAL : 0}
                />
              </Box>
            </Column>
            <Column span={4}>
              <GetStartedRunning
                animationDelay={breakpointIndex === undefined || breakpointIndex > 1 ? DELAY_INTERVAL * 1.5 : 0}
              />
            </Column>
          </Grid>
        </Box>
      </SlantedBackgroundGradient>
    </Box>
  );
};
