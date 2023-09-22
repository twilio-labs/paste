import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import { MediaBody, MediaFigure, MediaObject } from '@twilio-paste/core/media-object';
import { ThemeVariants, useThemeContrastCheck } from '@twilio-paste/core/theme';
import { ErrorIcon } from '@twilio-paste/icons/cjs/ErrorIcon';
import { SuccessIcon } from '@twilio-paste/icons/cjs/SuccessIcon';
import * as React from 'react';

import { SelectedThemeContext } from '../App';
import { ThemeSelector } from './ThemeSelector';
import { TokenPairRating } from './TokenPairRating';

export const SideBar = (): JSX.Element => {
  const { selectedTheme, setSelectedTheme } = React.useContext(SelectedThemeContext);

  const { textContrastRating, uiControlContrastRating, totalFailures } = useThemeContrastCheck();

  const themes = Object.keys(ThemeVariants) as [keyof typeof ThemeVariants];
  return (
    <>
      <Box paddingX="space40">
        <Box
          paddingY="space40"
          borderStyle="solid"
          borderWidth="borderWidth0"
          borderBottomWidth="borderWidth10"
          borderBottomColor="colorBorderWeak"
        >
          <ThemeSelector
            value={selectedTheme}
            themes={themes}
            onChange={(e) => {
              if (setSelectedTheme != null) {
                setSelectedTheme(e.currentTarget.value);
              }
            }}
          />
        </Box>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space30">
            {totalFailures > 0 ? (
              <ErrorIcon decorative={false} color="colorTextError" title="Not passing contrast" />
            ) : (
              <SuccessIcon decorative={false} color="colorTextSuccess" title="Passing contrast" />
            )}
          </MediaFigure>
          <MediaBody>
            <Box padding="space40" paddingY="space80" fontSize="fontSize60" fontWeight="fontWeightBold">
              {totalFailures > 0 ? `${totalFailures} Failures` : 'Everything is passing'}
            </Box>
          </MediaBody>
        </MediaObject>
      </Box>

      <Box paddingX="space40">
        <Heading as="h2" variant="heading40">
          Text contrast pairings
        </Heading>
      </Box>

      {textContrastRating.map((rating) => {
        return (
          <TokenPairRating
            key={`text-${rating.background}-${rating.foreground}`}
            contrast={rating.contrast}
            background={rating.background}
            foreground={rating.foreground}
            rating={rating.aa ? 'pass' : 'fail'}
            variant="text"
          />
        );
      })}

      <Box paddingX="space40" marginTop="space70">
        <Heading as="h2" variant="heading40">
          UI control contrast pairings
        </Heading>
      </Box>

      {uiControlContrastRating.map((rating) => {
        return (
          <TokenPairRating
            key={`control-${rating.background}-${rating.foreground}`}
            contrast={rating.contrast}
            background={rating.background}
            foreground={rating.foreground}
            rating={rating.aaLarge ? 'pass' : 'fail'}
            variant="control"
          />
        );
      })}
    </>
  );
};
