import * as React from 'react';
import {UnorderedList, ListItem} from '@twilio-paste/list';
import {Anchor} from '@twilio-paste/anchor';

import {Ingredients, Required, Related} from './Ingredients';

const SettingsIngredients: React.FC = () => {
  return (
    <Ingredients>
      <Required>
        <UnorderedList>
          <ListItem>
            <Anchor href="/components/breadcrumb">Breadcrumb</Anchor> and{' '}
            <Anchor href="/components/heading">Heading</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/form">Form</Anchor> and form elements like{' '}
            <Anchor href="/components/input">Input</Anchor>, <Anchor href="/components/checkbox">Checkbox</Anchor>,{' '}
            <Anchor href="/components/radio-group">Radio Group</Anchor>,{' '}
            <Anchor href="/components/select">Select</Anchor>, <Anchor href="/components/combobox">Combobox</Anchor>,{' '}
            <Anchor href="/components/textarea">Textarea</Anchor>,{' '}
            <Anchor href="/components/date-picker">Date Picker</Anchor>,{' '}
            <Anchor href="/components/time-picker">Time Picker</Anchor>,{' '}
            <Anchor href="/components/help-text">Help Text</Anchor>, and <Anchor href="/components/label">Label</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/button">Button</Anchor> and{' '}
            <Anchor href="/components/button-group">Button Group</Anchor>
          </ListItem>
        </UnorderedList>
      </Required>
      <Related>
        <UnorderedList>
          <ListItem>
            <Anchor href="/components/anchor">Anchor</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/avatar">Avatar</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/badge">Badge</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/callout">Callout</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/card">Card</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/description-list">Description List</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/in-page-navigation">In Page Navigation</Anchor> and{' '}
            <Anchor href="/components/tabs">Tabs</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/modal">Modal</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/paragraph">Paragraph</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/separator">Separator</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/switch">Switch</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/icon">Icons: Information, Copy, Edit</Anchor>
          </ListItem>
        </UnorderedList>
      </Related>
    </Ingredients>
  );
};

export {SettingsIngredients};
