import * as React from 'react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Truncate} from '@twilio-paste/truncate';
import {DefaultTheme} from '@twilio-paste/theme';
import type {ThemeShape} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {MediaObject, MediaFigure, MediaBody} from '../src';
import {CustomizableMediaObject} from '../__fixtures__/CustomizableMediaObject';
import {CustomizableMediaFigure} from '../__fixtures__/CustomizableMediaFigure';
import {CustomizableMediaBody} from '../__fixtures__/CustomizableMediaBody';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Layout/Media Object',
  decorators: [withKnobs],
  component: MediaObject,
  subcomponents: {MediaFigure, MediaBody},
  argTypes: {verticalAlign: {defaultValue: 'top'}},
};

export const Default = (): React.ReactNode => {
  const spaceValue = select('spacing', Object.keys(DefaultTheme.space), 'space20') as keyof ThemeShape['space'];
  const marginBottomValue = select(
    'marginBottom',
    Object.keys(DefaultTheme.space),
    'space0'
  ) as keyof ThemeShape['space'];
  const marginTopValue = select('marginTop', Object.keys(DefaultTheme.space), 'space0') as keyof ThemeShape['space'];
  const verticalAlignValue = select('verticalAlign', ['center', 'top'], 'top');
  const asValue = text('as', 'span') as keyof JSX.IntrinsicElements;
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
        <Text as="p">Some media Object body text</Text>
      </MediaBody>
    </MediaObject>
  );
};

export const DoubleFigure = (): React.ReactNode => {
  const spaceValue = select('spacing', Object.keys(DefaultTheme.space), 'space20') as keyof ThemeShape['space'];
  const marginBottomValue = select(
    'marginBottom',
    Object.keys(DefaultTheme.space),
    'space0'
  ) as keyof ThemeShape['space'];
  const marginTopValue = select('marginTop', Object.keys(DefaultTheme.space), 'space0') as keyof ThemeShape['space'];
  const verticalAlignValue = select('verticalAlign', ['center', 'top'], 'top');
  const asValue = text('as', 'span') as keyof JSX.IntrinsicElements;
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
        <Text as="p">Some media Object body text</Text>
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
          <Text as="p">Some media Object body text</Text>
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

const CustomMediaObjectCollection: React.FC = () => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <CustomizableMediaObject as="div" verticalAlign="center">
        <CustomizableMediaFigure as="div" spacing="space100">
          <Box backgroundColor="colorBackgroundDestructiveWeak" size="size20" />
        </CustomizableMediaFigure>
        <CustomizableMediaBody as="div">
          <Text as="p">Some media Object body text</Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </CustomizableMediaBody>
        <CustomizableMediaFigure as="div" align="end" spacing="space70">
          <Box backgroundColor="colorBackgroundDestructiveWeak" height="size10" minWidth="size10" />
        </CustomizableMediaFigure>
      </CustomizableMediaObject>
      <CustomizableMediaObject as="div" verticalAlign="center" variant="secondary">
        <CustomizableMediaFigure as="div" spacing="space100" variant="secondary">
          <Box backgroundColor="colorBackgroundDestructiveWeak" size="size20" />
        </CustomizableMediaFigure>
        <CustomizableMediaBody as="div" variant="secondary">
          <Text as="p">Some media Object body text</Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </CustomizableMediaBody>
        <CustomizableMediaFigure as="div" align="end" spacing="space70" variant="secondary">
          <Box backgroundColor="colorBackgroundDestructiveWeak" height="size10" minWidth="size10" />
        </CustomizableMediaFigure>
      </CustomizableMediaObject>
      <CustomizableMediaObject as="div" verticalAlign="center" variant="primary">
        <CustomizableMediaFigure as="div" spacing="space100" variant="primary">
          <Box backgroundColor="colorBackgroundDestructiveWeak" size="size20" />
        </CustomizableMediaFigure>
        <CustomizableMediaBody as="div" variant="primary">
          <Text as="p">Some media Object body text</Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </CustomizableMediaBody>
        <CustomizableMediaFigure as="div" align="end" spacing="space70" variant="primary">
          <Box backgroundColor="colorBackgroundDestructiveWeak" height="size10" minWidth="size10" />
        </CustomizableMediaFigure>
      </CustomizableMediaObject>
    </Stack>
  );
};

