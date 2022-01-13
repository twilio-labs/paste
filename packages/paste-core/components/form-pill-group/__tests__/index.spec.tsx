import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {CustomizationProvider} from '@twilio-paste/customization';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {useFormPillState, FormPillGroup, FormPill} from '../src';
import {Basic, SelectableAndRemovable, CustomFormPillGroup} from '../stories/index.stories';

const CustomElementFormPillGroup: React.FC = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup
        {...pillState}
        element="CUSTOM_PILL_GROUP"
        data-testid="form-pill-group"
        aria-label="Your favorite sports:"
      >
        <FormPill {...pillState} element="CUSTOM_PILL" data-testid="form-pill">
          Tennis
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

describe('FormPillGroup', () => {
  describe('Rendered shape', () => {
    it('has the correct aria attributes and semantic HTML', () => {
      const {getByTestId, getByText} = render(<Basic />);
      expect(getByText('Tennis')).toBeDefined();

      const group = getByTestId('form-pill-group');
      expect(group.getAttribute('aria-label')).toBe('Your favorite sports:');
      expect(group.tagName).toBe('DIV');
      expect(group.getAttribute('role')).toBe('listbox');

      const pill = getByTestId('form-pill');
      expect(pill.tagName).toBe('BUTTON');
      expect(pill.getAttribute('role')).toBe('option');
      expect(pill.getAttribute('aria-selected')).toBe('false');

      const pillSelected = getByTestId('form-pill-selected');
      expect(pillSelected.getAttribute('aria-selected')).toBe('true');
    });
  });

  describe('Selecting and Removing', () => {
    it('can select and navigate pills', () => {
      const {getByTestId} = render(<SelectableAndRemovable />);

      // Get the first pill
      const firstPill = getByTestId('form-pill-0');
      // Click it and make sure it selected
      fireEvent.click(firstPill);
      expect(firstPill.getAttribute('aria-selected')).toBe('true');

      // Make sure it deselects on click
      fireEvent.click(firstPill);
      expect(firstPill.getAttribute('aria-selected')).toBe('false');

      // Make sure it selects on Enter key
      fireEvent.keyDown(firstPill, {key: 'Enter', code: 'Enter'});
      expect(firstPill.getAttribute('aria-selected')).toBe('true');

      // Make sure we can navigate with right arrow
      fireEvent.keyDown(firstPill, {key: 'ArrowRight', code: 'ArrowRight'});
      if (document.activeElement == null) {
        throw new Error('document.activeElement is null');
      }
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-1');
      expect(document.activeElement.getAttribute('aria-selected')).toBe('false');

      // Move right again and check for selection
      fireEvent.keyDown(document.activeElement, {key: 'ArrowRight', code: 'ArrowRight'});
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-2');
      fireEvent.keyDown(document.activeElement, {key: 'Enter', code: 'Enter'});
      expect(document.activeElement.getAttribute('aria-selected')).toBe('false');

      // Try moving left this time
      fireEvent.keyDown(document.activeElement, {key: 'ArrowLeft', code: 'ArrowLeft'});
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-1');

      // Loop movement
      fireEvent.keyDown(document.activeElement, {key: 'ArrowLeft', code: 'ArrowLeft'});
      fireEvent.keyDown(document.activeElement, {key: 'ArrowLeft', code: 'ArrowLeft'});
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-3');
    });

    it('can remove pills', () => {
      const {getByTestId, getAllByText} = render(<SelectableAndRemovable />);

      /* Test click to remove */
      const xButtonScreenReaderElement = getAllByText('. Press delete or backspace to remove');
      // Because this example has several pills with X button
      const firstXButtonScreenReaderElement = xButtonScreenReaderElement[0];
      const firstPillXButton = firstXButtonScreenReaderElement.parentNode;
      if (firstPillXButton == null) {
        throw new Error('firstPillXButton is null');
      }

      fireEvent.click(firstPillXButton);
      expect(firstPillXButton).not.toBeInTheDocument();

      // We get `pill-0` index because after removal, the first pill is gone and the second becomes 0
      const secondPill = getByTestId('form-pill-0');
      fireEvent.keyDown(secondPill, {key: 'Delete', code: 'Delete'});
      expect(secondPill).not.toBeInTheDocument();

      // We get `pill-0` index because after removal, the second pill is gone and the third becomes 0
      const thirdPill = getByTestId('form-pill-0');
      fireEvent.keyDown(thirdPill, {key: 'Backspace', code: 'Backspace'});
      expect(thirdPill).not.toBeInTheDocument();
    });
  });

  describe('Customization', () => {
    it('should set an element data attribute for FormPillGroup & FormPill', () => {
      const {getByTestId} = render(<Basic />);
      const group = getByTestId('form-pill-group');
      expect(group.getAttribute('data-paste-element')).toEqual('FORM_PILL_GROUP');

      const pill = getByTestId('form-pill');
      expect(pill.getAttribute('data-paste-element')).toEqual('FORM_PILL');
    });

    it('should set a custom element data attribute for FormPillGroup & FormPill', () => {
      const {getByTestId} = render(<CustomElementFormPillGroup />);
      const group = getByTestId('form-pill-group');
      expect(group.getAttribute('data-paste-element')).toEqual('CUSTOM_PILL_GROUP');
      const pill = getByTestId('form-pill');
      expect(pill.getAttribute('data-paste-element')).toEqual('CUSTOM_PILL');
    });

    it('should add custom styles to FormPillGroup & FormPill', () => {
      const {getByTestId} = render(<CustomFormPillGroup />);

      const group = getByTestId('form-pill-group');
      expect(group).toHaveStyleRule('margin', '0.75rem');

      const pill = getByTestId('form-pill');
      expect(pill).toHaveStyleRule('background-color', 'rgb(231,220,250)');
    });
    it('should add custom styles to custom element FormPillGroup & FormPill', () => {
      const {getByTestId} = render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            CUSTOM_PILL_GROUP: {
              margin: 'space40',
            },
            CUSTOM_PILL: {
              backgroundColor: 'colorBackgroundNew',
              color: 'colorText',
              padding: 'space40',
            },
          }}
        >
          <CustomElementFormPillGroup />
        </CustomizationProvider>
      );
      const group = getByTestId('form-pill-group');
      expect(group).toHaveStyleRule('margin', '0.75rem');

      const pill = getByTestId('form-pill');
      expect(pill).toHaveStyleRule('background-color', 'rgb(231,220,250)');
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations #1', async () => {
      const {container} = render(<Basic />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('Should have no accessibility violations #2', async () => {
      const {container} = render(<SelectableAndRemovable />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
