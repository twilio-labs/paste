import { Anchor } from "@twilio-paste/anchor";
import { ListItem, UnorderedList } from "@twilio-paste/list";
import * as React from "react";

import { Ingredients, Related, Required } from "./Ingredients";

const WizardIngredients: React.FC = () => {
  return (
    <Ingredients>
      <Required>
        <UnorderedList>
          <ListItem>
            <Anchor href="/components/heading">Heading</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/button">Button</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/form">Form</Anchor> and form elements like{" "}
            <Anchor href="/components/input">Input</Anchor>, <Anchor href="/components/checkbox">Checkbox</Anchor>,{" "}
            <Anchor href="/components/radio-group">Radio Group</Anchor>,{" "}
            <Anchor href="/components/select">Select</Anchor>, <Anchor href="/components/combobox">Combobox</Anchor>,{" "}
            <Anchor href="/components/textarea">Textarea</Anchor>,{" "}
            <Anchor href="/components/date-picker">Date Picker</Anchor>,{" "}
            <Anchor href="/components/time-picker">Time Picker</Anchor>,{" "}
            <Anchor href="/components/visual-picker">Visual Picker</Anchor>,{" "}
            <Anchor href="/components/help-text">Help Text</Anchor>, and <Anchor href="/components/label">Label</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/icon">Icons: ArrowBack, ArrowForward</Anchor>
          </ListItem>
        </UnorderedList>
      </Required>
      <Related>
        <UnorderedList>
          <ListItem>
            <Anchor href="/components/breadcrumb">Breadcrumb</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/detail-text">Detail Text</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/progress-steps">Progress Steps</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/separator">Separator</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/sidebar">Sidebar</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/components/topbar">Topbar</Anchor>
          </ListItem>
        </UnorderedList>
      </Related>
    </Ingredients>
  );
};

export { WizardIngredients };
