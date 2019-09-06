import * as React from 'react';
import styled from '@emotion/styled';
import {Absolute} from '@twilio-paste/absolute';
import {Box} from '@twilio-paste/box';

interface AspectRatioProps {
  aspectRatio: string;
  children: NonNullable<React.ReactNode>;
}

const RATIO_REGEX = /^(\d+:\d*)$/;

const isCorrectPattern = (ratio: string): boolean => RATIO_REGEX.test(ratio);

const handlePropValidation = ({aspectRatio, children}: AspectRatioProps): void => {
  const hasRatio = aspectRatio != null && aspectRatio !== '';

  if (!hasRatio) {
    throw new Error(`[Paste: AspectRatio] Missing 'aspectRatio' prop.`);
  }

  if (!isCorrectPattern(aspectRatio)) {
    throw new Error(`[Paste: AspectRatio] 'aspectRatio' is invalid. Use a colon separated number pattern (4:3).`);
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
