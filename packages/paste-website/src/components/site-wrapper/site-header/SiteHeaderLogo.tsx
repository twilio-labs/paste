import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {useTheme} from '@twilio-paste/theme';
import {PasteIcon} from '../../icons/PasteIcon';
import {PasteIconPride} from '../../icons/PasteIconPride';

interface StyledLinkProps {
  href: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const StyledLink: React.FC<StyledLinkProps> = ({children, ...props}) => {
  return (
    <Box
      {...props}
      as="a"
      textDecoration="none"
      color="colorTextInverse"
      _hover={{textDecoration: 'underline'}}
      _focus={{boxShadow: 'shadowFocus', borderRadius: 'borderRadius10'}}
      _focusVisible={{outline: 'none'}}
    >
      {children}
    </Box>
  );
};

interface SiteHeaderLogoProps {
  title?: string;
  subtitle?: string;
}

// Note: 'subtitle' isn't passed for the mobile view, so we use that fact
// to render different sizes and spacing in mobile
const SiteHeaderLogo: React.FC<SiteHeaderLogoProps> = ({title, subtitle}) => {
  const theme = useTheme();

  const pastePrideIcon = <PasteIconPride display="block" size={42} />;
  const pasteRedIcon = <PasteIcon color={theme.textColors.colorTextBrandHighlight} display="block" size={42} />;
  const [pasteIcon, setPasteIcon] = React.useState(pastePrideIcon);

  return (
    <Box
      display="flex"
      alignItems="center"
      paddingRight="space70"
      paddingLeft="space70"
      borderRightColor="colorBorderInverseWeaker"
      borderRightStyle="solid"
      borderRightWidth={['borderWidth0', 'borderWidth0', 'borderWidth10']}
      minWidth={subtitle ? 'sizeSidebar' : 'size0'}
    >
      <StyledLink
        href="/"
        onClick={() =>
          trackCustomEvent({
            category: 'Top Navigation',
            action: 'click-paste-logo',
            label: 'Paste logo',
          })
        }
        onMouseEnter={() => setPasteIcon(pasteRedIcon)}
        onMouseLeave={() => setPasteIcon(pastePrideIcon)}
      >
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space40">{pasteIcon}</MediaFigure>
          <MediaBody>
            <Text as="div" fontSize="fontSize40" lineHeight="lineHeight40" color="colorTextInverse">
              {title}
            </Text>
            {subtitle ? (
              <Text
                as="div"
                fontSize="fontSize20"
                fontWeight="fontWeightNormal"
                lineHeight="lineHeight20"
                color="colorTextInverse"
              >
                {subtitle}
              </Text>
            ) : null}
          </MediaBody>
        </MediaObject>
      </StyledLink>
    </Box>
  );
};

export {SiteHeaderLogo};
