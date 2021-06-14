import * as React from 'react';
import {Link} from 'gatsby';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {styled} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';
import {PasteIconInverse} from '../../icons/PasteIconInverse';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;

interface SiteHeaderLogoProps {
  title?: string;
  subtitle?: string;
}

// Note: 'subtitle' isn't passed for the mobile view, so we use that fact
// to render different sizes and spacing in mobile
const SiteHeaderLogo: React.FC<SiteHeaderLogoProps> = ({title, subtitle}) => {
  const theme = useTheme();
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
      <MediaObject verticalAlign="center">
        <MediaFigure spacing={subtitle ? 'space40' : 'space0'}>
          <PasteIconInverse color={theme.textColors.colorTextInverse} display="block" size={42} />
        </MediaFigure>
        <MediaBody>
          <Text as="div" fontSize="fontSize40" lineHeight="lineHeight40" color="colorTextInverse">
            <StyledLink
              to="/"
              onClick={() =>
                trackCustomEvent({
                  category: 'Top Navigation',
                  action: 'click-paste-logo',
                  label: 'Paste logo',
                })
              }
            >
              {title}
            </StyledLink>
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
    </Box>
  );
};

export {SiteHeaderLogo};
