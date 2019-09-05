import * as React from 'react';
import styled from '@emotion/styled';
import {Absolute} from '@twilio-paste/absolute';
import {Box} from '@twilio-paste/box';

interface AspectRatioProps {
  aspectRatio: string;
  children: React.ReactElement;
}

const RATIO_REGEX = /^(\d+:\d*)$/;

const isCorrectPattern = (ratio: string): boolean => RATIO_REGEX.test(ratio);

const handlePropValidation = ({aspectRatio, children}: AspectRatioProps): void => {
  const hasRatio = aspectRatio != null && aspectRatio !== '';

  if (!hasRatio) {
    throw new Error(`[Paste: AspectRatio] Missing hasRatio prop for AspectRatio.`);
  }

  if (!isCorrectPattern(aspectRatio)) {
    throw new Error(
      `[Paste: AspectRatio] hasRatio prop for AspectRatio is incorrect. Use a colon separated number pattern like 4:3.`
    );
  }

  if (children == null) {
    throw new Error(`[Paste: AspectRatio] Must have non-null children.`);
  }
};

const AspectRatioContainer = styled(Box)`
  position: relative;
  min-width: auto;
`;

const AspectRatio: React.FC<AspectRatioProps> = props => {
  handlePropValidation(props);

  const aspectArray = props.aspectRatio.split(':').map(Number);
  const aspectPercent = (aspectArray[1] / aspectArray[0]) * 100;

  return (
    <AspectRatioContainer css={{paddingBottom: `${aspectPercent}%`}}>
      <Absolute>{props.children}</Absolute>
    </AspectRatioContainer>
  );
};

AspectRatio.defaultProps = {
  aspectRatio: '4:3',
};

export {AspectRatio};
