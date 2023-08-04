import {styled, css} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import type {ThemeShape} from '@twilio-paste/theme';

import {getColorToken} from './helpers';
import type {SliderThumbProps} from './SliderThumb';

interface StyledTrackProps extends SliderThumbProps {
  theme?: ThemeShape;
}

export const StyledTrack = styled(Box)<StyledTrackProps>(({theme, left = '0%', ...props}) => {
  const token = getColorToken(props);

  return css({
    backgroundImage: `linear-gradient(90deg, ${theme.backgroundColors[token]} ${left},  ${theme.backgroundColors.colorBackgroundStrong} ${left})`,
  });
});
