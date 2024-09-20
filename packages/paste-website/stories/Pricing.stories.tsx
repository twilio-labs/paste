import { Avatar } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Card } from "@twilio-paste/card";
import { DisplayHeading } from "@twilio-paste/display-heading";
import { Heading } from "@twilio-paste/heading";
import { BusinessIcon } from "@twilio-paste/icons/esm/BusinessIcon";
import { SelectedIcon } from "@twilio-paste/icons/esm/SelectedIcon";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import type { GenericIconProps } from "@twilio-paste/icons/esm/types";
import { Paragraph } from "@twilio-paste/paragraph";
import * as React from "react";

export default {
  title: "Website/PricingExamples",
};

const PricingCard = ({
  icon,
  isEntity,
  isCurrentPlan,
  packageName,
  price,
  subheader,
  cta,
  packageList,
}: {
  icon: React.FC<React.PropsWithChildren<GenericIconProps>>;
  isEntity?: boolean;
  isCurrentPlan?: boolean;
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
              <SelectedIcon decorative />
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
