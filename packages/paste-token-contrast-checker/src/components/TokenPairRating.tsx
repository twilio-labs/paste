import * as React from 'react';
import type {BackgroundColorOptions, BorderColorOptions, TextColorOptions} from '@twilio-paste/core/style-props';
import {useUIDSeed} from '@twilio-paste/core/uid-library';
import {Box} from '@twilio-paste/core/box';
import {Truncate} from '@twilio-paste/core/truncate';
import {MediaBody, MediaFigure, MediaObject} from '@twilio-paste/core/media-object';
import {SuccessIcon} from '@twilio-paste/icons/cjs/SuccessIcon';
import {ErrorIcon} from '@twilio-paste/icons/cjs/ErrorIcon';
import {InformationIcon} from '@twilio-paste/icons/cjs/InformationIcon';

import camelCase from 'lodash/camelCase';

interface ContrastRatioProps {
  ratio: number;
}
const ContrastRatio: React.FC<ContrastRatioProps> = ({ratio}) => (
  <Box width="80px" textAlign="right">
    <Box as="span" fontSize="fontSize40" fontWeight="fontWeightBold">
      {Math.round(ratio * 100) / 100}
    </Box>
    : 1
  </Box>
);

export interface TokenPairRatingProps {
  background: string;
  contrast: number;
  foreground: string;
  rating: 'pass' | 'fail';
  variant: 'text' | 'control';
}

const TokenPairRating: React.FC<TokenPairRatingProps> = ({foreground, background, rating, contrast, variant}) => {
  const uidSeed = useUIDSeed();
  return (
    <Box
      borderStyle="solid"
      borderWidth="borderWidth0"
      borderTopWidth="borderWidth10"
      borderTopColor="colorBorderLight"
      paddingX="space40"
    >
      <MediaObject verticalAlign="center" key={uidSeed('text')}>
        <MediaFigure spacing="space30">
          {rating === 'pass' ? (
            <SuccessIcon decorative={false} color="colorTextSuccess" title="Passing contrast" />
          ) : (
            <ErrorIcon decorative={false} color="colorTextError" title="Not passing contrast" />
          )}
        </MediaFigure>
        <MediaBody>
          <Box
            backgroundColor={camelCase(background) as BackgroundColorOptions}
            color={camelCase(foreground) as TextColorOptions}
            padding="space40"
            minWidth="0"
            display="flex"
            flexDirection="column"
          >
            <Box
              borderStyle="solid"
              borderWidth={variant === 'control' ? 'borderWidth10' : 'borderWidth0'}
              borderColor={camelCase(foreground) as BorderColorOptions}
              display="flex"
              padding={variant === 'control' ? 'space20' : null}
              alignItems="center"
            >
              {variant === 'control' && <InformationIcon decorative={false} title="Test Icon" />}
              <Box minWidth="0" marginLeft="space20">
                <div>
                  <Truncate title={foreground}>{foreground}</Truncate>
                </div>
                <div>on</div>
                <div>
                  <Truncate title={background}>{background}</Truncate>
                </div>
              </Box>
            </Box>
          </Box>
        </MediaBody>
        <MediaFigure spacing="space30">
          <ContrastRatio ratio={contrast} />
        </MediaFigure>
      </MediaObject>
    </Box>
  );
};

export {TokenPairRating};
