import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {styled} from '@twilio-paste/styling-library';
import {Link} from 'gatsby';
import {PasteIcon} from '../../icons/PasteIcon';
import {TWILIO_RED} from '../../../constants';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;

interface SidebarHeaderProps {
  siteTitle?: string;
  siteSubTitle?: string;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = props => {
  return (
    <Box
      borderBottomColor="colorBorderLight"
      borderBottomStyle="solid"
      borderBottomWidth="borderWidth20"
      paddingBottom="space70"
      paddingLeft="space40"
      paddingRight="space40"
      marginBottom="space40"
    >
      <MediaObject verticalAlign="center">
        <MediaFigure spacing="space40">
          <PasteIcon color={TWILIO_RED} display="block" size={42} />
        </MediaFigure>
        <MediaBody>
          <Text as="h2" fontSize="fontSize60" lineHeight="lineHeight60">
            <StyledLink to="/">{props.siteTitle}</StyledLink>
          </Text>
          <Text as="h3" fontSize="fontSize20" lineHeight="lineHeight20" color="colorTextPlaceholder">
            {props.siteSubTitle}
          </Text>
        </MediaBody>
      </MediaObject>
    </Box>
  );
};

export {SidebarHeader};
