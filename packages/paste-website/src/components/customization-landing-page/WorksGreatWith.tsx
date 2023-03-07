import {Text} from '@twilio-paste/text';
import {Grid, Column} from '@twilio-paste/grid';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {css} from '@twilio-paste/styling-library';

import {FlexCard} from './FlexCard';
import {ComingSoonCard} from './ComingSoonCard';
import {ReactCard} from './ReactCard';
import {LandingPageSectionContent} from './LandingPageLayoutUtils';
import {DoodleLoopArrow} from '../../assets/illustrations/DoodleLoopArrow';

export const WorksGreatWith = (): JSX.Element => {
  const {backgroundColors, ...theme} = useTheme();
  return (
    <Box
      as="section"
      css={css({
        background: `linear-gradient(90deg, ${backgroundColors.colorBackgroundBrand} 0%, ${backgroundColors.colorBackgroundBrandStrong} 100%)`,
        clipPath: 'polygon(0px 80px,100% 0,100% 100%,0 100%)',
        marginTop: '-80px',
        paddingTop: ['120px', '130px', '150px'],
        paddingBottom: ['space90', 'space120', 'space200'],
        position: 'relative',
        paddingX: ['space90', 'space120', 'space190'],
      })(theme)}
    >
      <LandingPageSectionContent variant="default">
        <Box position="relative">
          <Text
            as="h2"
            color="colorTextInverse"
            fontSize={['fontSize70', 'fontSize90', 'fontSize90']}
            lineHeight={['lineHeight70', 'lineHeight90', 'lineHeight90']}
            marginBottom={['space30', 'space170', 'space170']}
            position="relative"
          >
            <Box as="span" display="flex" columnGap="space70" alignItems="flex-start">
              Works great with
              <Box as="span" display={['none', 'none', 'block']}>
                <DoodleLoopArrow />
              </Box>
            </Box>
          </Text>
        </Box>
        <Grid equalColumnHeights gutter="space40" vertical={[true, false, false]}>
          <Column span={[12, 4, 4]}>
            <FlexCard />
          </Column>
          <Column span={[12, 4, 4]}>
            <ComingSoonCard />
          </Column>
          <Column span={[12, 4, 4]}>
            <ReactCard />
          </Column>
        </Grid>
      </LandingPageSectionContent>
    </Box>
  );
};
