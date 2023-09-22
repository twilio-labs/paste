import { Anchor } from '@twilio-paste/anchor';
import { Avatar, AvatarGroup } from '@twilio-paste/avatar';
import { Box } from '@twilio-paste/box';
import { AcceptIcon } from '@twilio-paste/icons/esm/AcceptIcon';
import { UserIcon } from '@twilio-paste/icons/esm/UserIcon';
import { MediaBody, MediaFigure, MediaObject } from '@twilio-paste/media-object';
import { Text } from '@twilio-paste/text';
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useUID } from 'react-uid';

import { VisualPickerCheckbox, VisualPickerCheckboxGroup } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Visual Picker/Checkbox',
  component: VisualPickerCheckboxGroup,
};

export const VerticalCheckboxGroup = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked1(event.target.checked);
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked2(event.target.checked);
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked3(event.target.checked);
  return (
    <VisualPickerCheckboxGroup
      orientation="vertical"
      legend={
        <Text as="span" color="currentColor">
          This is a Visual Picker Checkbox Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
        </Text>
      }
      name={`${useUID()}_vertical`}
      helpText="Help text should go here."
    >
      <VisualPickerCheckbox labelText="SQL" checked={checked1} onChange={handleChange1}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked2} onChange={handleChange2}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked3} onChange={handleChange3}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
    </VisualPickerCheckboxGroup>
  );
};

export const VerticalCheckboxGroupDisabledCheckbox = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked1(event.target.checked);
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked2(event.target.checked);
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked3(event.target.checked);
  return (
    <VisualPickerCheckboxGroup
      orientation="vertical"
      legend={
        <Text as="span" color="currentColor">
          This is a Visual Picker Checkbox Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
        </Text>
      }
      name={`${useUID()}_disabled_checkbox`}
      helpText="Help text should go here."
    >
      <VisualPickerCheckbox labelText="SQL" checked={checked1} onChange={handleChange1} disabled>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold" color="colorTextWeak">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" disabled checked={checked2} onChange={handleChange2}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold" color="colorTextWeak">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked3} onChange={handleChange3}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
    </VisualPickerCheckboxGroup>
  );
};

export const VerticalCheckboxGroupCheckboxError = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked1(event.target.checked);
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked2(event.target.checked);
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked3(event.target.checked);
  return (
    <VisualPickerCheckboxGroup
      orientation="vertical"
      legend={
        <Text as="span" color="currentColor">
          This is a Visual Picker Checkbox Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
        </Text>
      }
      name={`${useUID()}_checkbox_error`}
      helpText="Help text should go here."
    >
      <VisualPickerCheckbox labelText="SQL" checked={checked1} onChange={handleChange1}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked2} onChange={handleChange2}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox hasError labelText="SQL" checked={checked3} onChange={handleChange3}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
    </VisualPickerCheckboxGroup>
  );
};

export const HorizontalCheckboxGroup = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked1(event.target.checked);
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked2(event.target.checked);
  return (
    <VisualPickerCheckboxGroup
      orientation="horizontal"
      legend="Which service(s) would you like to test?"
      name={`${useUID()}_horizontal`}
      helpText="Select a service"
    >
      <VisualPickerCheckbox labelText="SQL" checked={checked1} onChange={handleChange1}>
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
              My company
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30">
              My company will be directly sending and receiving messages.
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
            <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
            <Text
              as="span"
              fontWeight="fontWeightBold"
              color="colorTextWeak"
              lineHeight="lineHeight40"
              fontSize="fontSize30"
            >
              Your business
            </Text>
          </Box>
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked2} onChange={handleChange2}>
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
              My customer&apos;s company
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30">
              Independent Software Vendor, Reseller or Partner who uses WhatsApp for end clients.
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
            <AvatarGroup variant="user" size="sizeIcon110">
              <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
              <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
              <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
            </AvatarGroup>
            <Text
              as="span"
              fontWeight="fontWeightBold"
              color="colorTextWeak"
              lineHeight="lineHeight40"
              fontSize="fontSize30"
            >
              Your business
            </Text>
          </Box>
        </Box>
      </VisualPickerCheckbox>
    </VisualPickerCheckboxGroup>
  );
};

