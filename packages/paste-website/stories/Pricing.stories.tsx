import { Avatar } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Card } from "@twilio-paste/card";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHead,
  DataGridHeader,
  DataGridRow,
} from "@twilio-paste/data-grid";
import { DetailText } from "@twilio-paste/detail-text";
import { DisplayHeading } from "@twilio-paste/display-heading";
import { Heading } from "@twilio-paste/heading";
import { BusinessIcon } from "@twilio-paste/icons/esm/BusinessIcon";
import { SelectedIcon } from "@twilio-paste/icons/esm/SelectedIcon";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { UsersIcon } from "@twilio-paste/icons/esm/UsersIcon";
import type { GenericIconProps } from "@twilio-paste/icons/esm/types";
import { Paragraph } from "@twilio-paste/paragraph";
import { Separator } from "@twilio-paste/separator";
import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  SummaryDetailHeadingContent,
  SummaryDetailToggleButton,
} from "@twilio-paste/summary-detail";
import { Text } from "@twilio-paste/text";
import { VisualPickerRadio, VisualPickerRadioGroup } from "@twilio-paste/visual-picker";
import * as React from "react";

export default {
  title: "Website/PricingExamples",
};

const PricingCard = ({
  isCurrentPlan,
  isRecommended,
  packageName,
  price,
  subheader,
  cta,
  packageList,
  isMobile,
  isEntity,
  icon,
}: {
  isCurrentPlan?: boolean;
  isRecommended?: boolean;
  packageName: string;
  price: string;
  subheader: string;
  cta?: string;
  packageList: string[];
  isMobile?: boolean;
  isEntity?: boolean;
  icon?: React.FC<React.PropsWithChildren<GenericIconProps>>;
}): JSX.Element => {
  return (
    <Card>
      <Box display="flex" flexDirection="column" rowGap="space70">
        <Box>
          <Box display="flex" flexDirection="column" rowGap="space40">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              columnGap="space20"
              rowGap="space20"
              flexWrap="wrap"
            >
              {icon ? <Avatar name="user" icon={icon} variant={isEntity ? "entity" : "user"} /> : null}
              {isMobile ? (
                <Heading marginBottom="space0" as="h2" variant="heading30">
                  {packageName}
                </Heading>
              ) : null}
              {isCurrentPlan ? (
                <Badge as="span" variant="neutral">
                  Current plan
                </Badge>
              ) : null}
              {isRecommended ? (
                <Badge as="span" variant="decorative30">
                  Recommended
                </Badge>
              ) : null}
            </Box>
            {!isMobile ? (
              <Heading marginBottom="space0" as="h2" variant="heading30">
                {packageName}
              </Heading>
            ) : null}
          </Box>
          <Box marginTop="space40" marginBottom="space20">
            <DisplayHeading marginBottom="space0" as="h3" variant="displayHeading30">
              {price}
            </DisplayHeading>
          </Box>
          <Paragraph marginBottom="space0">{subheader}</Paragraph>
        </Box>

        {cta ? <Button variant="secondary">{cta}</Button> : null}

        {isMobile ? (
          <SummaryDetail>
            <SummaryDetailHeading>
              <SummaryDetailToggleButton />
              <SummaryDetailHeadingContent>
                <Heading variant="heading50" as="h3" marginBottom="space0">
                  Package includes
                </Heading>
              </SummaryDetailHeadingContent>
            </SummaryDetailHeading>
            <SummaryDetailContent>
              <Box display="flex" flexDirection="column" rowGap="space40">
                {packageList.map((item: string) => (
                  <Box key={item} display="flex" columnGap="space20" alignItems="flex-start">
                    <SelectedIcon decorative color="colorTextIconSuccess" size="sizeIcon40" />
                    <Paragraph marginBottom="space0">{item}</Paragraph>
                  </Box>
                ))}
              </Box>
            </SummaryDetailContent>
          </SummaryDetail>
        ) : (
          <Box display="flex" flexDirection="column" rowGap="space50">
            <Heading marginBottom="space0" as="h3" variant="heading50">
              Package includes:
            </Heading>
            <Box display="flex" flexDirection="column" rowGap="space40">
              {packageList.map((item: string) => (
                <Box key={item} display="flex" columnGap="space20" alignItems="flex-start">
                  <SelectedIcon decorative color="colorTextIconSuccess" />
                  <Text as="p">{item}</Text>
                </Box>
              ))}
            </Box>
            <Box>
              <Separator orientation="horizontal" />
              <Box marginTop="space70" display="flex" justifyContent="center">
                <Button variant="link">More info</Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export const CardExample = (): JSX.Element => {
  return (
    <Box
      display="grid"
      rowGap="space70"
      columnGap="space70"
      gridTemplateColumns="repeat(auto-fit, minmax(min(264px, 100%), 1fr))"
      maxWidth="1248px"
    >
      <PricingCard
        isCurrentPlan
        packageName="Free"
        price="$0"
        subheader="Per month"
        icon={UserIcon}
        packageList={[
          "10 seats",
          "2 sources",
          "Unlimited destinations",
          "1,000 MTU",
          "50 Function hours",
          "500,000 records processed for Reverse ETL",
        ]}
      />
      <PricingCard
        packageName="Team"
        price="Starting at $120"
        subheader="Per month"
        cta="Try for 14 days"
        icon={UsersIcon}
        packageList={[
          "10 seats",
          "2 sources",
          "Unlimited destinations",
          "1,000 MTU",
          "50 Function hours",
          "500,000 records processed for Reverse ETL",
        ]}
      />
      <PricingCard
        isRecommended
        packageName="Business"
        price="Custom pricing"
        subheader="Contact sales"
        cta="Contact us to upgrade"
        packageList={[
          "10 seats",
          "unlimitted sources",
          "Choose from 10,000 / 25,000 / 100,000 MTU",
          "50 Function hours",
          "1 million records processed for Reverse ETL",
          "Monthly and annual plans available",
        ]}
        icon={BusinessIcon}
        isEntity
      />
    </Box>
  );
};

export const CardMobileExample = (): JSX.Element => {
  return (
    <Box maxWidth="400px" display="flex" flexDirection="column" rowGap="space70">
      <PricingCard
        isMobile
        isCurrentPlan
        packageName="Free"
        price="$0"
        subheader="Per month"
        packageList={[
          "10 seats",
          "2 sources",
          "Unlimited destinations",
          "1,000 MTU",
          "50 Function hours",
          "500,000 records processed for Reverse ETL",
        ]}
      />

      <PricingCard
        isMobile
        packageName="Team"
        price="Starting at $120"
        subheader="Per month"
        cta="Try for 14 days"
        packageList={[
          "10 seats",
          "2 sources",
          "Unlimited destinations",
          "1,000 MTU",
          "50 Function hours",
          "500,000 records processed for Reverse ETL",
        ]}
      />
      <PricingCard
        isMobile
        packageName="Business"
        price="Custom pricing"
        subheader="Contact sales"
        cta="Contact us to upgrade"
        packageList={[
          "10 seats",
          "unlimitted sources",
          "Choose from 10,000 / 25,000 / 100,000 MTU",
          "50 Function hours",
          "1 million records processed for Reverse ETL",
          "Monthly and annual plans available",
        ]}
      />
    </Box>
  );
};

const VisualItem = ({
  isCurrentPlan,
  isRecommended,
  packageName,
  price,
  packageList,
}: {
  isCurrentPlan?: boolean;
  isRecommended?: boolean;
  packageName: string;
  price: string;
  packageList: string[];
}): JSX.Element => {
  return (
    <VisualPickerRadio labelText={packageName} value={packageName}>
      <Box>
        <Box display="flex" columnGap="space30" justifyContent="space-between" alignItems="flex-start">
          <Heading as="h2" variant="heading40" marginBottom="space0">
            {packageName}
          </Heading>
          {isCurrentPlan ? (
            <Badge as="span" variant="neutral">
              Current plan
            </Badge>
          ) : null}
          {isRecommended ? (
            <Badge as="span" variant="decorative30">
              Recommended
            </Badge>
          ) : null}
        </Box>
        <Box marginTop="space30" display="flex" columnGap="space20" alignItems="flex-end">
          <Heading as="h3" variant="heading10" marginBottom="space0">
            {price}
          </Heading>
          <Paragraph marginBottom="space0">Per month</Paragraph>
        </Box>
      </Box>
      <Box marginY="space50">
        <Separator orientation="horizontal" />
      </Box>

      <Box display="flex" flexDirection="column" rowGap="space50">
        {packageList.map((item: string) => (
          <Box key={item} display="flex" columnGap="space20" alignItems="flex-start">
            <SelectedIcon decorative color="colorTextIconSuccess" />
            <Text as="p">{item}</Text>
          </Box>
        ))}
      </Box>
    </VisualPickerRadio>
  );
};

export const VisualPickerExample = (): JSX.Element => {
  const [value, setValue] = React.useState("Free trial");

  return (
    <VisualPickerRadioGroup
      orientation="horizontal"
      legend="Select an option"
      name="visual-picker"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <VisualItem
        packageName="Free trial"
        price="$0"
        packageList={["$15 credit", "Testing with upto 5 verified recipients", "Limited configurations"]}
      />
      <VisualItem
        packageName="Pay as you go"
        price="$0.05"
        packageList={[
          "Testing with unlimited configurations",
          "Full access to configurations",
          "Flexible usage based pricing",
        ]}
      />
      <VisualItem
        packageName="Verify Pro"
        price="$99"
        packageList={[
          "Up to 2,100 successful verifications",
          "4.76% discount compared to pay-as-you-go",
          "Cancel anytime",
        ]}
        isRecommended
      />
    </VisualPickerRadioGroup>
  );
};

export const DataGridExample = (): JSX.Element => {
  return (
    <DataGrid aria-label="Pricing table">
      <DataGridHead>
        <DataGridRow>
          <DataGridHeader whiteSpace="nowrap"> </DataGridHeader>
          <DataGridHeader>
            {
              <Box display="flex" flexDirection="column" rowGap="space20">
                Developer
                <Badge as="span" variant="neutral">
                  Current plan
                </Badge>
              </Box>
            }
          </DataGridHeader>
          <DataGridHeader>Production</DataGridHeader>
          <DataGridHeader>
            {
              <Box display="flex" flexDirection="column" rowGap="space20">
                Business
                <Badge as="span" variant="decorative30">
                  Recommended
                </Badge>
              </Box>
            }
          </DataGridHeader>
          <DataGridHeader>Personalized</DataGridHeader>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        <DataGridRow>
          <DataGridCell whiteSpace="nowrap">Price per month</DataGridCell>
          <DataGridCell>Included</DataGridCell>
          <DataGridCell>
            4% of monthly spend <DetailText marginTop="space0">or $250 minimum</DetailText>
          </DataGridCell>
          <DataGridCell>
            6% of monthly spend <DetailText marginTop="space0">or $1,500 minimum</DetailText>
          </DataGridCell>
          <DataGridCell>
            8% of monthly spend <DetailText marginTop="space0">or $5,000 minimum</DetailText>
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>Web support</DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconAvailable" />
          </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconAvailable" />
          </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconAvailable" />
          </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconAvailable" />
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>
            Guaranteed response times <DetailText marginTop="space0">Business critical</DetailText>
          </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell>3 business hours</DataGridCell>
          <DataGridCell>1 hour (24x7)</DataGridCell>
          <DataGridCell>1 hour (24x7)</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>
            Guaranteed response times <DetailText marginTop="space0">Degraded service</DetailText>
          </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell>6 business hours</DataGridCell>
          <DataGridCell>2 business hours</DataGridCell>
          <DataGridCell>2 business hours</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>
            Guaranteed response times <DetailText marginTop="space0">General issues</DetailText>
          </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell>9 business hours</DataGridCell>
          <DataGridCell>3 business hours</DataGridCell>
          <DataGridCell>3 business hours</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>24x7 phone support</DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>Dedicated support contact</DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>Duty manager for escalations</DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>Quarterly review of account</DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridCell>Select plan:</DataGridCell>
          <DataGridCell> </DataGridCell>
          <DataGridCell>
            <Button variant="secondary">Select</Button>
          </DataGridCell>
          <DataGridCell>
            <Button variant="primary">Select</Button>
          </DataGridCell>
          <DataGridCell>
            <Button variant="secondary">Select</Button>
          </DataGridCell>
        </DataGridRow>
      </DataGridBody>
    </DataGrid>
  );
};
