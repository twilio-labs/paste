import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {useTheme, DefaultTheme} from '@twilio-paste/theme';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs';
import type {IconSize, TextColor} from '@twilio-paste/style-props';
import {styled} from '@twilio-paste/styling-library';

import {Spinner} from '../src/v2';
import type {ButtonVariants} from '../../button/dist/types';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/New Spinner',
  decorators: [withKnobs],
  component: Spinner,
  excludeStories: ['LoadingOverlay', 'StyledLoadingOverlay', 'StyledLoadingOverlayContent'],
};

export const Default = (): React.ReactNode => {
  const {textColors, iconSizes} = useTheme();
  const colorOptions = React.useMemo(() => Object.keys(textColors), [textColors]);
  const sizeOptions = React.useMemo(() => Object.keys(iconSizes), [iconSizes]);
  const colorValue = select('color', colorOptions, 'currentColor') as TextColor;
  const sizeValue = select('size', sizeOptions, 'sizeIcon20') as IconSize;
  const decorativeValue = boolean('decorative', false);

  return (
    <Spinner
      color={colorValue as string}
      size={sizeValue as string}
      title={text('title', 'Now loading')}
      decorative={decorativeValue}
    />
  );
};

export const Responsive = (): React.ReactNode => {
  return <Spinner color="colorTextIcon" title={text('title', 'Now loading')} decorative={false} />;
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
      <Spinner decorative={false} size="sizeIcon60" title={color} color={color} key={`default-${color}`} />
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
      <Spinner decorative={false} size="sizeIcon60" title={color} color={color} key={`default-inverse-${color}`} />
    ))}
  </Box>
);

export const Sizes: React.ReactNode = () => (
  <Box display="flex" marginX="space80" paddingY="space80" alignItems="center" justifyContent="space-between">
    {Object.keys(iconSizes).map((iconSize) => (
      <Spinner decorative={false} title={iconSize} size={iconSize} key={`dark-${iconSize}`} />
    ))}
  </Box>
);

const buttonVariants: ButtonVariants[] = ['primary', 'secondary', 'destructive', 'destructive_secondary'];

export const InButton: React.ReactNode = () => (
  <Box display="flex" flexDirection="column" rowGap="space80" maxWidth="size50">
    <Box display="inherit" alignItems="center" justifyContent="space-between" maxHeight="min-content">
      {buttonVariants.map((variant) => (
        <Button disabled size="icon_small" variant={variant}>
          <Spinner color="currentColor" key={`dark-${variant}`} />
        </Button>
      ))}
    </Box>
    <Box display="flex" alignItems="center" justifyContent="space-between" maxHeight="min-content">
      {buttonVariants.map((variant) => (
        <Button size="icon_small" variant={variant}>
          <Spinner color="currentColor" key={`dark-${variant}`} />
        </Button>
      ))}
    </Box>
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
  top: '30%',
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
          <Box>{children}</Box>
        </StyledLoadingOverlayContent>
      </StyledLoadingOverlay>
    );
  }

  return null;
};

export const InFullscreenOverlay: React.ReactNode = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenOnClick = (): void => setIsOpen(true);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOpen) {
      timeout = setTimeout((): void => setIsOpen(false), 4000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
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
            <Spinner size="sizeIcon80" title="Loading logs..." color="colorTextInverse" />
          </StyledLoadingOverlayContent>
        </StyledLoadingOverlay>
      ) : null}
    </Box>
  );
};
