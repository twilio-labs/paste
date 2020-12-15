import Link from 'next/link';
import {Anchor} from '@twilio-paste/core/anchor';
import {Text} from '@twilio-paste/core/text';
import {Box} from '@twilio-paste/core/box';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/core/media-object';
import {styled} from '@twilio-paste/core/styling-library';
import {useTheme} from '@twilio-paste/core/theme';
import {PasteIconInverse} from './PasteIconInverse';

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;

// Note: 'subtitle' isn't passed for the mobile view, so we use that fact
// to render different sizes and spacing in mobile
const SiteHeaderLogo = ({title, subtitle}) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      paddingX="space70"
      paddingY="space50"
      minWidth={subtitle ? 'sizeSidebar' : 'size0'}
    >
      <MediaObject verticalAlign="center">
        <MediaFigure spacing={subtitle ? 'space40' : 'space0'}>
          <PasteIconInverse color={theme.textColors.colorTextInverse} display="block" size={42} />
        </MediaFigure>
        <MediaBody>
          <Text as="div" fontSize="fontSize40" lineHeight="lineHeight40" color="colorTextInverse">
            <Link href="/edit">
              <StyledA>{title}</StyledA>
            </Link>
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