const CustomElementMediaObjectCollection: React.FC = () => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <CustomizableMediaObject as="div" element="NEW_MEDIA_OBJECT" verticalAlign="center">
        <CustomizableMediaFigure as="div" element="NEW_MEDIA_FIGURE" spacing="space100">
          <Box backgroundColor="colorBackgroundDestructiveWeak" size="size20" />
        </CustomizableMediaFigure>
        <CustomizableMediaBody element="NEW_MEDIA_BODY" as="div">
          <Text as="p">Some media Object body text</Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </CustomizableMediaBody>
        <CustomizableMediaFigure element="ANOTHER_NEW_MEDIA_OBJECT" as="div" align="end" spacing="space70">
          <Box backgroundColor="colorBackgroundDestructiveWeak" height="size10" minWidth="size10" />
        </CustomizableMediaFigure>
      </CustomizableMediaObject>
      <CustomizableMediaObject as="div" element="NEW_MEDIA_OBJECT" verticalAlign="center" variant="secondary">
        <CustomizableMediaFigure as="div" element="NEW_MEDIA_FIGURE" spacing="space100" variant="secondary">
          <Box backgroundColor="colorBackgroundDestructiveWeak" size="size20" />
        </CustomizableMediaFigure>
        <CustomizableMediaBody element="NEW_MEDIA_BODY" as="div" variant="secondary">
          <Text as="p">Some media Object body text</Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </CustomizableMediaBody>
        <CustomizableMediaFigure
          element="ANOTHER_NEW_MEDIA_OBJECT"
          as="div"
          align="end"
          spacing="space70"
          variant="secondary"
        >
          <Box backgroundColor="colorBackgroundDestructiveWeak" height="size10" minWidth="size10" />
        </CustomizableMediaFigure>
      </CustomizableMediaObject>
      <CustomizableMediaObject as="div" element="NEW_MEDIA_OBJECT" verticalAlign="center" variant="primary">
        <CustomizableMediaFigure as="div" element="NEW_MEDIA_FIGURE" spacing="space100" variant="primary">
          <Box backgroundColor="colorBackgroundDestructiveWeak" size="size20" />
        </CustomizableMediaFigure>
        <CustomizableMediaBody element="NEW_MEDIA_BODY" as="div" variant="primary">
          <Text as="p">Some media Object body text</Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </CustomizableMediaBody>
        <CustomizableMediaFigure
          element="ANOTHER_NEW_MEDIA_OBJECT"
          as="div"
          align="end"
          spacing="space70"
          variant="primary"
        >
          <Box backgroundColor="colorBackgroundDestructiveWeak" height="size10" minWidth="size10" />
        </CustomizableMediaFigure>
      </CustomizableMediaObject>
    </Stack>
  );
};

export const CustomMediaObject: React.FC = () => {
  return (
    <>
      <CustomMediaObjectCollection />
      <Box marginTop="space60" marginBottom="space60">
        <Text as="span">Customized</Text>
      </Box>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          MEDIA_OBJECT: {
            backgroundColor: 'colorBackground',
            padding: 'space30',
            variants: {
              primary: {
                backgroundColor: 'colorBackgroundPrimary',
                padding: 'space60',
              },
              secondary: {
                backgroundColor: 'colorBackgroundSuccess',
                padding: 'space90',
              },
            },
          },
          MEDIA_FIGURE: {
            backgroundColor: 'colorBackgroundSuccess',
            padding: 'space30',
            variants: {
              primary: {
                backgroundColor: 'colorBackgroundBody',
                padding: 'space30',
              },
              secondary: {
                backgroundColor: 'colorBackgroundBody',
                padding: 'space30',
              },
            },
          },
          MEDIA_BODY: {
            backgroundColor: 'colorBackgroundPrimaryWeaker',
            variants: {
              primary: {
                backgroundColor: 'colorBackgroundNeutralWeakest',
              },
              secondary: {
                backgroundColor: 'colorBackgroundBody',
              },
            },
          },
        }}
      >
        <CustomMediaObjectCollection />
      </CustomizationProvider>
      <Box marginTop="space60" marginBottom="space60">
        <Text as="span">Customized element</Text>
      </Box>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          NEW_MEDIA_OBJECT: {
            backgroundColor: 'colorBackground',
            borderRadius: 'borderRadius30',
            padding: 'space30',
            variants: {
              primary: {
                backgroundColor: 'colorBackgroundPrimary',
                borderRadius: 'borderRadius30',
                padding: 'space60',
              },
              secondary: {
                backgroundColor: 'colorBackgroundSuccess',
                borderRadius: 'borderRadius30',
                padding: 'space90',
              },
            },
          },
          NEW_MEDIA_FIGURE: {
            backgroundColor: 'colorBackgroundSuccess',
            borderRadius: 'borderRadius30',
            padding: 'space30',
            variants: {
              primary: {
                backgroundColor: 'colorBackgroundBody',
                borderRadius: 'borderRadius30',
                padding: 'space30',
              },
              secondary: {
                backgroundColor: 'colorBackgroundBody',
                borderRadius: 'borderRadius30',
                padding: 'space30',
              },
            },
          },
          ANOTHER_NEW_MEDIA_FIGURE: {
            backgroundColor: 'colorBackgroundSuccess',
            padding: 'space60',
            variants: {
              primary: {
                backgroundColor: 'colorBackgroundBody',
                padding: 'space60',
              },
              secondary: {
                backgroundColor: 'colorBackgroundBody',
                padding: 'space60',
              },
            },
          },
          NEW_MEDIA_BODY: {
            backgroundColor: 'colorBackgroundPrimaryWeaker',
            borderRadius: 'borderRadius30',
            variants: {
              primary: {
                backgroundColor: 'colorBackgroundNeutralWeakest',
                borderRadius: 'borderRadius30',
              },
              secondary: {
                backgroundColor: 'colorBackgroundBody',
                borderRadius: 'borderRadius30',
              },
            },
          },
        }}
      >
        <CustomElementMediaObjectCollection />
      </CustomizationProvider>
    </>
  );
};

ConstrainedWidth.story = {
  name: 'Constrained width',
};
