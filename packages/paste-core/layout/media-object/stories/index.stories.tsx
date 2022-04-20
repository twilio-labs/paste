import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Truncate} from '@twilio-paste/truncate';
import type {ThemeShape} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {MediaObject, MediaFigure, MediaBody} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Layout/Media Object',
  component: MediaObject,
  subcomponents: {MediaFigure, MediaBody},
  argTypes: {verticalAlign: {defaultValue: 'top'}},
};

export const Default = (): React.ReactNode => {
  const spaceValue = 'space20' as keyof ThemeShape['space'];
  const marginBottomValue = 'space0' as keyof ThemeShape['space'];
  const marginTopValue = 'space0' as keyof ThemeShape['space'];
  const verticalAlignValue = 'top';
  const asValue = 'span' as keyof JSX.IntrinsicElements;
  return (
    <MediaObject
      as={asValue}
      verticalAlign={verticalAlignValue}
      marginBottom={marginBottomValue}
      marginTop={marginTopValue}
    >
      <MediaFigure as={asValue} spacing={spaceValue}>
        <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
      </MediaFigure>
      <MediaBody as={asValue}>
        <Text as="p">We&apos;ve enabled new security options for your account.</Text>
      </MediaBody>
    </MediaObject>
  );
};

export const DoubleFigure = (): React.ReactNode => {
  const spaceValue = 'space20' as keyof ThemeShape['space'];
  const marginBottomValue = 'space0' as keyof ThemeShape['space'];
  const marginTopValue = 'space0' as keyof ThemeShape['space'];
  const verticalAlignValue = 'top';
  const asValue = 'span' as keyof JSX.IntrinsicElements;
  return (
    <MediaObject
      as={asValue}
      verticalAlign={verticalAlignValue}
      marginBottom={marginBottomValue}
      marginTop={marginTopValue}
    >
      <MediaFigure as={asValue} spacing={spaceValue}>
        <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
      </MediaFigure>
      <MediaBody as={asValue}>
        <Text as="p">Please update your billing information or we&apos;ll suspend your account on March 2.</Text>
      </MediaBody>
      <MediaFigure as={asValue} align="end" spacing={spaceValue}>
        <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
      </MediaFigure>
    </MediaObject>
  );
};

export const ConstrainedWidth = (): React.ReactNode => {
  return (
    <Box width="size60">
      <MediaObject as="div" verticalAlign="center">
        <MediaFigure as="div" spacing="space100">
          <Box backgroundColor="colorBackgroundSuccess" size="size20" />
        </MediaFigure>
        <MediaBody as="div">
          <Text as="p">You can now set up your contact preferences on your dashboard.</Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </MediaBody>
        <MediaFigure as="div" align="end" spacing="space70">
          <Box backgroundColor="colorBackgroundSuccess" height="size10" minWidth="size10" />
        </MediaFigure>
      </MediaObject>
    </Box>
  );
};

export const CustomMediaObject: React.FC = () => {
  return (
    <>
      <MediaObject as="div" verticalAlign="center">
        <MediaFigure as="div" spacing="space100">
          <Box backgroundColor="colorBackgroundDestructiveWeak" size="size20" />
        </MediaFigure>
        <MediaBody as="div">
          <Text as="p">We&apos;ve enabled new security options for your account.</Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </MediaBody>
        <MediaFigure as="div" align="end" spacing="space70">
          <Box backgroundColor="colorBackgroundDestructiveWeak" height="size10" minWidth="size10" />
        </MediaFigure>
      </MediaObject>
      <Box marginTop="space60" marginBottom="space60">
        <Text as="span">Customized</Text>
      </Box>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          MEDIA_OBJECT: {
            backgroundColor: 'colorBackground',
            padding: 'space30',
          },
          MEDIA_FIGURE: {
            backgroundColor: 'colorBackgroundSuccess',
            padding: 'space30',
          },
          MEDIA_BODY: {
            backgroundColor: 'colorBackgroundPrimaryWeaker',
          },
        }}
      >
        <MediaObject as="div" verticalAlign="center">
          <MediaFigure as="div" spacing="space100">
            <Box backgroundColor="colorBackgroundDestructiveWeak" size="size20" />
          </MediaFigure>
          <MediaBody as="div">
            <Text as="p">You can now set up your contact preferences on your dashboard.</Text>
            <Text as="p">
              <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
                http://www.extremelylongurlthatmightbreakthelayout.com
              </Truncate>
            </Text>
          </MediaBody>
          <MediaFigure as="div" align="end" spacing="space70">
            <Box backgroundColor="colorBackgroundDestructiveWeak" height="size10" minWidth="size10" />
          </MediaFigure>
        </MediaObject>
      </CustomizationProvider>
      <Box marginTop="space60" marginBottom="space60">
        <Text as="span">Customized element</Text>
      </Box>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          NEW_MEDIA_OBJECT: {
            backgroundColor: 'colorBackgroundPrimaryWeakest',
            borderRadius: 'borderRadius30',
            padding: 'space60',
          },
          NEW_MEDIA_FIGURE: {
            backgroundColor: 'colorBackgroundPrimary',
            borderRadius: 'borderRadius30',
            padding: 'space60',
          },
          ANOTHER_NEW_MEDIA_FIGURE: {
            backgroundColor: 'colorBackgroundStrongest',
            padding: 'space90',
          },
          NEW_MEDIA_BODY: {
            backgroundColor: 'colorBackgroundBrandHighlightWeakest',
            borderRadius: 'borderRadius30',
            padding: 'space60',
          },
        }}
      >
        <MediaObject as="div" element="NEW_MEDIA_OBJECT" verticalAlign="center">
          <MediaFigure as="div" element="NEW_MEDIA_FIGURE" spacing="space100">
            <Box backgroundColor="colorBackgroundDestructiveWeak" size="size20" />
          </MediaFigure>
          <MediaBody element="NEW_MEDIA_BODY" as="div">
            <Text as="p">Please update your billing information or we&apos;ll suspend your account on March 2.</Text>
            <Text as="p">
              <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
                http://www.extremelylongurlthatmightbreakthelayout.com
              </Truncate>
            </Text>
          </MediaBody>
          <MediaFigure element="ANOTHER_NEW_MEDIA_FIGURE" as="div" align="end" spacing="space70">
            <Box backgroundColor="colorBackgroundDestructiveWeak" height="size10" minWidth="size10" />
          </MediaFigure>
        </MediaObject>
      </CustomizationProvider>
    </>
  );
};

ConstrainedWidth.story = {
  name: 'Constrained width',
};
