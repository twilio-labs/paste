import * as React from 'react';
import styled from '@emotion/styled';
import {Absolute} from '@twilio-paste/absolute';

interface AspectRatioProps {
  ratio: string;
  children: NonNullable<React.ReactNode>;
}

const RATIO_REGEX = /^(\d+:\d*)$/;

const isCorrectPattern = (ratio: string): boolean => RATIO_REGEX.test(ratio);

const handlePropValidation = ({ratio}: AspectRatioProps): void => {
  const hasRatio = ratio != null && ratio !== '';

  if (!hasRatio) {
    throw new Error(`[Paste: AspectRatio] Missing 'ratio' prop.`);
  }

  if (!isCorrectPattern(ratio)) {
    throw new Error(`[Paste: AspectRatio] 'ratio' is invalid. Use a colon separated number pattern (4:3).`);
  }
};

const AspectRatioContainer = styled.div`
  position: relative;
`;

const AspectRatio: React.FC<AspectRatioProps> = props => {
  handlePropValidation(props);

  const aspectArray = props.ratio.split(':').map(Number);
  const aspectPercent = (aspectArray[1] / aspectArray[0]) * 100;

  return (
    <AspectRatioContainer style={{paddingBottom: `${aspectPercent}%`}}>
      <Absolute>{props.children}</Absolute>
    </AspectRatioContainer>
  );
};

AspectRatio.defaultProps = {
  ratio: '4:3',
};

export {AspectRatio};
