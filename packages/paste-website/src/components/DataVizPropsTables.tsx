import { Box } from "@twilio-paste/box";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import { InlineCode } from "@twilio-paste/inline-code";
import { RequiredDot } from "@twilio-paste/label";
import { Paragraph } from "@twilio-paste/paragraph";
import { Text } from "@twilio-paste/text";
import Markdown from "markdown-to-jsx";
import * as React from "react";

import {
  type ComponentApiProp,
  type ComponentApiPropDetails,
  type GroupedComponentApi,
} from "../utils/componentApiUtils";
import { AnchoredHeading } from "./Heading";

export interface PropsTableProps {
  componentApi: GroupedComponentApi;
}
export interface PropsListProps {
  props: ComponentApiProp;
}
export interface PropPairProps {
  term: React.ReactNode;
  description: React.ReactNode;
}
export interface PropTypeProps {
  children: NonNullable<React.ReactNode>;
}

const MarkdownConverter: React.FC<{ description: string }> = ({ description }) => {
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

const PropType: React.FC<React.PropsWithChildren<PropTypeProps>> = ({ children }) => {
  return (
    <Box as="code" fontFamily="fontFamilyCode" color="colorTextDecorative30">
      {children}
    </Box>
  );
};
PropType.displayName = "PropType";

const PropPair: React.FC<PropPairProps> = ({ term, description }) => {
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
PropPair.displayName = "PropPair";

const PropsList: React.FC<PropsListProps> = ({ props }) => {
  return (
    <Box>
      {Object.keys(props).map((propName) => {
        const prop: ComponentApiPropDetails = props[propName];
        return (
          <Box
            key={propName}
            borderBottomStyle="solid"
            borderBottomColor="colorBorderWeaker"
            borderBottomWidth="borderWidth10"
            marginBottom="space120"
            paddingBottom="space90"
            _last={{
              marginBottom: "space50",
            }}
          >
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
                </Box>{" "}
                {prop.required ? (
                  <Box as="span" display="flex" alignItems="center" columnGap="space30">
                    <RequiredDot />
                    <Text as="small" fontSize="fontSize20" fontFamily="fontFamilyText">
                      Required
                    </Text>
                  </Box>
                ) : (
                  ""
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
              {prop.defaultValue && prop.defaultValue !== " " ? (
                <PropPair term="Default" description={<PropType>{prop.defaultValue}</PropType>} />
              ) : null}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
PropsList.displayName = "PropsList";

const DataVizPropsTables: React.FC<PropsTableProps> = ({ componentApi }) => {
  const propsTable = React.useMemo(() => componentApi, [componentApi]);
  const baseChartOptions = Object.keys(propsTable.BaseChartOptions.internalProps);

  return (
    <>
      {Object.keys(propsTable).map((componentName) => {
        const { internalProps, externalProps } = propsTable[componentName];
        const isChartConfig = componentName.includes("ChartConfig");
        console.log(internalProps);
        /**
         * filter internalProps to remove baseChartOptions and put them under inherited so consumers can see the options
         * that only apply to the chart type
         **/
        const getNonBaseChartOptions = () => {
          return Object.keys(internalProps).reduce((acc: ComponentApiProp, propName: string) => {
            if (!baseChartOptions.includes(propName)) {
              acc[propName] = internalProps[propName];
            }
            return acc;
          }, {});
        };

        return (
          <Box marginTop="space90" marginBottom="space200" key={componentName}>
            <AnchoredHeading as="h3" variant="heading30" existingSlug={componentName.toLowerCase()}>
              {componentName}
            </AnchoredHeading>
            {internalProps && <PropsList props={isChartConfig ? getNonBaseChartOptions() : internalProps} />}
            {(isChartConfig || externalProps) && (
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
                  <PropsList props={isChartConfig ? propsTable.BaseChartOptions.internalProps : externalProps} />
                </DisclosureContent>
              </Disclosure>
            )}
          </Box>
        );
      })}
    </>
  );
};

DataVizPropsTables.displayName = "DataVizPropsTables";

export { DataVizPropsTables };
