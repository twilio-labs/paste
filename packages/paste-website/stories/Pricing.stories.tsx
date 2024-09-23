import { Avatar } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Card } from "@twilio-paste/card";
import { DetailText } from "@twilio-paste/detail-text";
import { DisplayHeading } from "@twilio-paste/display-heading";
import { Heading } from "@twilio-paste/heading";
import { BusinessIcon } from "@twilio-paste/icons/esm/BusinessIcon";
import { SelectedIcon } from "@twilio-paste/icons/esm/SelectedIcon";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import type { GenericIconProps } from "@twilio-paste/icons/esm/types";
import { Paragraph } from "@twilio-paste/paragraph";
import { Separator } from "@twilio-paste/separator";
import { TBody, THead, Table, Td, Th, Tr } from "@twilio-paste/table";
import { VisualPickerRadio, VisualPickerRadioGroup } from "@twilio-paste/visual-picker";
import * as React from "react";

export default {
  title: "Website/PricingExamples",
};

const PricingCard = ({
  icon,
  isEntity,
  isCurrentPlan,
  isRecommended,
  packageName,
  price,
  subheader,
  cta,
  packageList,
}: {
  icon: React.FC<React.PropsWithChildren<GenericIconProps>>;
  isEntity?: boolean;
  isCurrentPlan?: boolean;
  isRecommended?: boolean;
  packageName: string;
  price: string;
  subheader: string;
  cta?: string;
  packageList: string[];
}): JSX.Element => {
  return (
    <Card>
      <Box display="flex" flexDirection="column" rowGap="space70">
        <Box display="flex" flexDirection="column" rowGap="space40">
          <Box display="flex" justifyContent="space-between">
            <Avatar name="user" icon={icon} variant={isEntity ? "entity" : "user"} />
            {isCurrentPlan ? (
              <Badge as="span" variant="neutral">
                Current plan
              </Badge>
            ) : null}
            {isRecommended ? (
              <Badge as="span" variant="success">
                Recommended
              </Badge>
            ) : null}
          </Box>
          <Heading marginBottom="space0" as="h2" variant="heading30">
            {packageName}
          </Heading>
          <DisplayHeading marginBottom="space0" as="h3" variant="displayHeading30">
            {price}
          </DisplayHeading>
          <Paragraph marginBottom="space0">{subheader}</Paragraph>
        </Box>

        {cta ? <Button variant="secondary">{cta}</Button> : null}

        <Box display="flex" flexDirection="column" rowGap="space50">
          <Heading marginBottom="space0" as="h3" variant="heading50">
            Package includes:
          </Heading>
          {packageList.map((item: string) => (
            <Box key={item} display="flex" columnGap="space20" alignItems="center">
              <SelectedIcon decorative color="colorTextIconSuccess" />
              <Paragraph marginBottom="space0">{item}</Paragraph>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export const CardPricingExample = (): JSX.Element => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(min(260px, 100%), 1fr));"
      columnGap="space50"
      rowGap="space50"
    >
      <PricingCard
        icon={UserIcon}
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
        icon={UserIcon}
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
        icon={BusinessIcon}
        isEntity
        packageName="Business"
        price="Custom pricing"
        subheader="contact sales"
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
        <Box display="flex" columnGap="space30" justifyContent="space-between">
          <Heading as="h2" variant="heading40" marginBottom="space0">
            {packageName}
          </Heading>
          {isCurrentPlan ? (
            <Badge as="span" variant="neutral">
              Current plan
            </Badge>
          ) : null}
          {isRecommended ? (
            <Badge as="span" variant="success">
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
          <Box key={item} display="flex" columnGap="space20" alignItems="center">
            <SelectedIcon decorative color="colorTextIconSuccess" />
            <Paragraph marginBottom="space0">{item}</Paragraph>
          </Box>
        ))}
      </Box>
    </VisualPickerRadio>
  );
};

export const VisualPickerExample = (): JSX.Element => {
  const [value, setValue] = React.useState("1");

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

export const TableExample = (): JSX.Element => {
  return (
    <Table>
      <THead>
        <Tr>
          <Td> </Td>
          <Th>
            <Box display="flex" flexDirection="column" rowGap="space20">
              Developer
              <Badge as="span" variant="neutral">
                Current plan
              </Badge>
            </Box>
          </Th>
          <Th>Production</Th>
          <Th>
            <Box display="flex" flexDirection="column" rowGap="space20">
              Business
              <Badge as="span" variant="success">
                Recommended
              </Badge>
            </Box>
          </Th>
          <Th>Personalized</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Price per month</Td>
          <Td>Included</Td>
          <Td>
            4% of monthly spend <DetailText marginTop="space0">or $250.00 minimum</DetailText>
          </Td>
          <Td>
            6% of monthly spend <DetailText marginTop="space0">or $1500.00 minimum</DetailText>
          </Td>
          <Td>
            8% of monthly spend <DetailText marginTop="space0">or $5000.00 minimum</DetailText>
          </Td>
        </Tr>
        <Tr>
          <Td>Web support</Td>
          <Td>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </Td>
          <Td>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </Td>
          <Td>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </Td>
          <Td>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            Guaranteed response times <DetailText marginTop="space0">Business critical</DetailText>
          </Td>
          <Td>-</Td>
          <Td>3 business hours</Td>
          <Td>1 hour (24x7)</Td>
          <Td>1 hour (24x7)</Td>
        </Tr>
        <Tr>
          <Td>
            Guaranteed response times <DetailText marginTop="space0">Degraded service</DetailText>
          </Td>
          <Td>-</Td>
          <Td>6 business hours</Td>
          <Td>2 business hours</Td>
          <Td>2 business hours</Td>
        </Tr>
        <Tr>
          <Td>
            Guaranteed response times <DetailText marginTop="space0">General issues</DetailText>
          </Td>
          <Td>-</Td>
          <Td>9 business hours</Td>
          <Td>3 business hours</Td>
          <Td>3 business hours</Td>
        </Tr>
        <Tr>
          <Td>24x7 phone support</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </Td>
          <Td>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </Td>
        </Tr>
        <Tr>
          <Td>Dedicated support contact</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </Td>
        </Tr>
        <Tr>
          <Td>Duty manager for escalations</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </Td>
        </Tr>
        <Tr>
          <Td>Quarterly review of account</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <SelectedIcon decorative color="colorTextIconSuccess" />
          </Td>
        </Tr>
        <Tr>
          <Td>Select Plan</Td>
          <Td> </Td>
          <Td>
            <Button variant="secondary">Select</Button>
          </Td>
          <Td>
            <Button variant="primary">Select</Button>
          </Td>
          <Td>
            <Button variant="secondary">Select</Button>
          </Td>
        </Tr>
      </TBody>
    </Table>
  );
};
