import * as React from 'react';
import type {ThemeShape} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Separator} from '@twilio-paste/separator';
import {Text} from '@twilio-paste/text';
import {Box} from '../src';
import {CustomizableBoxExample} from '../__fixtures__/CustomizableBox';

const demoString = `I'm some text in a box`;

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Box',
  component: Box,
};

export const Default = (): React.ReactNode => {
  const backgroudColorValue = 'colorBackgroundPrimaryWeak' as keyof ThemeShape['backgroundColors'];

  const borderRadiusValue = 'borderRadius20' as keyof ThemeShape['radii'];
  const borderTopLeftRadiusValue = '' as keyof ThemeShape['radii'];
  const borderTopRightRadiusValue = '' as keyof ThemeShape['radii'];
  const borderBottomLeftRadiusValue = '' as keyof ThemeShape['radii'];

  const borderBottomRightRadiusValue = '' as keyof ThemeShape['radii'];

  const borderWidthValue = '' as keyof ThemeShape['borderWidths'];
  const borderTopWidthValue = '' as keyof ThemeShape['borderWidths'];
  const borderRightWidthValue = '' as keyof ThemeShape['borderWidths'];
  const borderBottomWidthValue = '' as keyof ThemeShape['borderWidths'];
  const borderLeftWidthValue = '' as keyof ThemeShape['borderWidths'];
  const borderColorValue = 'colorBorderPrimaryStrong' as keyof ThemeShape['borderColors'];
  const borderStyleValue = 'solid';

  const paddingValue = 'space20' as keyof ThemeShape['space'];
  const marginValue = 'space40' as keyof ThemeShape['space'];

  const widthValue = '' as keyof ThemeShape['widths'];
  const minWidthValue = '' as keyof ThemeShape['minWidths'];
  const maxWidthValue = '' as keyof ThemeShape['maxWidths'];
  const heightValue = 'size10' as keyof ThemeShape['heights'];
  const minHeightValue = '' as keyof ThemeShape['minHeights'];
  const maxHeightValue = '' as keyof ThemeShape['maxHeights'];

  const boxShadowValue = '' as keyof ThemeShape['shadows'];
  const zIndexValue = '' as keyof ThemeShape['zIndices'];
  const displayValue = 'block';
  const overflowValue = 'hidden';

  return (
    <Box
      backgroundColor={backgroudColorValue}
      borderRadius={borderRadiusValue}
      borderTopLeftRadius={borderTopLeftRadiusValue}
      borderTopRightRadius={borderTopRightRadiusValue}
      borderBottomLeftRadius={borderBottomLeftRadiusValue}
      borderBottomRightRadius={borderBottomRightRadiusValue}
      borderWidth={borderWidthValue}
      borderTopWidth={borderTopWidthValue}
      borderRightWidth={borderRightWidthValue}
      borderBottomWidth={borderBottomWidthValue}
      borderLeftWidth={borderLeftWidthValue}
      borderStyle={borderStyleValue}
      borderColor={borderColorValue}
      width={widthValue}
      minWidth={minWidthValue}
      maxWidth={maxWidthValue}
      height={heightValue}
      minHeight={minHeightValue}
      maxHeight={maxHeightValue}
      margin={marginValue}
      padding={paddingValue}
      boxShadow={boxShadowValue}
      display={displayValue}
      zIndex={zIndexValue}
      overflow={overflowValue}
    >
      <Text as="p" color="colorText">
        {demoString}
      </Text>
    </Box>
  );
};

export const Responsive = (): React.ReactNode => {
  return (
    <Box
      backgroundColor={['colorBackgroundPrimaryWeak', 'colorBackgroundPrimary']}
      padding={['space20', 'space70']}
      height={['size10', 'size20']}
    >
      <Text as="p" color="colorText">
        DO NOTE: width is not currently responsive due to a bug in Styled System v4. To be fixed in an upgrade.
      </Text>
    </Box>
  );
};

export const PseudoClassesWithProps = (): React.ReactNode => {
  return (
    <Box
      backgroundColor="colorBackgroundPrimaryWeak"
      height="size20"
      position="relative"
      _hover={{padding: 'space20', backgroundColor: 'colorBackgroundPrimaryWeaker'}}
      _first={{margin: 'space10'}}
      _before={{content: `"Before text"`, position: 'absolute', bottom: 0, left: 0}}
      _after={{content: `"After text"`, position: 'absolute', bottom: 0, right: 0}}
    >
      <Text as="p" color="colorText">
        Hover this box
      </Text>
    </Box>
  );
};

PseudoClassesWithProps.story = {
  name: 'Pseudo-classes with props',
};

const CustomBoxCollection: React.FC = () => {
  return (
    <>
      <CustomizableBoxExample element="RECTANGLE">base</CustomizableBoxExample>
      <CustomizableBoxExample element="RECTANGLE" variant="secondary">
        secondary
      </CustomizableBoxExample>
      <CustomizableBoxExample element="RECTANGLE" variant="primary">
        primary
      </CustomizableBoxExample>
      <CustomizableBoxExample element="SQUARE">base</CustomizableBoxExample>
      <CustomizableBoxExample element="SQUARE" variant="secondary">
        secondary
      </CustomizableBoxExample>
      <CustomizableBoxExample element="SQUARE" variant="primary">
        primary
      </CustomizableBoxExample>
    </>
  );
};

export const CustomBox: React.FC = () => {
  return (
    <>
      <CustomBoxCollection />
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <CustomizationProvider
        baseTheme="default"
        elements={{
          RECTANGLE: {
            borderRadius: 'borderRadius20',
            variants: {
              primary: {
                backgroundColor: 'colorBackgroundPrimary',
                padding: 'space30',
                textDecoration: 'underline',
              },
              secondary: {
                backgroundColor: 'colorBackgroundSuccess',
                margin: 'space30',
              },
            },
          },
          SQUARE: {
            padding: 'space20',
            ':hover': {
              backgroundColor: 'colorBackgroundSuccess',
              cursor: 'pointer',
            },
            variants: {
              primary: {
                color: 'colorTextNew',
                ':hover': {
                  backgroundColor: 'colorBackgroundWarning',
                },
              },
              secondary: {
                color: 'colorTextWarning',
                ':hover': {
                  backgroundColor: 'colorBackgroundError',
                },
              },
            },
          },
        }}
      >
        <Box element="CARD">Customized</Box>
        <CustomBoxCollection />
      </CustomizationProvider>
    </>
  );
};
