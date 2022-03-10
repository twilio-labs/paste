import * as React from 'react';
import {render, fireEvent, screen, waitFor} from '@testing-library/react';

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

const I18nProp: React.FC = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup
        {...pillState}
        data-testid="form-pill-group"
        aria-label="Votre sports favoris:"
        i18nKeyboardControls="Appuyez sur Supprimer ou Retour arrière pour supprimer. Appuyez sur Entrée pour basculer la sélection."
      >
        <FormPill data-testid="form-pill" {...pillState}>
          Le tennis
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
    it('can select and navigate pills', async () => {
      const {getByTestId} = render(<SelectableAndRemovable />);

      // Get the first pill
      const firstPill = getByTestId('form-pill-0');
      // Click it and make sure it selected
      fireEvent.click(firstPill);
      await waitFor(() => {
        expect(firstPill.getAttribute('aria-selected')).toBe('true');
      });

      // Make sure it deselects on click
      fireEvent.click(firstPill);
      await waitFor(() => {
        expect(firstPill.getAttribute('aria-selected')).toBe('false');
      });

      // Make sure it selects on Enter key
      fireEvent.keyDown(firstPill, {key: 'Enter', code: 'Enter'});
      await waitFor(() => {
        expect(firstPill.getAttribute('aria-selected')).toBe('true');
      });

      // Make sure we can navigate with right arrow
      fireEvent.keyDown(firstPill, {key: 'ArrowRight', code: 'ArrowRight'});
      if (document.activeElement == null) {
        throw new Error('document.activeElement is null');
      }
      await waitFor(() => {
        expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-1');
        expect(document.activeElement.getAttribute('aria-selected')).toBe('false');
      });

      // Move right again and check for selection
      fireEvent.keyDown(document.activeElement, {key: 'ArrowRight', code: 'ArrowRight'});
      await waitFor(() => {
        expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-2');
      });
      fireEvent.keyDown(document.activeElement, {key: 'Enter', code: 'Enter'});
      await waitFor(() => {
        expect(document.activeElement.getAttribute('aria-selected')).toBe('false');
      });

      // Try moving left this time
      fireEvent.keyDown(document.activeElement, {key: 'ArrowLeft', code: 'ArrowLeft'});
      await waitFor(() => {
        expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-1');
      });

      // Loop movement
      fireEvent.keyDown(document.activeElement, {key: 'ArrowLeft', code: 'ArrowLeft'});
      fireEvent.keyDown(document.activeElement, {key: 'ArrowLeft', code: 'ArrowLeft'});
      await waitFor(() => {
        expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-3');
      });
    });

    it('can remove pills', async () => {
      const {getByRole} = render(<SelectableAndRemovable />);

      /* Test click to remove */
      const firstPill = getByRole('option', {name: 'Tennis'});
      const firstPillX = firstPill.querySelector('[data-paste-element="BOX"]');
      fireEvent.click(firstPillX as Element);
      await waitFor(() => {
        expect(firstPill).not.toBeInTheDocument();
      });

      /* Test keyboard to remove */
      const secondPill = getByRole('option', {name: 'Baseball'});
      fireEvent.keyDown(secondPill, {key: 'Delete', code: 'Delete'});
      await waitFor(() => {
        expect(secondPill).not.toBeInTheDocument();
      });

      const thirdPill = getByRole('option', {name: 'Football'});
      fireEvent.keyDown(thirdPill, {key: 'Backspace', code: 'Backspace'});
      await waitFor(() => {
        expect(thirdPill).not.toBeInTheDocument();
      });
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

  describe('i18n', () => {
    it('should have default keyboard controls text', () => {
      render(<Basic />);
      const keyboardControlsText = screen.getByText(
        'Press Delete or Backspace to remove. Press Enter to toggle selection.'
      );
      expect(keyboardControlsText).toBeDefined();
    });

    it('should use i18nKeyboardControls for keyboard controls text', () => {
      render(<I18nProp />);
      const keyboardControlsText = screen.getByText(
        'Appuyez sur Supprimer ou Retour arrière pour supprimer. Appuyez sur Entrée pour basculer la sélection.'
      );
      expect(keyboardControlsText).toBeDefined();
    });
  });
});
