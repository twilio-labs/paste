// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {useUID} from '@twilio-paste/uid-library';
import {Avatar, AvatarGroup} from '@twilio-paste/avatar';
import {StatusBadge} from '@twilio-paste/status';
import {CodeIcon} from '@twilio-paste/icons/esm/CodeIcon';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {Box} from '@twilio-paste/box';
import {CommunityIcon} from '@twilio-paste/icons/esm/CommunityIcon';

import {VisualPickerRadioGroup, VisualPickerRadio} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Visual Picker/Radio',
  component: VisualPickerRadioGroup,
};

export const VerticalRadioGroup = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  return (
    <VisualPickerRadioGroup
      orientation="vertical"
      legend={
        <Text as="span" color="currentColor">
          This is a Visual Picker Radio Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
        </Text>
      }
      name={`${useUID()}_vertical`}
      helpText="Help text should go here."
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <VisualPickerRadio id={useUID()} value="1" labelText="ACME Website">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                ACME
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="entity">
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="2" labelText="ACME Website">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                ACME
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="entity">
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="3" labelText="ACME Website">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                ACME
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="entity">
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
    </VisualPickerRadioGroup>
  );
};

export const VerticalRadioGroupDisabledRadio = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  return (
    <VisualPickerRadioGroup
      orientation="vertical"
      legend={
        <Text as="span" color="currentColor">
          This is a Visual Picker Radio Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
        </Text>
      }
      name={`${useUID()}_disabled_radio`}
      helpText="Help text should go here."
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <VisualPickerRadio id={useUID()} value="1" labelText="ACME Website" disabled hasError>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold" color="colorTextWeak">
                ACME
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="entity">
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="2" labelText="ACME Website" disabled>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold" color="colorTextWeak">
                ACME
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="entity">
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="3" labelText="ACME Website">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                ACME
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="entity">
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
    </VisualPickerRadioGroup>
  );
};

export const VerticalRadioGroupRadioError = (): React.ReactNode => {
  const [value, setValue] = React.useState('2');
  return (
    <VisualPickerRadioGroup
      orientation="vertical"
      legend={
        <Text as="span" color="currentColor">
          This is a Visual Picker Radio Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
        </Text>
      }
      name={`${useUID()}_radio_error`}
      helpText="Help text should go here."
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <VisualPickerRadio id={useUID()} value="1" labelText="ACME Website">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                ACME
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="entity">
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="2" hasError labelText="ACME Website">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                ACME
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="entity">
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="3" labelText="ACME Website">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                ACME
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="entity">
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
              <Avatar name="grouped avatar" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
    </VisualPickerRadioGroup>
  );
};

export const HorizontalRadioGroup = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  return (
    <VisualPickerRadioGroup
      orientation="horizontal"
      legend="Select a plan"
      name={`${useUID()}_horizontal`}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <VisualPickerRadio id={useUID()} value="1" labelText="30 USD per user per month">
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
              Basic plan
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30">
              This is the Basic plan for basic people
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap="space40"
            borderStyle="solid"
            borderColor="colorBorder"
            padding="space60"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
              $30
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="2" labelText="150 USD per user per month">
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
              Business plan
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30">
              This is the Business plan
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap="space40"
            borderStyle="solid"
            borderColor="colorBorder"
            padding="space60"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
              $150
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="3" labelText="500 USD per user per month">
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
              Pro plan
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30">
              This is the Pro plan
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap="space40"
            borderStyle="solid"
            borderColor="colorBorder"
            padding="space60"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
              $300
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
        </Box>
      </VisualPickerRadio>
    </VisualPickerRadioGroup>
  );
};

export const HorizontalRadioGroupDisabledGroup = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  return (
    <VisualPickerRadioGroup
      orientation="horizontal"
      legend="Select a plan"
      name={`${useUID()}_horizontal`}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      disabled
    >
      <VisualPickerRadio id={useUID()} value="1" labelText="30 USD per user per month">
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60" color="colorTextWeak">
              Basic plan
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30" color="colorTextWeak">
              This is the Basic plan for basic people
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap="space40"
            borderStyle="solid"
            borderColor="colorBorderWeak"
            padding="space60"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold" color="colorTextWeak">
              $30
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="2" labelText="150 USD per user per month">
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60" color="colorTextWeak">
              Business plan
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30" color="colorTextWeak">
              This is the Business plan
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap="space40"
            borderStyle="solid"
            borderColor="colorBorderWeak"
            padding="space60"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold" color="colorTextWeak">
              $150
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="3" labelText="500 USD per user per month">
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60" color="colorTextWeak">
              Pro plan
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30" color="colorTextWeak">
              This is the Pro plan
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap="space40"
            borderStyle="solid"
            borderColor="colorBorderWeak"
            padding="space60"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold" color="colorTextWeak">
              $300
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
        </Box>
      </VisualPickerRadio>
    </VisualPickerRadioGroup>
  );
};

export const HorizontalRadioGroupGroupError = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  return (
    <VisualPickerRadioGroup
      orientation="horizontal"
      legend="Select a plan"
      name={`${useUID()}_horizontal`}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      errorText="Select a plan"
    >
      <VisualPickerRadio id={useUID()} value="1" labelText="30 USD per user per month">
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
              Basic plan
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30">
              This is the Basic plan for basic people
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap="space40"
            borderStyle="solid"
            borderColor="colorBorder"
            padding="space60"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
              $30
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="2" labelText="150 USD per user per month">
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
              Business plan
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30">
              This is the Business plan
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap="space40"
            borderStyle="solid"
            borderColor="colorBorder"
            padding="space60"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
              $150
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value="3" labelText="500 USD per user per month">
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
              Pro plan
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30">
              This is the Pro plan
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap="space40"
            borderStyle="solid"
            borderColor="colorBorder"
            padding="space60"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
              $300
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
        </Box>
      </VisualPickerRadio>
    </VisualPickerRadioGroup>
  );
};
