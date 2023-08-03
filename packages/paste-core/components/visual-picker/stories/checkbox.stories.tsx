// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {Avatar, AvatarGroup} from '@twilio-paste/avatar';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {AcceptIcon} from '@twilio-paste/icons/esm/AcceptIcon';
import {UserIcon} from '@twilio-paste/icons/esm/UserIcon';
import {Box} from '@twilio-paste/box';
import {useUID} from 'react-uid';

import {VisualPickerCheckboxGroup, VisualPickerCheckbox} from '../src';

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
            <Text as="div" fontWeight="fontWeightSemibold">
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
      legend={
        <Text as="span" color="currentColor">
          This is a Visual Picker Checkbox Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
        </Text>
      }
      name={`${useUID()}_horizontal`}
      helpText="Help text should go here."
    >
      <VisualPickerCheckbox labelText="SQL" checked={checked1} onChange={handleChange1}>
        <Box display="flex" rowGap="space80" flexDirection="column" alignItems="center" maxWidth="size40">
          <Box width="100%">
            <Text as="span" fontWeight="fontWeightBold" fontSize="fontSize60" lineHeight="lineHeight20">
              My company
            </Text>
          </Box>
          <Box display="flex" rowGap="space30" flexDirection="column" alignItems="center">
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
          <Text
            as="span"
            fontWeight="fontWeightLight"
            color="colorTextWeak"
            lineHeight="lineHeight30"
            fontSize="fontSize30"
          >
            My company will be directly sending and receiving messages.
          </Text>
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked2} onChange={handleChange2}>
        <Box display="flex" rowGap="space80" flexDirection="column" alignItems="center" maxWidth="size40">
          <Box width="100%">
            <Text as="span" fontWeight="fontWeightBold" fontSize="fontSize60" lineHeight="lineHeight20">
              My customer&apos;s company
            </Text>
          </Box>
          <Box display="flex" rowGap="space30" flexDirection="column" alignItems="center">
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
          <Text
            as="span"
            fontWeight="fontWeightLight"
            color="colorTextWeak"
            lineHeight="lineHeight30"
            fontSize="fontSize30"
          >
            Independent Software Vendor
          </Text>
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
      legend={
        <Text as="span" color="currentColor">
          This is a Visual Picker Checkbox Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
        </Text>
      }
      name={`${useUID()}_disabled_group`}
      helpText="Help text should go here."
      disabled
    >
      <VisualPickerCheckbox labelText="SQL" checked={checked1} onChange={handleChange1}>
        <Box display="flex" rowGap="space80" flexDirection="column" alignItems="center" maxWidth="size40">
          <Box width="100%">
            <Text
              as="span"
              fontWeight="fontWeightBold"
              fontSize="fontSize60"
              lineHeight="lineHeight20"
              color="colorTextWeak"
            >
              My company
            </Text>
          </Box>
          <Box display="flex" rowGap="space30" flexDirection="column" alignItems="center">
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
          <Text
            as="span"
            fontWeight="fontWeightLight"
            color="colorTextWeak"
            lineHeight="lineHeight30"
            fontSize="fontSize30"
          >
            My company will be directly sending and receiving messages.
          </Text>
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked2} onChange={handleChange2}>
        <Box display="flex" rowGap="space80" flexDirection="column" alignItems="center" maxWidth="size40">
          <Box width="100%">
            <Text
              as="span"
              fontWeight="fontWeightBold"
              fontSize="fontSize60"
              lineHeight="lineHeight20"
              color="colorTextWeak"
            >
              My customer&apos;s company
            </Text>
          </Box>
          <Box display="flex" rowGap="space30" flexDirection="column" alignItems="center">
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
          <Text
            as="span"
            fontWeight="fontWeightLight"
            color="colorTextWeak"
            lineHeight="lineHeight30"
            fontSize="fontSize30"
          >
            Independent Software Vendor, Reseller or Partner who uses WhatsApp for end clients.
          </Text>
        </Box>
      </VisualPickerCheckbox>
    </VisualPickerCheckboxGroup>
  );
};

export const HorizontalCheckboxGroupGroupError = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked1(event.target.checked);
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked2(event.target.checked);
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked3(event.target.checked);
  return (
    <VisualPickerCheckboxGroup
      orientation="horizontal"
      legend={
        <Text as="span" color="currentColor">
          This is a Visual Picker Checkbox Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
        </Text>
      }
      name={`${useUID()}_group_error`}
      helpText="Help text should go here."
      errorText="This is the error text."
    >
      <VisualPickerCheckbox labelText="SQL" checked={checked1} onChange={handleChange1}>
        <Box maxWidth="size30">
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
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked2} onChange={handleChange2}>
        <Box maxWidth="size30">
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
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox labelText="SQL" checked={checked3} onChange={handleChange3}>
        <Box maxWidth="size30">
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
        id="1"
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
        id="2"
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
        id="3"
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