export const HorizontalCheckboxGroupDisabledGroup = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked1(event.target.checked);
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked2(event.target.checked);
  return (
    <VisualPickerCheckboxGroup
      orientation="horizontal"
      legend="Which service(s) would you like to test?"
      name={`${useUID()}_horizontal`}
      helpText="Select a service"
      disabled
    >
      <VisualPickerCheckbox labelText="SQL" checked={checked1} onChange={handleChange1}>
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60" color="colorTextWeak">
              My company
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30" color="colorTextWeak">
              My company will be directly sending and receiving messages.
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
            <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
            <Text
              as="span"
              fontWeight="fontWeightBold"
              color="colorTextWeak"
              lineHeight="lineHeight40"
              fontSize="fontSize30"
            >
              Your business
            </Text>
          </Box>
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked2} onChange={handleChange2}>
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60" color="colorTextWeak">
              My customer&apos;s company
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30" color="colorTextWeak">
              Independent Software Vendor, Reseller or Partner who uses WhatsApp for end clients.
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
            <AvatarGroup variant="user" size="sizeIcon110">
              <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
              <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
              <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
            </AvatarGroup>
            <Text
              as="span"
              fontWeight="fontWeightBold"
              color="colorTextWeak"
              lineHeight="lineHeight40"
              fontSize="fontSize30"
            >
              Your business
            </Text>
          </Box>
        </Box>
      </VisualPickerCheckbox>
    </VisualPickerCheckboxGroup>
  );
};

export const HorizontalCheckboxGroupGroupError = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked1(event.target.checked);
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked2(event.target.checked);
  return (
    <VisualPickerCheckboxGroup
      orientation="horizontal"
      legend="Which service(s) would you like to test?"
      name={`${useUID()}_horizontal`}
      helpText="Select a service"
      errorText="Select a service"
    >
      <VisualPickerCheckbox labelText="SQL" checked={checked1} onChange={handleChange1}>
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
              My company
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30">
              My company will be directly sending and receiving messages.
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
            <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
            <Text
              as="span"
              fontWeight="fontWeightBold"
              color="colorTextWeak"
              lineHeight="lineHeight40"
              fontSize="fontSize30"
            >
              Your business
            </Text>
          </Box>
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked2} onChange={handleChange2}>
        <Box display="flex" flexDirection="column" rowGap="space30">
          <Box display="flex" flexDirection="column" rowGap="space30">
            <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
              My customer&apos;s company
            </Text>
            <Text as="span" fontWeight="fontWeightNormal" fontSize="fontSize30">
              Independent Software Vendor, Reseller or Partner who uses WhatsApp for end clients.
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
            <AvatarGroup variant="user" size="sizeIcon110">
              <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
              <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
              <Avatar name="user" icon={UserIcon} size="sizeIcon110" />
            </AvatarGroup>
            <Text
              as="span"
              fontWeight="fontWeightBold"
              color="colorTextWeak"
              lineHeight="lineHeight40"
              fontSize="fontSize30"
            >
              Your business
            </Text>
          </Box>
        </Box>
      </VisualPickerCheckbox>
    </VisualPickerCheckboxGroup>
  );
};

export const VerticalCheckboxGroupSelectAll = (): React.ReactNode => {
  const [checkedItems, setCheckedItems] = React.useState([true, false]);
  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;
  const checkboxRef = React.createRef<HTMLInputElement>();

  return (
    <VisualPickerCheckboxGroup
      orientation="vertical"
      legend={
        <Text as="span" color="currentColor">
          This is a Visual Picker Checkbox Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
        </Text>
      }
      name={`${useUID()}_select_all`}
      helpText="Help text should go here."
    >
      <VisualPickerCheckbox
        id={useUID()}
        labelText="Select all"
        checked={allChecked}
        indeterminate={indeterminate}
        ref={checkboxRef}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" icon={AcceptIcon} />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold">
              Select all
            </Text>
            <Text as="div" color="colorTextWeak">
              Click this option to select all options
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox
        id={useUID()}
        labelText="SQL"
        checked={checkedItems[0]}
        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
      >
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox
        id={useUID()}
        labelText="SQL"
        checked={checkedItems[1]}
        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
      >
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space50">
            <Avatar size="sizeIcon90" name="B T" color="decorative20" />
          </MediaFigure>
          <MediaBody>
            <Text as="div" fontWeight="fontWeightSemibold">
              SQL
            </Text>
            <Text as="div" color="colorTextWeak">
              Create any trait from your data warehouse by writing SQL.
            </Text>
          </MediaBody>
        </MediaObject>
      </VisualPickerCheckbox>
    </VisualPickerCheckboxGroup>
  );
};
