import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {styled} from '@twilio-paste/styling-library';

export interface AspectRatioProps {
  /**
   * Determines the aspect ratio of the element. Use a colon-separated number pattern (width:height).
   *
   * @type {string}
   * @memberof AspectRatioProps
   */
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
    throw new Error(`[Paste: AspectRatio] 'ratio' is invalid. Use a colon-separated number pattern (4:3).`);
  }
};

const AspectRatioContainer = styled.div`
  position: relative;

  embed,
  iframe,
  object,
  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>((props, ref) => {
  handlePropValidation(props);

  const aspectArray = props.ratio.split(':').map(Number);
  const aspectPercent = (aspectArray[1] / aspectArray[0]) * 100;

  return (
    <AspectRatioContainer ref={ref} style={{paddingBottom: `${aspectPercent}%`}}>
      <Box position="absolute" top={0} right={0} bottom={0} left={0}>
        {props.children}
      </Box>
    </AspectRatioContainer>
  );
});

AspectRatio.displayName = 'AspectRatio';

export {AspectRatio};
