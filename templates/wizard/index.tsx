import { ButtonGroup } from "@twilio-paste/button-group";
import { Box } from "@twilio-paste/core/box";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/core/breadcrumb";
import { Button } from "@twilio-paste/core/button";
import { Form, FormControl } from "@twilio-paste/core/form";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import {
  PageHeader,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderKeyword,
  PageHeaderParagraph,
  PageHeaderSetting,
} from "@twilio-paste/core/page-header";
import {
  ProgressStepCurrent,
  ProgressStepIncomplete,
  ProgressStepSeparator,
  ProgressSteps,
} from "@twilio-paste/core/progress-steps";
import { useUID, useUIDSeed } from "@twilio-paste/core/uid-library";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";

import type { JSX } from "react";
import * as React from "react";

export const Wizard = (): JSX.Element => {
  const seed = useUIDSeed();

  return (
    <Box display="flex" width="100%" justifyContent="center" paddingX="space10">
      <Box paddingTop="space130" paddingBottom="space160" width="size70" maxWidth="size80">
        <PageHeader>
          <PageHeaderSetting>
            <Breadcrumb aria-label={useUID()}>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
            <ProgressSteps>
              <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
            </ProgressSteps>
          </PageHeaderSetting>
          <PageHeaderDetails>
            <PageHeaderKeyword>Wizard title</PageHeaderKeyword>
            <PageHeaderHeading>Verb heading</PageHeaderHeading>
            <PageHeaderParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
              faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
            </PageHeaderParagraph>
          </PageHeaderDetails>
        </PageHeader>
        <Box display="flex" flexDirection="column" rowGap="space130">
          <Box>
            <Form>
              <FormControl>
                <Label htmlFor={seed("label-1")}>Label</Label>
                <Input type="text" id={seed("label-1")} name="input1" />
              </FormControl>
              <FormControl>
                <Label htmlFor={seed("label-2")}>Label</Label>
                <Input type="text" id={seed("label-2")} name="input2" />
              </FormControl>
              <FormControl>
                <Label htmlFor={seed("label-3")}>Label</Label>
                <Input type="text" id={seed("label-3")} name="input3" />
              </FormControl>
              <FormControl>
                <Label htmlFor={seed("label-4")}>Label</Label>
                <Input type="text" id={seed("label-4")} name="input4" />
              </FormControl>
            </Form>
          </Box>
          <Box display="flex" justifyContent="end">
            <ButtonGroup>
              <Button variant="secondary">Cancel or Close</Button>
              <Button variant="primary">
                Next <ArrowForwardIcon decorative />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
