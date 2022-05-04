import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {Button} from '@twilio-paste/button';
import {useTheme, DefaultTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import type {IconSize, TextColorOptions} from '@twilio-paste/style-props';
import {styled} from '@twilio-paste/styling-library';

import {Spinner} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Spinner',
  component: Spinner,
  excludeStories: ['LoadingOverlay', 'StyledLoadingOverlay', 'StyledLoadingOverlayContent'],
};

const {textColors: defaultThemeTextColors, iconSizes} = DefaultTheme;

const textColorTokens = Object.keys(defaultThemeTextColors);
const inverse = textColorTokens.filter((tokenName) => tokenName.toLowerCase().includes('inverse'));
const standard = textColorTokens.filter((tokenName) => !tokenName.toLowerCase().includes('inverse'));

export const Colors = (): React.ReactNode => (
  <Box
    display="flex"
    columnGap="space100"
    rowGap="space100"
    maxWidth="size50"
    flexWrap="wrap"
    backgroundColor="colorBackgroundBody"
    paddingX="space80"
    paddingY="space80"
  >
    {standard.map((color) => (
      <Spinner
        decorative={false}
        size="sizeIcon60"
        title={color}
        color={color as TextColorOptions}
        key={`default-${color}`}
      />
    ))}
  </Box>
);

export const InverseColors = (): React.ReactNode => (
  <Box
    display="flex"
    rowGap="space100"
    maxWidth="size50"
    backgroundColor="colorBackgroundBodyInverse"
    justifyContent="space-between"
    paddingX="space80"
    paddingY="space80"
  >
    {inverse.map((color) => (
      <Spinner
        decorative={false}
        size="sizeIcon60"
        title={color}
        color={color as TextColorOptions}
        key={`default-inverse-${color}`}
      />
    ))}
  </Box>
);

export const Sizes: React.ReactNode = () => (
  <Box display="flex" marginX="space80" paddingY="space80" alignItems="center" justifyContent="space-between">
    {Object.keys(iconSizes).map((iconSize) => (
      <Spinner decorative={false} title={iconSize} size={iconSize as IconSize} key={`dark-${iconSize}`} />
    ))}
  </Box>
);

const StyledLoadingOverlay = styled.div({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.7)',
});
const StyledLoadingOverlayContent = styled.div({
  position: 'fixed',
  top: '50%',
  display: 'flex',
});
interface LoadingOverlayProps {
  isOpen: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({isOpen, children}) => {
  if (isOpen) {
    return (
      <StyledLoadingOverlay>
        <StyledLoadingOverlayContent>
          <Box display="flex" flexDirection="column">
            {children}
          </Box>
        </StyledLoadingOverlayContent>
      </StyledLoadingOverlay>
    );
  }

  return null;
};

export const InFullscreenOverlay: React.ReactNode = () => {
  const countdown = 7;
  const timeoutTime = countdown * 1000;
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpenOnClick = (): void => setIsOpen(true);

  const [seconds, updateSeconds] = React.useState(countdown);

  const decrementSeconds = (): void => {
    updateSeconds((state: number) => state - 1);
  };

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (isOpen) {
      timeout = setTimeout((): void => setIsOpen(false), timeoutTime);
      interval = setInterval(decrementSeconds, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
        clearInterval(interval);
      }
    };
  }, [isOpen, setIsOpen]);

  return (
    <Box>
      <Button variant="secondary" onClick={handleOpenOnClick}>
        Open loading overlay
      </Button>

      {isOpen ? (
        <StyledLoadingOverlay>
          <StyledLoadingOverlayContent>
            <ScreenReaderOnly>Spinner example with full page overlay, {seconds} seconds remain.</ScreenReaderOnly>
            <Spinner size="sizeIcon80" decorative={false} title="Loading logs..." color="colorTextInverse" />
          </StyledLoadingOverlayContent>
        </StyledLoadingOverlay>
      ) : null}
    </Box>
  );
};

export const CustomizedSpinner = (): React.ReactNode => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      theme={currentTheme}
      elements={{
        SPINNER: {
          color: 'colorTextIconSuccess',
        },
        CUSTOM_SPINNER_A: {
          size: 'sizeIcon80',
          backgroundColor: 'colorBackgroundBrand',
          color: 'colorTextInverse',
          alignSelf: 'flex-start',
          padding: 'space20',
        },
        CUSTOM_SPINNER_B: {
          size: 'sizeIcon60',
          alignSelf: 'flex-end',
          color: 'colorTextNew',
        },
      }}
    >
      <Box width="50%">
        <Card>
          <Box display="flex" justifyContent="space-between" alignItems="center" padding="space40">
            <Spinner
              data-testid="default-name-customization"
              color="colorText"
              title="Example of a customized spinner with default element name"
              decorative={false}
            />

            {/* Note: color passed here is ignored due to customization rules above */}
            <Spinner
              data-testid="unique-name-customization-a"
              element="CUSTOM_SPINNER_A"
              color="colorText"
              title="Example of a customized spinner with unique element name A"
              decorative={false}
            />

            {/* Note: color passed here is ignored due to customization rules above */}
            <Spinner
              data-testid="unique-name-customization-b"
              element="CUSTOM_SPINNER_B"
              color="colorText"
              title="Example of a customized spinner with unique element name A"
              decorative={false}
            />
          </Box>
        </Card>
      </Box>
    </CustomizationProvider>
  );
};
