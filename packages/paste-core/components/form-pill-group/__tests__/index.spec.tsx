import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CustomizationProvider} from '@twilio-paste/customization';
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
      await waitFor(() => {
        userEvent.click(firstPill);
      });
      expect(firstPill.getAttribute('aria-selected')).toBe('true');

      // Make sure it deselects on click
      await waitFor(() => {
        userEvent.click(firstPill);
      });
      expect(firstPill.getAttribute('aria-selected')).toBe('false');

      // Make sure it selects on Enter key
      await waitFor(() => {
        userEvent.keyboard('{enter}');
      });
      expect(firstPill.getAttribute('aria-selected')).toBe('true');

      // Make sure we can navigate with right arrow
      await waitFor(() => {
        userEvent.keyboard('{arrowright}');
      });
      if (document.activeElement == null) {
        throw new Error('document.activeElement is null');
      }
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-1');
      expect(document.activeElement.getAttribute('aria-selected')).toBe('false');

      // Move right again and check for selection
      await waitFor(() => {
        userEvent.keyboard('{arrowright}');
      });
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-2');
      await waitFor(() => {
        userEvent.keyboard('{enter}');
      });
      expect(document.activeElement.getAttribute('aria-selected')).toBe('false');

      // Try moving left this time
      await waitFor(() => {
        userEvent.keyboard('{arrowleft}');
      });
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-1');

      // Loop movement
      await waitFor(() => {
        userEvent.keyboard('{arrowleft}{arrowleft}');
      });
      expect(document.activeElement.getAttribute('data-testid')).toBe('form-pill-3');
    });

    it('can remove pills', async () => {
      const {getByRole} = render(<SelectableAndRemovable />);

      /* Test click to remove */
      const firstPill = getByRole('option', {name: 'Tennis'});
      const firstPillX = firstPill.querySelector('[data-paste-element="BOX"]');
      await waitFor(() => {
        userEvent.click(firstPillX as Element);
      });
      expect(firstPill).not.toBeInTheDocument();

      /* Test keyboard to remove */
      const secondPill = getByRole('option', {name: 'Baseball'});
      await waitFor(() => {
        secondPill.focus();
        userEvent.keyboard('{del}');
      });
      expect(secondPill).not.toBeInTheDocument();

      const thirdPill = getByRole('option', {name: 'Football'});
      await waitFor(() => {
        thirdPill.focus();
        userEvent.keyboard('{backspace}');
      });
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
