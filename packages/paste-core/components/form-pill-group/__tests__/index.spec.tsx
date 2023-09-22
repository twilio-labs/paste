import { fireEvent, render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { FormPill, FormPillGroup, useFormPillState } from '../src';
import { CustomFormPillGroup } from '../stories/customization.stories';
import { Basic, SelectableAndDismissable } from '../stories/index.stories';

const CustomElementFormPillGroup = (): JSX.Element => {
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

const I18nProp = (): JSX.Element => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup
        {...pillState}
        data-testid="form-pill-group"
        aria-label="Votre sports favoris:"
        i18nKeyboardControls="Appuyez sur Supprimer ou Retour arrière pour supprimer. Appuyez sur Entrée pour basculer la sélection."
      >
        <FormPill data-testid="form-pill" variant="error" i18nErrorLabel="(erreur)" {...pillState}>
          Le tennis
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

describe('FormPillGroup', () => {
  describe('Rendered shape', () => {
    it('has the correct aria attributes and semantic HTML', () => {
      render(<Basic />);
      expect(screen.getByText('Default pill')).toBeDefined();

      const group = screen.getByTestId('form-pill-group');
      expect(group.getAttribute('aria-label')).toBe('Basic pills:');
      expect(group.tagName).toBe('DIV');
      expect(group.getAttribute('role')).toBe('listbox');

      const pill = screen.getByTestId('form-pill-0');
      expect(pill.tagName).toBe('BUTTON');
      expect(pill.getAttribute('role')).toBe('option');
      expect(pill.getAttribute('aria-selected')).toBe('false');
    });
  });

  describe('Selecting and Removing', () => {
    it('can select and navigate pills', () => {
      render(<SelectableAndDismissable />);

      // Get the first pill
      const firstPill = screen.getByTestId('form-pill-0');
      // Click it and make sure it selected
      fireEvent.click(firstPill);
      expect(firstPill.getAttribute('aria-selected')).toBe('true');

      // Make sure it deselects on click
      fireEvent.click(firstPill);
      expect(firstPill.getAttribute('aria-selected')).toBe('false');

      // Make sure it selects on Enter key
      fireEvent.keyDown(firstPill, { key: 'Enter', code: 'Enter' });
      expect(firstPill.getAttribute('aria-selected')).toBe('true');

      // Make sure it deselects on Enter key
      fireEvent.keyDown(firstPill, { key: 'Enter', code: 'Enter' });
      expect(firstPill.getAttribute('aria-selected')).toBe('false');

      // Make sure we can navigate with right arrow
      fireEvent.keyDown(firstPill, { key: 'ArrowRight', code: 'ArrowRight' });
      if (document.activeElement == null) {
        throw new Error('document.activeElement is null');
      }
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-1');

      // Move right again and check for selection
      fireEvent.keyDown(document.activeElement, { key: 'ArrowRight', code: 'ArrowRight' });
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-2');
      fireEvent.keyDown(document.activeElement, { key: 'Enter', code: 'Enter' });
      expect(document.activeElement.getAttribute('aria-selected')).toBe('true');

      // Try moving left this time
      fireEvent.keyDown(document.activeElement, { key: 'ArrowLeft', code: 'ArrowLeft' });
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-1');

      // Loop movement
      fireEvent.keyDown(document.activeElement, { key: 'ArrowLeft', code: 'ArrowLeft' });
      fireEvent.keyDown(document.activeElement, { key: 'ArrowLeft', code: 'ArrowLeft' });
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-5');
    });

    it('can remove pills', () => {
      render(<SelectableAndDismissable />);

      /* Test click to remove */
      const firstPill = screen.getByRole('option', { name: 'Default pill' }).parentElement;
      const firstPillX = firstPill?.querySelector('[data-paste-element="FORM_PILL_CLOSE"]');
      fireEvent.click(firstPillX as Element);
      expect(firstPill).not.toBeInTheDocument();

      /* Test keyboard to remove */
      const secondPill = screen.getByRole('option', { name: 'Pill with icon' });
      fireEvent.keyDown(secondPill, { key: 'Delete', code: 'Delete' });
      expect(secondPill).not.toBeInTheDocument();

      const thirdPill = screen.getByRole('option', { name: 'Pill with avatar' });
      fireEvent.keyDown(thirdPill, { key: 'Backspace', code: 'Backspace' });
      expect(thirdPill).not.toBeInTheDocument();
    });
  });

  describe('Customization', () => {
    it('should set an element data attribute for FormPillGroup & FormPill', () => {
      render(<Basic />);
      const group = screen.getByTestId('form-pill-group');
      expect(group.getAttribute('data-paste-element')).toEqual('FORM_PILL_GROUP');

      const pill = screen.getByTestId('form-pill-0');
      expect(pill.getAttribute('data-paste-element')).toEqual('FORM_PILL');
    });

    it('should set a custom element data attribute for FormPillGroup & FormPill', () => {
      render(<CustomElementFormPillGroup />);
      const group = screen.getByTestId('form-pill-group');
      expect(group.getAttribute('data-paste-element')).toEqual('CUSTOM_PILL_GROUP');
      const pill = screen.getByTestId('form-pill');
      expect(pill.getAttribute('data-paste-element')).toEqual('CUSTOM_PILL');
    });

    it('should add custom styles to FormPillGroup & FormPill', () => {
      render(<CustomFormPillGroup />);

      const group = screen.getByTestId('form-pill-group');
      expect(group).toHaveStyleRule('margin', '0.75rem');

      const pill = screen.getByTestId('form-pill');
      expect(pill).toHaveStyleRule('background-color', 'rgb(245, 240, 252)');
    });
    it('should add custom styles to custom element FormPillGroup & FormPill', () => {
      render(
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
        </CustomizationProvider>,
      );
      const group = screen.getByTestId('form-pill-group');
      expect(group).toHaveStyleRule('margin', '0.75rem');

      const pill = screen.getByTestId('form-pill');
      expect(pill).toHaveStyleRule('background-color', 'rgb(231, 220, 250)');
    });
  });

  describe('i18n', () => {
    it('should have default keyboard controls text', () => {
      render(<Basic />);
      const keyboardControlsText = screen.getByText(
        'Press Delete or Backspace to remove. Press Enter to toggle selection.',
      );
      expect(keyboardControlsText).toBeDefined();
    });

    it('should use i18nKeyboardControls for keyboard controls text', () => {
      render(<I18nProp />);
      const keyboardControlsText = screen.getByText(
        'Appuyez sur Supprimer ou Retour arrière pour supprimer. Appuyez sur Entrée pour basculer la sélection.',
      );
      expect(keyboardControlsText).toBeDefined();
    });

    it('should have default error text', () => {
      render(<Basic />);
      const errorLabel = screen.getAllByText('(error)');
      expect(errorLabel).toBeDefined();
    });

    it('should use i18nErrorLabel for error text', () => {
      render(<I18nProp />);
      const errorLabel = screen.getByText('(erreur)');
      expect(errorLabel).toBeDefined();
    });
  });
});
