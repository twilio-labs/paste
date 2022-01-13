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
      position="relative"
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
  const [logoOpacity, setLogoOpacity] = React.useState(1);
  const [hoverOpacity, setHoverOpacity] = React.useState(0);
  const logoTransition = 'ease-out 350ms';

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
        onMouseEnter={() => {
          setLogoOpacity(0);
          setHoverOpacity(1);
        }}
        onMouseLeave={() => {
          setLogoOpacity(1);
          setHoverOpacity(0);
        }}
      >
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space40">
            <PasteIconPride display="block" size={42} transition={logoTransition} opacity={logoOpacity} />
            <PasteIcon
              color={theme.textColors.colorTextBrandHighlight}
              opacity={hoverOpacity}
              transition={logoTransition}
              display="block"
              position="absolute"
              top="0"
              left="0"
              size={42}
            />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontSize="fontSize40" lineHeight="lineHeight30" color="colorTextInverse">
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
