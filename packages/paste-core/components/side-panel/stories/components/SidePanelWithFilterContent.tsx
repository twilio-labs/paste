// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import { Heading } from "@twilio-paste/heading";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import * as React from "react";

import { SidePanel, SidePanelBody, SidePanelFooter, SidePanelHeader } from "../../src";

export const SidePanelWithFilterContent: React.FC<React.PropsWithChildren> = () => {
  return (
    <SidePanel label="more filters side panel">
      <SidePanelHeader>
        <Heading as="h3" variant="heading30" marginBottom="space0">
          More filters
        </Heading>
      </SidePanelHeader>
      <SidePanelBody>
        <Box width="100%" display="flex" paddingTop="space70" flexDirection="column" rowGap="space40">
          <Disclosure variant="contained" visible>
            <DisclosureHeading as="h4" variant="heading50">
              <Box display="flex" width="100%" justifyContent="space-between">
                Label
                <Badge variant="neutral_counter" as="span" size="small">
                  Selected: 1
                </Badge>
              </Box>
            </DisclosureHeading>
            <DisclosureContent>
              <Box display="flex" flexDirection="column" rowGap="space70">
                <RadioGroup
                  name="filter-radio-group-1"
                  legend="Label"
                  helpText="Info that helps a user with this field."
                >
                  <Radio id="filter-radio-group-1-1" name="filter-radio-group-1">
                    Label
                  </Radio>
                  <Radio id="filter-radio-group-1-2" name="filter-radio-group-1">
                    Label
                  </Radio>
                  <Radio id="filter-radio-group-1-3" name="filter-radio-group-1" defaultChecked>
                    Label
                  </Radio>
                  <Radio id="filter-radio-group-1-4" name="filter-radio-group-1">
                    Label
                  </Radio>
                  <Radio id="filter-radio-group-1-5" name="filter-radio-group-1">
                    Label
                  </Radio>
                  <Radio id="filter-radio-group-1-6" name="filter-radio-group-1">
                    Label
                  </Radio>
                </RadioGroup>
                <Box>
                  <Button variant="link">Clear all</Button>
                </Box>
              </Box>
            </DisclosureContent>
          </Disclosure>
          <Box paddingBottom="space40">
            <Disclosure variant="contained" visible>
              <DisclosureHeading as="h4" variant="heading50">
                <Box display="flex" width="100%" justifyContent="space-between">
                  Label
                  <Badge variant="neutral_counter" as="span" size="small">
                    Selected: 1
                  </Badge>
                </Box>
              </DisclosureHeading>
              <DisclosureContent>
                <Box display="flex" flexDirection="column" rowGap="space70">
                  <RadioGroup
                    name="filter-radio-group-2"
                    legend="Label"
                    helpText="Info that helps a user with this field."
                  >
                    <Radio id="filter-radio-group-2-1" name="filter-radio-group-2" defaultChecked>
                      Label
                    </Radio>
                    <Radio id="filter-radio-group-2-2" name="filter-radio-group-2">
                      Label
                    </Radio>
                    <Radio id="filter-radio-group-2-3" name="filter-radio-group-2">
                      Label
                    </Radio>
                    <Radio id="filter-radio-group-2-4" name="filter-radio-group-2">
                      Label
                    </Radio>
                    <Radio id="filter-radio-group-2-5" name="filter-radio-group-2">
                      Label
                    </Radio>
                    <Radio id="filter-radio-group-2-6" name="filter-radio-group-2">
                      Label
                    </Radio>
                  </RadioGroup>
                  <Box>
                    <Button variant="link">Clear all</Button>
                  </Box>
                </Box>
              </DisclosureContent>
            </Disclosure>
          </Box>
        </Box>
      </SidePanelBody>
      <SidePanelFooter>
        <Button variant="primary">Apply</Button>
        <Button variant="secondary">Clear all</Button>
      </SidePanelFooter>
    </SidePanel>
  );
};
