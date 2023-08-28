import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {Disclosure, DisclosureContent, DisclosureHeading} from '@twilio-paste/disclosure';
import {Paragraph} from '@twilio-paste/paragraph';
import {RequiredDot} from '@twilio-paste/label';
import {Separator} from '@twilio-paste/separator';
import {InlineCode} from '@twilio-paste/inline-code';

import {
  type ComponentAPIPropDetails,
  type ComponentAPIProp,
  type GroupedComponentAPI,
} from '../utils/componentApiUtils';

export interface PropsTableProps {
  componentAPI: GroupedComponentAPI;
}
export interface PropsListProps {
  props: ComponentAPIProp;
}
export interface PropPairProps {
  term: React.ReactNode;
  description: React.ReactNode;
}
export interface PropTypeProps {
  children: NonNullable<React.ReactNode>;
}

const MarkdownConverter: React.FC<{description: string}> = ({description}) => {
  return (
    <Markdown
      options={{
        overrides: {
          code: {
            component: InlineCode,
          },
        },
      }}
    >
      {description}
    </Markdown>
  );
};

const PropType: React.FC<React.PropsWithChildren<PropTypeProps>> = ({children}) => {
  return (
    <Box as="code" fontFamily="fontFamilyCode" color="colorTextDecorative30">
      {children}
    </Box>
  );
};
PropType.displayName = 'PropType';

const PropPair: React.FC<PropPairProps> = ({term, description}) => {
  return (
    <Box display="flex" marginBottom="space20" columnGap="space20" paddingX="space30">
      <Box as="dt" fontSize="fontSize20" fontWeight="fontWeightMedium" minWidth="80px">
        {term}
      </Box>
      <Box as="dd" fontSize="fontSize20" margin="space0">
        {description}
      </Box>
    </Box>
  );
};
PropPair.displayName = 'PropPair';

const PropsList: React.FC<PropsListProps> = ({props}) => {
  return (
    <Box>
      {Object.keys(props).map((propName) => {
        const prop: ComponentAPIPropDetails = props[propName];
        return (
          <React.Fragment key={propName}>
            <Box marginBottom="space60">
              <Box
                as="h4"
                fontWeight="fontWeightMedium"
                marginBottom="space30"
                display="flex"
                alignItems="center"
                columnGap="space50"
              >
                <Box
                  as="span"
                  color="colorTextDecorative30"
                  fontFamily="fontFamilyCode"
                  fontSize="fontSize30"
                  backgroundColor="colorBackgroundDecorative30Weakest"
                  borderStyle="solid"
                  borderWidth="borderWidth10"
                  borderColor="colorBorderDecorative30Weaker"
                  paddingY="space20"
                  paddingX="space30"
                  lineHeight="lineHeight10"
                  borderRadius="borderRadiusPill"
                >
                  {propName}
                </Box>{' '}
                {prop.required ? (
                  <Box as="span" display="flex" alignItems="center" columnGap="space30">
                    <RequiredDot />
                    <Text as="small" fontSize="fontSize20" fontFamily="fontFamilyText">
                      Required
                    </Text>
                  </Box>
                ) : (
                  ''
                )}
              </Box>
              {prop.description && (
                <Box as="p" fontSize="fontSize20" margin="space0" paddingX="space30">
                  <MarkdownConverter description={prop.description} />
                </Box>
              )}
            </Box>
            <Box as="dl">
              <PropPair term="Type" description={<PropType>{prop.type}</PropType>} />
              {prop.defaultValue && prop.defaultValue !== ' ' ? (
                <PropPair term="Default" description={<PropType>{prop.defaultValue}</PropType>} />
              ) : null}
            </Box>
            <Separator orientation="horizontal" verticalSpacing="space120" />
          </React.Fragment>
        );
      })}
    </Box>
  );
};
PropsList.displayName = 'PropsList';

const PropsTable: React.FC<PropsTableProps> = ({componentAPI}) => {
  const propsTable = React.useMemo(() => componentAPI, [componentAPI]);

  return (
    <>
      {Object.keys(propsTable).map((componentName) => {
        return (
          <Box marginY="space200" key={componentName}>
            <Heading as="h3" variant="heading30" key={componentName}>
              {componentName}
            </Heading>
            {propsTable[componentName].internalProps && <PropsList props={propsTable[componentName].internalProps} />}
            {propsTable[componentName].externalProps && (
              <Disclosure>
                <DisclosureHeading as="h4" variant="heading40">
                  Inherited props
                </DisclosureHeading>
                <DisclosureContent>
                  <Paragraph>
                    Paste components will often extend native HTML elements and as a result will inherit or extend their
                    available properties. Below is a list of the props this component has inherited and are also
                    available to use.
                  </Paragraph>
                  <PropsList props={propsTable[componentName].externalProps} />
                </DisclosureContent>
              </Disclosure>
            )}
          </Box>
        );
      })}
    </>
  );
};

PropsTable.displayName = 'PropsTable';

export {PropsTable};
